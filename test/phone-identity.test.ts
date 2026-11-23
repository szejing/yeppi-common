import { describe, expect, it } from 'bun:test';
import { parsePhoneIdentity } from '../src/utils/phone-identity';

describe('parsePhoneIdentity', () => {
	it('stores a Malaysian trunk spelling and the national number as one pair', () => {
		expect(parsePhoneIdentity('+60', '017-012 3456')).toEqual({
			dialCode: '60',
			nationalNumber: '170123456',
		});
		expect(parsePhoneIdentity('60', '170123456')).toEqual({
			dialCode: '60',
			nationalNumber: '170123456',
		});
		expect(parsePhoneIdentity('60', '60170123456')).toEqual({
			dialCode: '60',
			nationalNumber: '170123456',
		});
	});

	it('keeps a leading 0 when the plan treats it as part of the number', () => {
		expect(parsePhoneIdentity('39', '06 12 34 56 78')).toEqual({
			dialCode: '39',
			nationalNumber: '0612345678',
		});
	});

	it('moves the dial code when a pasted international number is possible', () => {
		expect(parsePhoneIdentity('+60', '+44 7911 123456')).toEqual({
			dialCode: '44',
			nationalNumber: '7911123456',
		});
	});

	it('keeps the selected dial code and typed digits when the plan cannot accept the number', () => {
		expect(parsePhoneIdentity('+65', '01234567')).toEqual({
			dialCode: '65',
			nationalNumber: '01234567',
		});
		expect(parsePhoneIdentity('60', '123456')).toEqual({
			dialCode: '60',
			nationalNumber: '123456',
		});
	});

	it('treats the same subscriber digits under two dial codes as two phones', () => {
		expect(parsePhoneIdentity('60', '170123456').dialCode).toBe('60');
		expect(parsePhoneIdentity('65', '81234567')).toEqual({
			dialCode: '65',
			nationalNumber: '81234567',
		});
	});
});
