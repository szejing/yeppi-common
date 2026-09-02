export const CUSTOMER_IDENTITY_NAMESPACE = {
    WEMOTOO_EXTERNAL_ACCOUNT: 'wemotoo/external-account',
    YEPPI_GOOGLE: 'yeppi/google',
    YEPPI_FACEBOOK: 'yeppi/facebook',
    YEPPI_EMAIL: 'yeppi/email',
    YEPPI_PHONE_OTP: 'yeppi/phone-otp',
};
export const CUSTOMER_IDENTITY_PROVIDER = {
    EXTERNAL_ACCOUNT: 'external-account',
    GOOGLE: 'google',
    FACEBOOK: 'facebook',
    EMAIL: 'email',
    PHONE_OTP: 'phone-otp',
};
export const CUSTOMER_IDENTITY_ASSERTION_AUD = 'ecommerce-customer-session';
export const CUSTOMER_SESSION_TTL = {
    ACCESS_SECONDS: 15 * 60,
    REFRESH_SECONDS: 30 * 24 * 60 * 60,
    ASSERTION_MAX_SECONDS: 90,
};
export const CUSTOMER_SESSION_COOKIE = {
    ACCESS: 'customer_access',
    REFRESH: 'customer_refresh',
    CSRF: 'customer_csrf',
};
