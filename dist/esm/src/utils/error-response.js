function asRecord(value) {
    return value && typeof value === 'object' ? value : null;
}
function asErrorResponse(value) {
    const record = asRecord(value);
    if (!record || typeof record.message !== 'string' || !record.message.trim()) {
        return null;
    }
    // Require Nest/YEPPI error shape — plain Error objects also have `message`.
    if (!('statusCode' in record) && !('code' in record)) {
        return null;
    }
    return record;
}
/**
 * Extract Nest/YEPPI `ErrorResponse` from ofetch, Nitro createError, or raw Nest body.
 */
export function getErrorResponse(error) {
    const source = asRecord(error);
    if (!source) {
        return null;
    }
    const response = asRecord(source.response);
    const data = asRecord(source.data) ?? asRecord(response?._data);
    const nestedData = asRecord(data?.data);
    return (asErrorResponse(nestedData?.error) ??
        asErrorResponse(data?.error) ??
        asErrorResponse(source.error) ??
        asErrorResponse(source));
}
export function getErrorResponseMessage(error, fallback) {
    const message = getErrorResponse(error)?.message?.trim();
    return message || fallback;
}
