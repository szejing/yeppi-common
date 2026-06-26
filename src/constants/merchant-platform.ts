export const X_PLATFORM_HEADER = 'x-platform';

export const APP_PLATFORM = {
  WEMOTOO: 'wemotoo',
  YEPPI: 'yeppi',
} as const;

export type AppPlatform = (typeof APP_PLATFORM)[keyof typeof APP_PLATFORM];

export const MERCHANT_PLATFORMS = Object.values(APP_PLATFORM) as AppPlatform[];

export const DEFAULT_APP_PLATFORM: AppPlatform = APP_PLATFORM.WEMOTOO;

export function normalizeAppPlatform(
  value: string | string[] | undefined,
): AppPlatform | undefined {
  const raw = Array.isArray(value) ? value[0] : value;

  if (!raw) {
    return undefined;
  }

  const platform = raw.trim().toLowerCase();

  return MERCHANT_PLATFORMS.includes(platform as AppPlatform)
    ? (platform as AppPlatform)
    : undefined;
}

export function resolveAppPlatform(
  value: string | string[] | undefined,
): AppPlatform {
  return normalizeAppPlatform(value) ?? DEFAULT_APP_PLATFORM;
}
