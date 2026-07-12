"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCompletionValidation = void 0;
var OrderCompletionValidation;
(function (OrderCompletionValidation) {
    OrderCompletionValidation["NONE"] = "NONE";
    OrderCompletionValidation["PAYMENT_MANDATORY"] = "PAYMENT_MANDATORY";
    OrderCompletionValidation["SHIPMENT_MANDATORY"] = "SHIPMENT_MANDATORY";
    OrderCompletionValidation["PAYMENT_AND_SHIPMENT_MANDATORY"] = "PAYMENT_AND_SHIPMENT_MANDATORY";
})(OrderCompletionValidation || (exports.OrderCompletionValidation = OrderCompletionValidation = {}));
