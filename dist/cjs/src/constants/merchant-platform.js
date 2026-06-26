"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_APP_PLATFORM = exports.MERCHANT_PLATFORMS = exports.APP_PLATFORM = exports.X_PLATFORM_HEADER = void 0;
exports.normalizeAppPlatform = normalizeAppPlatform;
exports.resolveAppPlatform = resolveAppPlatform;
exports.X_PLATFORM_HEADER = 'x-platform';
exports.APP_PLATFORM = {
    WEMOTOO: 'wemotoo',
    YEPPI: 'yeppi',
};
exports.MERCHANT_PLATFORMS = Object.values(exports.APP_PLATFORM);
exports.DEFAULT_APP_PLATFORM = exports.APP_PLATFORM.WEMOTOO;
function normalizeAppPlatform(value) {
    const raw = Array.isArray(value) ? value[0] : value;
    if (!raw) {
        return undefined;
    }
    const platform = raw.trim().toLowerCase();
    return exports.MERCHANT_PLATFORMS.includes(platform)
        ? platform
        : undefined;
}
function resolveAppPlatform(value) {
    return normalizeAppPlatform(value) ?? exports.DEFAULT_APP_PLATFORM;
}
