import type { UiBadgeColor } from './order-status';

export enum PaymentStatus {
	PENDING = 'pending',
	PAID = 'paid',
	REFUNDED = 'refunded',
	PENDING_REFUND = 'pending_refund',
	PARTIALLY_REFUNDED = 'partially_refunded',
	PARTIALLY_PAID = 'partially_paid',
}

export const PAYMENT_STATUS_COLORS: Record<PaymentStatus, UiBadgeColor> = {
	[PaymentStatus.PENDING]: 'info',
	[PaymentStatus.PAID]: 'success',
	[PaymentStatus.REFUNDED]: 'error',
	[PaymentStatus.PENDING_REFUND]: 'warning',
	[PaymentStatus.PARTIALLY_REFUNDED]: 'warning',
	[PaymentStatus.PARTIALLY_PAID]: 'warning',
};

export function getPaymentStatusColor(status: PaymentStatus | string): UiBadgeColor | undefined {
	return PAYMENT_STATUS_COLORS[status as PaymentStatus];
}
