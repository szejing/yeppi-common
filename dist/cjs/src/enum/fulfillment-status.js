"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FULFILLMENT_STATUS_COLORS = exports.FulfillmentStatus = void 0;
exports.getFulfillmentStatusColor = getFulfillmentStatusColor;
var FulfillmentStatus;
(function (FulfillmentStatus) {
    FulfillmentStatus["NOT_FULFILLED"] = "not_fulfilled";
    FulfillmentStatus["PARTIALLY_FULFILLED"] = "partially_fulfilled";
    FulfillmentStatus["FULFILLED"] = "fulfilled";
    FulfillmentStatus["PARTIALLY_SHIPPED"] = "partially_shipped";
    FulfillmentStatus["SHIPPED"] = "shipped";
    FulfillmentStatus["PARTIALLY_RETURNED"] = "partially_returned";
    FulfillmentStatus["RETURNED"] = "returned";
    FulfillmentStatus["CANCELED"] = "canceled";
    FulfillmentStatus["REQUIRES_ACTION"] = "requires_action";
})(FulfillmentStatus || (exports.FulfillmentStatus = FulfillmentStatus = {}));
exports.FULFILLMENT_STATUS_COLORS = {
    [FulfillmentStatus.NOT_FULFILLED]: 'warning',
    [FulfillmentStatus.PARTIALLY_FULFILLED]: 'info',
    [FulfillmentStatus.FULFILLED]: 'success',
    [FulfillmentStatus.PARTIALLY_SHIPPED]: 'info',
    [FulfillmentStatus.SHIPPED]: 'primary',
    [FulfillmentStatus.PARTIALLY_RETURNED]: 'warning',
    [FulfillmentStatus.RETURNED]: 'error',
    [FulfillmentStatus.CANCELED]: 'error',
    [FulfillmentStatus.REQUIRES_ACTION]: 'warning',
};
function getFulfillmentStatusColor(status) {
    return exports.FULFILLMENT_STATUS_COLORS[status];
}
