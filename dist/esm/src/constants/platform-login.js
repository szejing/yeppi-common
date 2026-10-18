/**
 * Portal login sentinel: type this instead of a Merchant ID to authenticate
 * against MAIN `platform_user` for Platform Announcements / higher management.
 */
export const MASTER_LOGIN_ID = 'MASTER';
export function isMasterLoginId(value) {
    return (value ?? '').trim().toUpperCase() === MASTER_LOGIN_ID;
}
