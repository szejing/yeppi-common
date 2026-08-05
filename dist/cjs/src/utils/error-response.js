"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorResponse = getErrorResponse;
exports.getErrorResponseMessage = getErrorResponseMessage;
/** ofetch FetchError.message looks like `[POST] "/api/...": 400 ...` */
const OFETCH_MESSAGE = /^\[(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)\]\s+/i;
function asRecord(value) {
    return value && typeof value === 'object' ? value : null;
}
function asErrorResponse(value) {
    const record = asRecord(value);
    if (!record || typeof record.message !== 'string' || !record.message.trim()) {
        return null;
    }
    // Require Nest/YEPPI error shape — plain Error / FetchError also have `message`.
    if (!('statusCode' in record) && !('code' in record)) {
        return null;
    }
    // Reject ofetch FetchError / top-level H3 wrappers (they have statusCode + dirty message).
    if (OFETCH_MESSAGE.test(record.message.trim())) {
        return null;
    }
    if (record.error === true || typeof record.url === 'string' || Array.isArray(record.stack)) {
        return null;
    }
    return record;
}
/**
 * Extract Nest/YEPPI `ErrorResponse` from ofetch, Nitro createError, or raw Nest body.
 */
function getErrorResponse(error) {
    const source = asRecord(error);
    if (!source) {
        return null;
    }
    const response = asRecord(source.response);
    const data = asRecord(source.data) ?? asRecord(response?._data);
    const nestedData = asRecord(data?.data);
    const nestedNested = asRecord(nestedData?.data);
    return (asErrorResponse(nestedNested?.error) ??
        asErrorResponse(nestedData?.error) ??
        asErrorResponse(data?.error) ??
        asErrorResponse(source.error) ??
        null);
}
function getErrorResponseMessage(error, fallback) {
    const message = getErrorResponse(error)?.message?.trim();
    return message || fallback;
}
