import type {
	CustomerInsightCategory,
	CustomerInsightConfidence,
	CustomerInsightKey,
	CustomerInsightSeverity,
	CustomerInsightSource,
} from '../enum/customer-insight';

export type CustomerInsight = {
	id: string;
	key: CustomerInsightKey | string;
	label?: string;
	category: CustomerInsightCategory;
	value?: string | number | boolean;
	note?: string;
	confidence?: CustomerInsightConfidence;
	severity?: CustomerInsightSeverity;
	source: CustomerInsightSource;
	created_by?: string;
	created_at: string;
};

export type MerchantCustomerMetadata = {
	total_spent: number;
	pending_orders: number;
	cancelled_orders: number;
	refunded_orders: number;
	completed_orders: number;
	first_order_date?: Date;
	last_order_date?: Date;
	insights?: CustomerInsight[];
};
