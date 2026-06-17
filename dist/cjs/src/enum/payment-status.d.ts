import type { UiBadgeColor } from './order-status';
export declare enum PaymentStatus {
    PENDING = "pending",
    PAID = "paid",
    REFUNDED = "refunded",
    PENDING_REFUND = "pending_refund",
    PARTIALLY_REFUNDED = "partially_refunded",
    PARTIALLY_PAID = "partially_paid"
}
export declare const PAYMENT_STATUS_COLORS: Record<PaymentStatus, UiBadgeColor>;
export declare function getPaymentStatusColor(status: PaymentStatus | string): UiBadgeColor | undefined;
//# sourceMappingURL=payment-status.d.ts.map