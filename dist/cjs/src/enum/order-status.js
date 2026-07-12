"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDER_STATUS_COLORS = exports.OrderStatus = void 0;
exports.getOrderStatusColor = getOrderStatusColor;
/**
 * Merchant/customer workflow timeline for orders.
 * Payment truth lives in {@link PaymentStatus}; warehouse steps in
 * {@link FulfillmentLifecycleStatus}; courier steps in {@link ShipmentStatus}.
 */
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING_PAYMENT"] = "pending_payment";
    OrderStatus["CONFIRMED"] = "confirmed";
    OrderStatus["PAID"] = "paid";
    OrderStatus["PROCESSING"] = "processing";
    OrderStatus["READY_FOR_PICKUP"] = "ready_for_pickup";
    OrderStatus["SHIPPED"] = "shipped";
    OrderStatus["DELIVERED"] = "delivered";
    OrderStatus["COMPLETED"] = "completed";
    OrderStatus["CANCELLED"] = "cancelled";
    OrderStatus["REFUNDED"] = "refunded";
    OrderStatus["REQUIRES_ACTION"] = "requires_action";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
exports.ORDER_STATUS_COLORS = {
    [OrderStatus.PENDING_PAYMENT]: 'info',
    [OrderStatus.CONFIRMED]: 'info',
    [OrderStatus.PAID]: 'info',
    [OrderStatus.PROCESSING]: 'info',
    [OrderStatus.READY_FOR_PICKUP]: 'primary',
    [OrderStatus.SHIPPED]: 'primary',
    [OrderStatus.DELIVERED]: 'success',
    [OrderStatus.COMPLETED]: 'success',
    [OrderStatus.CANCELLED]: 'error',
    [OrderStatus.REFUNDED]: 'error',
    [OrderStatus.REQUIRES_ACTION]: 'warning',
};
function getOrderStatusColor(status) {
    return exports.ORDER_STATUS_COLORS[status];
}
