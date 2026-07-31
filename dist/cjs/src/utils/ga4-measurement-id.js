"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GA4_MEASUREMENT_ID_PATTERN = void 0;
exports.normalizeGoogleAnalyticsMeasurementId = normalizeGoogleAnalyticsMeasurementId;
exports.isValidGoogleAnalyticsMeasurementId = isValidGoogleAnalyticsMeasurementId;
exports.isValidOptionalGoogleAnalyticsMeasurementId = isValidOptionalGoogleAnalyticsMeasurementId;
exports.GA4_MEASUREMENT_ID_PATTERN = /^G-[A-Z0-9]+$/;
function normalizeGoogleAnalyticsMeasurementId(value) {
    return typeof value === 'string' ? value.trim().toUpperCase() : '';
}
function isValidGoogleAnalyticsMeasurementId(value) {
    return exports.GA4_MEASUREMENT_ID_PATTERN.test(normalizeGoogleAnalyticsMeasurementId(value));
}
function isValidOptionalGoogleAnalyticsMeasurementId(value) {
    const normalized = normalizeGoogleAnalyticsMeasurementId(value);
    return normalized === '' || exports.GA4_MEASUREMENT_ID_PATTERN.test(normalized);
}
