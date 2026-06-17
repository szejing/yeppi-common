export var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["PAID"] = "paid";
    PaymentStatus["REFUNDED"] = "refunded";
    PaymentStatus["PENDING_REFUND"] = "pending_refund";
    PaymentStatus["PARTIALLY_REFUNDED"] = "partially_refunded";
    PaymentStatus["PARTIALLY_PAID"] = "partially_paid";
})(PaymentStatus || (PaymentStatus = {}));
export const PAYMENT_STATUS_COLORS = {
    [PaymentStatus.PENDING]: 'info',
    [PaymentStatus.PAID]: 'success',
    [PaymentStatus.REFUNDED]: 'error',
    [PaymentStatus.PENDING_REFUND]: 'warning',
    [PaymentStatus.PARTIALLY_REFUNDED]: 'warning',
    [PaymentStatus.PARTIALLY_PAID]: 'warning',
};
export function getPaymentStatusColor(status) {
    return PAYMENT_STATUS_COLORS[status];
}
