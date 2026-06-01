export enum CustomerInsightCategory {
	PURCHASE = 'purchase',
	SERVICE = 'service',
	COMMUNICATION = 'communication',
	RISK = 'risk',
	PREFERENCE = 'preference',
}

export enum CustomerInsightConfidence {
	LOW = 'low',
	MEDIUM = 'medium',
	HIGH = 'high',
}

export enum CustomerInsightSeverity {
	INFO = 'info',
	WARNING = 'warning',
	RISK = 'risk',
}

export enum CustomerInsightSource {
	ADMIN = 'admin',
	SYSTEM = 'system',
}

export enum CustomerInsightKey {
	PRICE_SENSITIVE = 'price_sensitive',
	HIGH_INTENT_BUYER = 'high_intent_buyer',
	FREQUENT_REFUND = 'frequent_refund',
	REQUIRES_FOLLOW_UP = 'requires_follow_up',
	COMPLAINT_PRONE = 'complaint_prone',
	POLITE = 'polite',
	VIP_CANDIDATE = 'vip_candidate',
	SUPPORT_SENSITIVE = 'support_sensitive',
	AGGRESSIVE_BUYER = 'aggressive_buyer',
}
