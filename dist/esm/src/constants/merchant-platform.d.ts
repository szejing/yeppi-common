export declare const X_PLATFORM_HEADER = "x-platform";
export declare const APP_PLATFORM: {
    readonly WEMOTOO: "wemotoo";
    readonly YEPPI: "yeppi";
};
export type AppPlatform = (typeof APP_PLATFORM)[keyof typeof APP_PLATFORM];
export declare const MERCHANT_PLATFORMS: AppPlatform[];
export declare const DEFAULT_APP_PLATFORM: AppPlatform;
export declare function normalizeAppPlatform(value: string | string[] | undefined): AppPlatform | undefined;
export declare function resolveAppPlatform(value: string | string[] | undefined): AppPlatform;
