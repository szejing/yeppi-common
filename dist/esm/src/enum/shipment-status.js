export var ShipmentStatus;
(function (ShipmentStatus) {
    ShipmentStatus["PENDING"] = "pending";
    ShipmentStatus["SHIPPED"] = "shipped";
    ShipmentStatus["IN_TRANSIT"] = "in_transit";
    ShipmentStatus["DELIVERED"] = "delivered";
    ShipmentStatus["FAILED"] = "failed";
})(ShipmentStatus || (ShipmentStatus = {}));
export const SHIPMENT_STATUS_COLORS = {
    [ShipmentStatus.PENDING]: 'warning',
    [ShipmentStatus.SHIPPED]: 'primary',
    [ShipmentStatus.IN_TRANSIT]: 'info',
    [ShipmentStatus.DELIVERED]: 'success',
    [ShipmentStatus.FAILED]: 'error',
};
export function getShipmentStatusColor(status) {
    return SHIPMENT_STATUS_COLORS[status];
}
