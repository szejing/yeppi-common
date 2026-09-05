import type { UiBadgeColor } from './order-status';

export enum ShipmentStatus {
	PENDING = 'pending',
	SHIPPED = 'shipped',
	IN_TRANSIT = 'in_transit',
	DELIVERED = 'delivered',
	FAILED = 'failed',
}

export const SHIPMENT_STATUS_COLORS: Record<ShipmentStatus, UiBadgeColor> = {
	[ShipmentStatus.PENDING]: 'warning',
	[ShipmentStatus.SHIPPED]: 'primary',
	[ShipmentStatus.IN_TRANSIT]: 'info',
	[ShipmentStatus.DELIVERED]: 'success',
	[ShipmentStatus.FAILED]: 'error',
};

export function getShipmentStatusColor(status: ShipmentStatus | string): UiBadgeColor | undefined {
	return SHIPMENT_STATUS_COLORS[status as ShipmentStatus];
}
