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
/**
 * Extract Nest/YEPPI `ErrorResponse` from ofetch, Nitro createError, or raw Nest body.
 */
export declare function getErrorResponse(error: unknown): ErrorResponse | null;
export declare function getErrorResponseMessage(error: unknown, fallback: string): string;
//# sourceMappingURL=error-response.d.ts.map