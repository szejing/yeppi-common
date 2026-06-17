export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING_PAYMENT"] = "pending_payment";
    /** Paid, awaiting fulfillment / ops (CRM fulfillment phase 1). */
    OrderStatus["PAID"] = "paid";
    OrderStatus["PROCESSING"] = "processing";
    OrderStatus["SHIPPED"] = "shipped";
    OrderStatus["DELIVERED"] = "delivered";
    OrderStatus["COMPLETED"] = "completed";
    OrderStatus["CANCELLED"] = "cancelled";
    OrderStatus["REFUNDED"] = "refunded";
    OrderStatus["REQUIRES_ACTION"] = "requires_action";
})(OrderStatus || (OrderStatus = {}));
export const ORDER_STATUS_COLORS = {
    [OrderStatus.PENDING_PAYMENT]: 'info',
    [OrderStatus.PAID]: 'info',
    [OrderStatus.PROCESSING]: 'info',
    [OrderStatus.SHIPPED]: 'primary',
    [OrderStatus.DELIVERED]: 'success',
    [OrderStatus.COMPLETED]: 'success',
    [OrderStatus.CANCELLED]: 'error',
    [OrderStatus.REFUNDED]: 'error',
    [OrderStatus.REQUIRES_ACTION]: 'warning',
};
export function getOrderStatusColor(status) {
    return ORDER_STATUS_COLORS[status];
}
