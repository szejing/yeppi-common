/**
 * Nest HttpExceptionFilter `error` payload (also re-thrown by Nuxt proxies
 * as `createError({ data: { data: { error } } })` for client factories).
 */
export type ErrorResponse = {
	code: number;
	message: string;
	statusCode: number;
	timestamp: string;
	path: string;
	method: string;
	metadata?: Record<string, unknown>;
};

function asRecord(value: unknown): Record<string, unknown> | null {
	return value && typeof value === 'object' ? (value as Record<string, unknown>) : null;
}

function asErrorResponse(value: unknown): ErrorResponse | null {
	const record = asRecord(value);
	if (!record || typeof record.message !== 'string' || !record.message.trim()) {
		return null;
	}
	// Require Nest/YEPPI error shape — plain Error objects also have `message`.
	if (!('statusCode' in record) && !('code' in record)) {
		return null;
	}
	return record as ErrorResponse;
}

/**
 * Extract Nest/YEPPI `ErrorResponse` from ofetch, Nitro createError, or raw Nest body.
 */
export function getErrorResponse(error: unknown): ErrorResponse | null {
	const source = asRecord(error);
	if (!source) {
		return null;
	}

	const response = asRecord(source.response);
	const data = asRecord(source.data) ?? asRecord(response?._data);
	const nestedData = asRecord(data?.data);

	return (
		asErrorResponse(nestedData?.error) ??
		asErrorResponse(data?.error) ??
		asErrorResponse(source.error) ??
		asErrorResponse(source)
	);
}

export function getErrorResponseMessage(error: unknown, fallback: string): string {
	const message = getErrorResponse(error)?.message?.trim();
	return message || fallback;
}
