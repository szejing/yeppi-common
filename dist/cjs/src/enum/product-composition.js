"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAID_STOCK_EXCEPTION = exports.ProductComposition = void 0;
exports.paidStockExceptionTitle = paidStockExceptionTitle;
var ProductComposition;
(function (ProductComposition) {
    ProductComposition["SINGLE"] = "single";
    ProductComposition["FIXED_COMBO"] = "fixed_combo";
})(ProductComposition || (exports.ProductComposition = ProductComposition = {}));
exports.PAID_STOCK_EXCEPTION = 'late_payment_stock_unavailable';
function paidStockExceptionTitle(orderNo) {
    return `Payment received - stock unavailable #${orderNo}`;
}
