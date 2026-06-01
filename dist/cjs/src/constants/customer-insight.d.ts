import { CustomerInsightCategory, CustomerInsightKey, CustomerInsightSeverity } from '../enum/customer-insight';
export type CustomerInsightPreset = {
    key: CustomerInsightKey;
    category: CustomerInsightCategory;
    defaultSeverity: CustomerInsightSeverity;
};
export declare const CUSTOMER_INSIGHT_PRESETS: CustomerInsightPreset[];
//# sourceMappingURL=customer-insight.d.ts.map