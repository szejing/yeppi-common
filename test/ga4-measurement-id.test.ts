import { describe, expect, it } from 'bun:test';
import {
	isValidGoogleAnalyticsMeasurementId,
	isValidOptionalGoogleAnalyticsMeasurementId,
	normalizeGoogleAnalyticsMeasurementId,
} from '../src/utils/ga4-measurement-id';

describe('GA4 Measurement ID helpers', () => {
	it('normalizes a string by trimming and uppercasing it', () => {
		expect(normalizeGoogleAnalyticsMeasurementId('  g-abc123  ')).toBe('G-ABC123');
	});

	it('normalizes non-string values to an empty string', () => {
		expect(normalizeGoogleAnalyticsMeasurementId(null)).toBe('');
		expect(normalizeGoogleAnalyticsMeasurementId(123)).toBe('');
	});

	it('accepts only a non-empty G-prefixed identifier in the strict validator', () => {
		expect(isValidGoogleAnalyticsMeasurementId('G-ABC123')).toBe(true);
		expect(isValidGoogleAnalyticsMeasurementId(' g-abc123 ')).toBe(true);
		expect(isValidGoogleAnalyticsMeasurementId('')).toBe(false);
		expect(isValidGoogleAnalyticsMeasurementId('GA-ABC123')).toBe(false);
		expect(isValidGoogleAnalyticsMeasurementId('G-ABC_123')).toBe(false);
	});

	it('accepts blank values only in the optional validator', () => {
		expect(isValidOptionalGoogleAnalyticsMeasurementId('')).toBe(true);
		expect(isValidOptionalGoogleAnalyticsMeasurementId('   ')).toBe(true);
		expect(isValidOptionalGoogleAnalyticsMeasurementId('G-ABC123')).toBe(true);
		expect(isValidOptionalGoogleAnalyticsMeasurementId('G-ABC-123')).toBe(false);
	});
});
