export const X_PLATFORM_HEADER = 'x-platform';
export const APP_PLATFORM = {
    WEMOTOO: 'wemotoo',
    YEPPI: 'yeppi',
};
export const MERCHANT_PLATFORMS = Object.values(APP_PLATFORM);
export const DEFAULT_APP_PLATFORM = APP_PLATFORM.WEMOTOO;
export function normalizeAppPlatform(value) {
    const raw = Array.isArray(value) ? value[0] : value;
    if (!raw) {
        return undefined;
    }
    const platform = raw.trim().toLowerCase();
    return MERCHANT_PLATFORMS.includes(platform)
        ? platform
        : undefined;
}
export function resolveAppPlatform(value) {
    return normalizeAppPlatform(value) ?? DEFAULT_APP_PLATFORM;
}
