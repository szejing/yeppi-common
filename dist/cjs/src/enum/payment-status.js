"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAYMENT_STATUS_COLORS = exports.PaymentStatus = void 0;
exports.getPaymentStatusColor = getPaymentStatusColor;
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["PAID"] = "paid";
    PaymentStatus["REFUNDED"] = "refunded";
    PaymentStatus["PENDING_REFUND"] = "pending_refund";
    PaymentStatus["PARTIALLY_REFUNDED"] = "partially_refunded";
    PaymentStatus["PARTIALLY_PAID"] = "partially_paid";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
exports.PAYMENT_STATUS_COLORS = {
    [PaymentStatus.PENDING]: 'info',
    [PaymentStatus.PAID]: 'success',
    [PaymentStatus.REFUNDED]: 'error',
    [PaymentStatus.PENDING_REFUND]: 'warning',
    [PaymentStatus.PARTIALLY_REFUNDED]: 'warning',
    [PaymentStatus.PARTIALLY_PAID]: 'warning',
};
function getPaymentStatusColor(status) {
    return exports.PAYMENT_STATUS_COLORS[status];
}
