"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CUSTOMER_SESSION_COOKIE = exports.CUSTOMER_SESSION_TTL = exports.CUSTOMER_IDENTITY_ASSERTION_AUD = exports.CUSTOMER_IDENTITY_PROVIDER = exports.CUSTOMER_IDENTITY_NAMESPACE = void 0;
exports.CUSTOMER_IDENTITY_NAMESPACE = {
    WEMOTOO_EXTERNAL_ACCOUNT: 'wemotoo/external-account',
    YEPPI_GOOGLE: 'yeppi/google',
    YEPPI_FACEBOOK: 'yeppi/facebook',
    YEPPI_EMAIL: 'yeppi/email',
    YEPPI_PHONE_OTP: 'yeppi/phone-otp',
};
exports.CUSTOMER_IDENTITY_PROVIDER = {
    EXTERNAL_ACCOUNT: 'external-account',
    GOOGLE: 'google',
    FACEBOOK: 'facebook',
    EMAIL: 'email',
    PHONE_OTP: 'phone-otp',
};
exports.CUSTOMER_IDENTITY_ASSERTION_AUD = 'ecommerce-customer-session';
exports.CUSTOMER_SESSION_TTL = {
    ACCESS_SECONDS: 15 * 60,
    REFRESH_SECONDS: 30 * 24 * 60 * 60,
    ASSERTION_MAX_SECONDS: 90,
};
exports.CUSTOMER_SESSION_COOKIE = {
    ACCESS: 'customer_access',
    REFRESH: 'customer_refresh',
    CSRF: 'customer_csrf',
};
