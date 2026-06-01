"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CUSTOMER_INSIGHT_PRESETS = void 0;
const customer_insight_1 = require("../enum/customer-insight");
exports.CUSTOMER_INSIGHT_PRESETS = [
    {
        key: customer_insight_1.CustomerInsightKey.PRICE_SENSITIVE,
        category: customer_insight_1.CustomerInsightCategory.PURCHASE,
        defaultSeverity: customer_insight_1.CustomerInsightSeverity.INFO,
    },
    {
        key: customer_insight_1.CustomerInsightKey.HIGH_INTENT_BUYER,
        category: customer_insight_1.CustomerInsightCategory.PURCHASE,
        defaultSeverity: customer_insight_1.CustomerInsightSeverity.INFO,
    },
    {
        key: customer_insight_1.CustomerInsightKey.FREQUENT_REFUND,
        category: customer_insight_1.CustomerInsightCategory.RISK,
        defaultSeverity: customer_insight_1.CustomerInsightSeverity.WARNING,
    },
    {
        key: customer_insight_1.CustomerInsightKey.REQUIRES_FOLLOW_UP,
        category: customer_insight_1.CustomerInsightCategory.SERVICE,
        defaultSeverity: customer_insight_1.CustomerInsightSeverity.WARNING,
    },
    {
        key: customer_insight_1.CustomerInsightKey.COMPLAINT_PRONE,
        category: customer_insight_1.CustomerInsightCategory.COMMUNICATION,
        defaultSeverity: customer_insight_1.CustomerInsightSeverity.WARNING,
    },
    {
        key: customer_insight_1.CustomerInsightKey.POLITE,
        category: customer_insight_1.CustomerInsightCategory.COMMUNICATION,
        defaultSeverity: customer_insight_1.CustomerInsightSeverity.INFO,
    },
    {
        key: customer_insight_1.CustomerInsightKey.VIP_CANDIDATE,
        category: customer_insight_1.CustomerInsightCategory.PREFERENCE,
        defaultSeverity: customer_insight_1.CustomerInsightSeverity.INFO,
    },
    {
        key: customer_insight_1.CustomerInsightKey.SUPPORT_SENSITIVE,
        category: customer_insight_1.CustomerInsightCategory.SERVICE,
        defaultSeverity: customer_insight_1.CustomerInsightSeverity.WARNING,
    },
    {
        key: customer_insight_1.CustomerInsightKey.AGGRESSIVE_BUYER,
        category: customer_insight_1.CustomerInsightCategory.RISK,
        defaultSeverity: customer_insight_1.CustomerInsightSeverity.RISK,
    },
];
