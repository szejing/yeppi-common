export declare enum OrderStatus {
    PENDING_PAYMENT = "pending_payment",
    /** Paid, awaiting fulfillment / ops (CRM fulfillment phase 1). */
    PAID = "paid",
    PROCESSING = "processing",
    SHIPPED = "shipped",
    DELIVERED = "delivered",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
    REFUNDED = "refunded",
    REQUIRES_ACTION = "requires_action"
}
export type UiBadgeColor = 'primary' | 'error' | 'success' | 'warning' | 'secondary' | 'info' | 'neutral';
export declare const ORDER_STATUS_COLORS: Record<OrderStatus, UiBadgeColor>;
export declare function getOrderStatusColor(status: OrderStatus | string): UiBadgeColor | undefined;
//# sourceMappingURL=order-status.d.ts.map