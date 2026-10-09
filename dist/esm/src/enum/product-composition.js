export var ProductComposition;
(function (ProductComposition) {
    ProductComposition["SINGLE"] = "single";
    ProductComposition["FIXED_COMBO"] = "fixed_combo";
})(ProductComposition || (ProductComposition = {}));
export const PAID_STOCK_EXCEPTION = 'late_payment_stock_unavailable';
export function paidStockExceptionTitle(orderNo) {
    return `Payment received - stock unavailable #${orderNo}`;
}
