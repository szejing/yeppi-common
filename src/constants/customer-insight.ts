import { CustomerInsightCategory, CustomerInsightKey, CustomerInsightSeverity } from '../enum/customer-insight';

export type CustomerInsightPreset = {
	key: CustomerInsightKey;
	category: CustomerInsightCategory;
	defaultSeverity: CustomerInsightSeverity;
};

export const CUSTOMER_INSIGHT_PRESETS: CustomerInsightPreset[] = [
	{
		key: CustomerInsightKey.PRICE_SENSITIVE,
		category: CustomerInsightCategory.PURCHASE,
		defaultSeverity: CustomerInsightSeverity.INFO,
	},
	{
		key: CustomerInsightKey.HIGH_INTENT_BUYER,
		category: CustomerInsightCategory.PURCHASE,
		defaultSeverity: CustomerInsightSeverity.INFO,
	},
	{
		key: CustomerInsightKey.FREQUENT_REFUND,
		category: CustomerInsightCategory.RISK,
		defaultSeverity: CustomerInsightSeverity.WARNING,
	},
	{
		key: CustomerInsightKey.REQUIRES_FOLLOW_UP,
		category: CustomerInsightCategory.SERVICE,
		defaultSeverity: CustomerInsightSeverity.WARNING,
	},
	{
		key: CustomerInsightKey.COMPLAINT_PRONE,
		category: CustomerInsightCategory.COMMUNICATION,
		defaultSeverity: CustomerInsightSeverity.WARNING,
	},
	{
		key: CustomerInsightKey.POLITE,
		category: CustomerInsightCategory.COMMUNICATION,
		defaultSeverity: CustomerInsightSeverity.INFO,
	},
	{
		key: CustomerInsightKey.VIP_CANDIDATE,
		category: CustomerInsightCategory.PREFERENCE,
		defaultSeverity: CustomerInsightSeverity.INFO,
	},
	{
		key: CustomerInsightKey.SUPPORT_SENSITIVE,
		category: CustomerInsightCategory.SERVICE,
		defaultSeverity: CustomerInsightSeverity.WARNING,
	},
	{
		key: CustomerInsightKey.AGGRESSIVE_BUYER,
		category: CustomerInsightCategory.RISK,
		defaultSeverity: CustomerInsightSeverity.RISK,
	},
];
