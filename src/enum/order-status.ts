export enum OrderStatus {
	PENDING_PAYMENT = 'pending_payment',
	/** Paid, awaiting fulfillment / ops (CRM fulfillment phase 1). */
	PAID = 'paid',
	PROCESSING = 'processing',
	SHIPPED = 'shipped',
	DELIVERED = 'delivered',
	COMPLETED = 'completed',
	CANCELLED = 'cancelled',
	REFUNDED = 'refunded',
	REQUIRES_ACTION = 'requires_action',
}

export type UiBadgeColor =
	| 'primary'
	| 'error'
	| 'success'
	| 'warning'
	| 'secondary'
	| 'info'
	| 'neutral';

export const ORDER_STATUS_COLORS: Record<OrderStatus, UiBadgeColor> = {
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

export function getOrderStatusColor(status: OrderStatus | string): UiBadgeColor | undefined {
	return ORDER_STATUS_COLORS[status as OrderStatus];
}
