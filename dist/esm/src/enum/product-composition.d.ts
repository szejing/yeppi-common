export declare enum ProductComposition {
    SINGLE = "single",
    FIXED_COMBO = "fixed_combo"
}
export interface ComboComponent {
    product_code: string;
    variant_code?: string | null;
    quantity: number;
}
export interface ComboComponentSnapshot extends ComboComponent {
    product_name: string;
    variant_name?: string;
    sku?: string;
    barcode?: string;
    manage_inventory: boolean;
}
export declare const PAID_STOCK_EXCEPTION = "late_payment_stock_unavailable";
export declare function paidStockExceptionTitle(orderNo: string): string;
