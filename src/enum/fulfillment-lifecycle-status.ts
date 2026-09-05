import type { UiBadgeColor } from './order-status';

/**
 * Warehouse-style fulfillment steps for CRM Phase 1.
 * Distinct from {@link FulfillmentStatus} (legacy line-level / provider states).
 */
export enum FulfillmentLifecycleStatus {
	PENDING = 'pending',
	PROCESSING = 'processing',
	PACKED = 'packed',
	FULFILLED = 'fulfilled',
}

export const FULFILLMENT_LIFECYCLE_STATUS_COLORS: Record<FulfillmentLifecycleStatus, UiBadgeColor> = {
	[FulfillmentLifecycleStatus.PENDING]: 'warning',
	[FulfillmentLifecycleStatus.PROCESSING]: 'info',
	[FulfillmentLifecycleStatus.PACKED]: 'primary',
	[FulfillmentLifecycleStatus.FULFILLED]: 'success',
};

export function getFulfillmentLifecycleStatusColor(
	status: FulfillmentLifecycleStatus | string,
): UiBadgeColor | undefined {
	return FULFILLMENT_LIFECYCLE_STATUS_COLORS[status as FulfillmentLifecycleStatus];
}
