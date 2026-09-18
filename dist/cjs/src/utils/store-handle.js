"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STORE_HANDLE_RESERVED = exports.STORE_HANDLE_FALLBACK = exports.STORE_HANDLE_MAX_LENGTH = void 0;
exports.isMerchantIdParam = isMerchantIdParam;
exports.slugifyToStoreHandle = slugifyToStoreHandle;
exports.allocateStoreHandle = allocateStoreHandle;
exports.validateStoreHandle = validateStoreHandle;
exports.merchantStorePath = merchantStorePath;
exports.merchantStoreProductPath = merchantStoreProductPath;
exports.STORE_HANDLE_MAX_LENGTH = 80;
exports.STORE_HANDLE_FALLBACK = 'store';
exports.STORE_HANDLE_RESERVED = new Set([
    'api',
    'appointments',
    'cart',
    'checkout',
    'login',
    'merchant-nearby',
    'merchants',
    'order',
    'orders',
    'partner-merchant',
    'products',
    'register',
    'user',
]);
const MERCHANT_ID_SHAPE = /^[my][0-9]+$/;
const HANDLE_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
function isMerchantIdParam(value) {
    return MERCHANT_ID_SHAPE.test(String(value ?? '').trim().toLowerCase());
}
function slugifyToStoreHandle(value) {
    const slug = String(value ?? '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, exports.STORE_HANDLE_MAX_LENGTH)
        .replace(/-+$/g, '');
    if (!slug || exports.STORE_HANDLE_RESERVED.has(slug) || MERCHANT_ID_SHAPE.test(slug)) {
        return exports.STORE_HANDLE_FALLBACK;
    }
    return slug;
}
function allocateStoreHandle(name, taken) {
    const used = new Set([...taken].map((handle) => handle.trim().toLowerCase()).filter(Boolean));
    const base = slugifyToStoreHandle(name);
    if (!used.has(base)) {
        return base;
    }
    let n = 2;
    while (used.has(`${base}-${n}`)) {
        n += 1;
    }
    return `${base}-${n}`;
}
function validateStoreHandle(value) {
    const handle = String(value ?? '')
        .trim()
        .toLowerCase();
    if (!handle) {
        return { ok: false, reason: 'empty' };
    }
    if (handle.length > exports.STORE_HANDLE_MAX_LENGTH) {
        return { ok: false, reason: 'too_long' };
    }
    if (!HANDLE_PATTERN.test(handle)) {
        return { ok: false, reason: 'invalid' };
    }
    if (MERCHANT_ID_SHAPE.test(handle)) {
        return { ok: false, reason: 'merchant_id_shape' };
    }
    if (exports.STORE_HANDLE_RESERVED.has(handle)) {
        return { ok: false, reason: 'reserved' };
    }
    return { ok: true, handle };
}
function merchantStorePath(handle) {
    return `/merchants/${encodeURIComponent(handle)}`;
}
function merchantStoreProductPath(handle, productSegment) {
    return `${merchantStorePath(handle)}/products/${encodeURIComponent(productSegment)}`;
}
