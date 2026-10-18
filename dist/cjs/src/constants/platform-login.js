"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MASTER_LOGIN_ID = void 0;
exports.isMasterLoginId = isMasterLoginId;
/**
 * Portal login sentinel: type this instead of a Merchant ID to authenticate
 * against MAIN `platform_user` for Platform Announcements / higher management.
 */
exports.MASTER_LOGIN_ID = 'MASTER';
function isMasterLoginId(value) {
    return (value ?? '').trim().toUpperCase() === exports.MASTER_LOGIN_ID;
}
