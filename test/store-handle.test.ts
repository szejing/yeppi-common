import { describe, expect, it } from 'bun:test';
import {
	allocateStoreHandle,
	isMerchantIdParam,
	merchantStorePath,
	merchantStoreProductPath,
	slugifyToStoreHandle,
	validateStoreHandle,
} from '../src/utils/store-handle';

describe('Store Handle helpers', () => {
	it('slugifies a display name to lowercase ASCII kebab-case', () => {
		expect(slugifyToStoreHandle('  Acme Tyres Sdn Bhd  ')).toBe('acme-tyres-sdn-bhd');
	});

	it('falls back to store when the name cannot become a handle', () => {
		expect(slugifyToStoreHandle('???')).toBe('store');
		expect(slugifyToStoreHandle('')).toBe('store');
		expect(slugifyToStoreHandle('Y00001')).toBe('store');
		expect(slugifyToStoreHandle('products')).toBe('store');
	});

	it('allocates a numeric suffix when the base handle is taken', () => {
		expect(allocateStoreHandle('Acme Tyres', ['acme-tyres'])).toBe('acme-tyres-2');
		expect(allocateStoreHandle('Acme Tyres', ['acme-tyres', 'acme-tyres-2'])).toBe(
			'acme-tyres-3',
		);
		expect(allocateStoreHandle('???', ['store'])).toBe('store-2');
	});

	it('rejects empty, reserved, Merchant ID shaped, and invalid handles', () => {
		expect(validateStoreHandle('')).toEqual({ ok: false, reason: 'empty' });
		expect(validateStoreHandle('Acme Tyres')).toEqual({ ok: false, reason: 'invalid' });
		expect(validateStoreHandle('products')).toEqual({ ok: false, reason: 'reserved' });
		expect(validateStoreHandle('Y00001')).toEqual({
			ok: false,
			reason: 'merchant_id_shape',
		});
		expect(validateStoreHandle('acme-tyres')).toEqual({
			ok: true,
			handle: 'acme-tyres',
		});
	});

	it('detects Merchant ID path params and builds public store paths', () => {
		expect(isMerchantIdParam('Y00001')).toBe(true);
		expect(isMerchantIdParam('acme-tyres')).toBe(false);
		expect(merchantStorePath('acme-tyres')).toBe('/merchants/acme-tyres');
		expect(merchantStoreProductPath('acme-tyres', 'cool-tyre')).toBe(
			'/merchants/acme-tyres/products/cool-tyre',
		);
	});
});
