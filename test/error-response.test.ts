import { describe, expect, test } from 'bun:test';
import { getErrorResponse, getErrorResponseMessage } from '../src/utils/error-response';

describe('getErrorResponse', () => {
	test('reads Nest body from ofetch error.data', () => {
		const payload = {
			code: 400,
			message: 'Order total must be at least 50 to apply this voucher',
			statusCode: 400,
			timestamp: '2026-08-04T13:51:30.619Z',
			path: '/api/merchant/carts/recalculate',
			method: 'POST',
		};

		expect(
			getErrorResponse({
				statusCode: 400,
				data: { success: false, error: payload },
			}),
		).toEqual(payload);
	});

	test('reads Nitro createError data.data.error shape used by portal factory', () => {
		const payload = {
			code: 400,
			message: 'Invalid credentials',
			statusCode: 400,
			timestamp: '2026-08-04T13:51:30.619Z',
			path: '/api/merchant/auth/login',
			method: 'POST',
		};

		expect(
			getErrorResponse({
				data: { data: { error: payload } },
			}),
		).toEqual(payload);
	});
});

describe('getErrorResponseMessage', () => {
	test('returns Nest message or fallback', () => {
		expect(
			getErrorResponseMessage(
				{ data: { error: { message: 'Order total must be at least 50 to apply this voucher', statusCode: 400 } } },
				'Failed',
			),
		).toBe('Order total must be at least 50 to apply this voucher');
		expect(getErrorResponseMessage({ statusMessage: 'Bad Request' }, 'Failed')).toBe('Failed');
	});

	test('does not treat a plain Error as ErrorResponse', () => {
		expect(getErrorResponse(new Error('network'))).toBeNull();
		expect(getErrorResponseMessage(new Error('network'), 'Failed')).toBe('Failed');
	});
});
