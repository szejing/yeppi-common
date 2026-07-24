"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMAIL = exports.STRIPE = exports.FIUU = exports.APPOINTMENT = exports.PRODUCT = exports.ORDER = exports.GENERAL = exports.MERCHANT = void 0;
exports.MERCHANT = {
    ID: 'MerchantId',
    NAME: 'MerchantName',
    LOGO: 'Logo',
    THUMBNAIL: 'Thumbnail',
    BANNER: 'Banner',
    PACKAGE: 'Package',
    ACCOUNT_STATUS: 'AccountStatus',
    COMPANY_NAME: 'CompanyName',
    COMPANY_SSM: 'CompanySsm',
    COMPANY_EMAIL_ADDRESS: 'CompanyEmailAddress',
    COMPANY_WEBSITE: 'CompanyWebsite',
    CONTACT_PERSON: 'ContactPerson',
    PHONE_NO: 'PhoneNo',
    DIAL_CODE: 'DialCode',
    JOINED_DATE: 'JoinedDate',
    EXPIRED_DATE: 'ExpiredDate',
    SUBS_DURATION: 'SubscriptionDuration',
    ADDRESS1: 'Address1',
    ADDRESS2: 'Address2',
    ADDRESS3: 'Address3',
    ADDRESS_CITY: 'AddressCity',
    ADDRESS_COUNTRY: 'AddressCountry',
    ADDRESS_STATE: 'AddressState',
    ADDRESS_POSTAL_CODE: 'AddressPostalCode',
    LATITUDE: 'Latitude',
    LONGITUDE: 'Longitude',
    OPERATION_OFF_DAYS: 'OperationOffDays',
    OPERATION_START_TIME: 'OperationStartTime',
    OPERATION_END_TIME: 'OperationEndTime',
};
exports.GENERAL = {
    MAX_PRODUCTS: 'MaxProducts',
    MERCHANT_ID: 'MerchantId',
    HOST_URL: 'HostUrl',
    SECRET_KEY: 'SecretKey',
};
exports.ORDER = {
    PREFIX_ORDER_NO: 'PrefixOrderNo',
    LAST_ORDER_NO: 'LastOrderNo',
    MIN_ORDER_NO_LENGTH: 'MinOrderNoLength',
    INITIAL_ORDER_NO: 'InitialOrderNo',
    AUTO_CONFIRM_CASH_ORDER: 'AutoConfirmCashOrder',
    ORDER_COMPLETION_VALIDATION: 'OrderCompletionValidation',
};
exports.PRODUCT = {
    HIDE_LONG_DESC: 'HideLongDesc',
};
exports.APPOINTMENT = {
    AUTO_CONFIRM: 'AutoConfirm',
};
exports.FIUU = {
    V_KEY: 'FiuuVKey',
    S_KEY: 'FiuuSKey',
    USE_EXT_FORMAT: 'FiuuExtFormat',
    AUTO_REFUND: 'FiuuAutoRefund',
};
exports.STRIPE = {
    WEBHOOK_SECRET: 'StripeWebhookSecret',
    AUTO_REFUND: 'StripeAutoRefund',
};
exports.EMAIL = {
    INVOICE: 'SendInvoice',
    RECEIPT: 'SendReceipt',
    REFUND: 'SendRefund',
    CANCEL: 'SendCancel',
    APPOINTMENT: 'SendAppointment',
    WELCOME: 'SendWelcome',
    ORDER_CONFIRMATION: 'SendOrderConfirmation',
    SHIPPED: 'SendShipped',
    ADMIN_RECEIVE_EMAIL_UPDATE: 'AdminReceiveEmailUpdate',
};
