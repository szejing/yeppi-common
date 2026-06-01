"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerInsightKey = exports.CustomerInsightSource = exports.CustomerInsightSeverity = exports.CustomerInsightConfidence = exports.CustomerInsightCategory = void 0;
var CustomerInsightCategory;
(function (CustomerInsightCategory) {
    CustomerInsightCategory["PURCHASE"] = "purchase";
    CustomerInsightCategory["SERVICE"] = "service";
    CustomerInsightCategory["COMMUNICATION"] = "communication";
    CustomerInsightCategory["RISK"] = "risk";
    CustomerInsightCategory["PREFERENCE"] = "preference";
})(CustomerInsightCategory || (exports.CustomerInsightCategory = CustomerInsightCategory = {}));
var CustomerInsightConfidence;
(function (CustomerInsightConfidence) {
    CustomerInsightConfidence["LOW"] = "low";
    CustomerInsightConfidence["MEDIUM"] = "medium";
    CustomerInsightConfidence["HIGH"] = "high";
})(CustomerInsightConfidence || (exports.CustomerInsightConfidence = CustomerInsightConfidence = {}));
var CustomerInsightSeverity;
(function (CustomerInsightSeverity) {
    CustomerInsightSeverity["INFO"] = "info";
    CustomerInsightSeverity["WARNING"] = "warning";
    CustomerInsightSeverity["RISK"] = "risk";
})(CustomerInsightSeverity || (exports.CustomerInsightSeverity = CustomerInsightSeverity = {}));
var CustomerInsightSource;
(function (CustomerInsightSource) {
    CustomerInsightSource["ADMIN"] = "admin";
    CustomerInsightSource["SYSTEM"] = "system";
})(CustomerInsightSource || (exports.CustomerInsightSource = CustomerInsightSource = {}));
var CustomerInsightKey;
(function (CustomerInsightKey) {
    CustomerInsightKey["PRICE_SENSITIVE"] = "price_sensitive";
    CustomerInsightKey["HIGH_INTENT_BUYER"] = "high_intent_buyer";
    CustomerInsightKey["FREQUENT_REFUND"] = "frequent_refund";
    CustomerInsightKey["REQUIRES_FOLLOW_UP"] = "requires_follow_up";
    CustomerInsightKey["COMPLAINT_PRONE"] = "complaint_prone";
    CustomerInsightKey["POLITE"] = "polite";
    CustomerInsightKey["VIP_CANDIDATE"] = "vip_candidate";
    CustomerInsightKey["SUPPORT_SENSITIVE"] = "support_sensitive";
    CustomerInsightKey["AGGRESSIVE_BUYER"] = "aggressive_buyer";
})(CustomerInsightKey || (exports.CustomerInsightKey = CustomerInsightKey = {}));
