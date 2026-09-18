export declare const STORE_HANDLE_MAX_LENGTH = 80;
export declare const STORE_HANDLE_FALLBACK = "store";
export declare const STORE_HANDLE_RESERVED: Set<string>;
export type StoreHandleValidationReason = 'empty' | 'invalid' | 'reserved' | 'merchant_id_shape' | 'too_long';
export declare function isMerchantIdParam(value: string | null | undefined): boolean;
export declare function slugifyToStoreHandle(value: string | null | undefined): string;
export declare function allocateStoreHandle(name: string | null | undefined, taken: Iterable<string>): string;
export declare function validateStoreHandle(value: string | null | undefined): {
    ok: true;
    handle: string;
} | {
    ok: false;
    reason: StoreHandleValidationReason;
};
export declare function merchantStorePath(handle: string): string;
export declare function merchantStoreProductPath(handle: string, productSegment: string): string;
