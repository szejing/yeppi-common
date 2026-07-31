export const GA4_MEASUREMENT_ID_PATTERN = /^G-[A-Z0-9]+$/;
export function normalizeGoogleAnalyticsMeasurementId(value) {
    return typeof value === 'string' ? value.trim().toUpperCase() : '';
}
export function isValidGoogleAnalyticsMeasurementId(value) {
    return GA4_MEASUREMENT_ID_PATTERN.test(normalizeGoogleAnalyticsMeasurementId(value));
}
export function isValidOptionalGoogleAnalyticsMeasurementId(value) {
    const normalized = normalizeGoogleAnalyticsMeasurementId(value);
    return normalized === '' || GA4_MEASUREMENT_ID_PATTERN.test(normalized);
}
