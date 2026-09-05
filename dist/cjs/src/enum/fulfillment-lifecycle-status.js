"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FULFILLMENT_LIFECYCLE_STATUS_COLORS = exports.FulfillmentLifecycleStatus = void 0;
exports.getFulfillmentLifecycleStatusColor = getFulfillmentLifecycleStatusColor;
/**
 * Warehouse-style fulfillment steps for CRM Phase 1.
 * Distinct from {@link FulfillmentStatus} (legacy line-level / provider states).
 */
var FulfillmentLifecycleStatus;
(function (FulfillmentLifecycleStatus) {
    FulfillmentLifecycleStatus["PENDING"] = "pending";
    FulfillmentLifecycleStatus["PROCESSING"] = "processing";
    FulfillmentLifecycleStatus["PACKED"] = "packed";
    FulfillmentLifecycleStatus["FULFILLED"] = "fulfilled";
})(FulfillmentLifecycleStatus || (exports.FulfillmentLifecycleStatus = FulfillmentLifecycleStatus = {}));
exports.FULFILLMENT_LIFECYCLE_STATUS_COLORS = {
    [FulfillmentLifecycleStatus.PENDING]: 'warning',
    [FulfillmentLifecycleStatus.PROCESSING]: 'info',
    [FulfillmentLifecycleStatus.PACKED]: 'primary',
    [FulfillmentLifecycleStatus.FULFILLED]: 'success',
};
function getFulfillmentLifecycleStatusColor(status) {
    return exports.FULFILLMENT_LIFECYCLE_STATUS_COLORS[status];
}
