/**
 * Portal login sentinel: type this instead of a Merchant ID to authenticate
 * against MAIN `platform_user` for Platform Announcements / higher management.
 */
export declare const MASTER_LOGIN_ID = "MASTER";
export declare function isMasterLoginId(value: string | null | undefined): boolean;
