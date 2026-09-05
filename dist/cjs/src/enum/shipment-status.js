"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHIPMENT_STATUS_COLORS = exports.ShipmentStatus = void 0;
exports.getShipmentStatusColor = getShipmentStatusColor;
var ShipmentStatus;
(function (ShipmentStatus) {
    ShipmentStatus["PENDING"] = "pending";
    ShipmentStatus["SHIPPED"] = "shipped";
    ShipmentStatus["IN_TRANSIT"] = "in_transit";
    ShipmentStatus["DELIVERED"] = "delivered";
    ShipmentStatus["FAILED"] = "failed";
})(ShipmentStatus || (exports.ShipmentStatus = ShipmentStatus = {}));
exports.SHIPMENT_STATUS_COLORS = {
    [ShipmentStatus.PENDING]: 'warning',
    [ShipmentStatus.SHIPPED]: 'primary',
    [ShipmentStatus.IN_TRANSIT]: 'info',
    [ShipmentStatus.DELIVERED]: 'success',
    [ShipmentStatus.FAILED]: 'error',
};
function getShipmentStatusColor(status) {
    return exports.SHIPMENT_STATUS_COLORS[status];
}
