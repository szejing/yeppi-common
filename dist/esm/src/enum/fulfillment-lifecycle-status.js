/**
 * Warehouse-style fulfillment steps for CRM Phase 1.
 * Distinct from {@link FulfillmentStatus} (legacy line-level / provider states).
 */
export var FulfillmentLifecycleStatus;
(function (FulfillmentLifecycleStatus) {
    FulfillmentLifecycleStatus["PENDING"] = "pending";
    FulfillmentLifecycleStatus["PROCESSING"] = "processing";
    FulfillmentLifecycleStatus["PACKED"] = "packed";
    FulfillmentLifecycleStatus["FULFILLED"] = "fulfilled";
})(FulfillmentLifecycleStatus || (FulfillmentLifecycleStatus = {}));
export const FULFILLMENT_LIFECYCLE_STATUS_COLORS = {
    [FulfillmentLifecycleStatus.PENDING]: 'warning',
    [FulfillmentLifecycleStatus.PROCESSING]: 'info',
    [FulfillmentLifecycleStatus.PACKED]: 'primary',
    [FulfillmentLifecycleStatus.FULFILLED]: 'success',
};
export function getFulfillmentLifecycleStatusColor(status) {
    return FULFILLMENT_LIFECYCLE_STATUS_COLORS[status];
}
