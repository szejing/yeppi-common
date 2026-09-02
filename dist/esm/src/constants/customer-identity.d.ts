export declare const CUSTOMER_IDENTITY_NAMESPACE: {
    readonly WEMOTOO_EXTERNAL_ACCOUNT: "wemotoo/external-account";
    readonly YEPPI_GOOGLE: "yeppi/google";
    readonly YEPPI_FACEBOOK: "yeppi/facebook";
    readonly YEPPI_EMAIL: "yeppi/email";
    readonly YEPPI_PHONE_OTP: "yeppi/phone-otp";
};
export type CustomerIdentityNamespace = (typeof CUSTOMER_IDENTITY_NAMESPACE)[keyof typeof CUSTOMER_IDENTITY_NAMESPACE];
export declare const CUSTOMER_IDENTITY_PROVIDER: {
    readonly EXTERNAL_ACCOUNT: "external-account";
    readonly GOOGLE: "google";
    readonly FACEBOOK: "facebook";
    readonly EMAIL: "email";
    readonly PHONE_OTP: "phone-otp";
};
export type CustomerIdentityProvider = (typeof CUSTOMER_IDENTITY_PROVIDER)[keyof typeof CUSTOMER_IDENTITY_PROVIDER];
export declare const CUSTOMER_IDENTITY_ASSERTION_AUD = "ecommerce-customer-session";
export declare const CUSTOMER_SESSION_TTL: {
    readonly ACCESS_SECONDS: number;
    readonly REFRESH_SECONDS: number;
    readonly ASSERTION_MAX_SECONDS: 90;
};
export declare const CUSTOMER_SESSION_COOKIE: {
    readonly ACCESS: "customer_access";
    readonly REFRESH: "customer_refresh";
    readonly CSRF: "customer_csrf";
};
