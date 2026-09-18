export const STORE_HANDLE_MAX_LENGTH = 80;
export const STORE_HANDLE_FALLBACK = 'store';

export const STORE_HANDLE_RESERVED = new Set([
	'api',
	'appointments',
	'cart',
	'checkout',
	'login',
	'merchant-nearby',
	'merchants',
	'order',
	'orders',
	'partner-merchant',
	'products',
	'register',
	'user',
]);

const MERCHANT_ID_SHAPE = /^[my][0-9]+$/;
const HANDLE_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type StoreHandleValidationReason =
	| 'empty'
	| 'invalid'
	| 'reserved'
	| 'merchant_id_shape'
	| 'too_long';

export function isMerchantIdParam(value: string | null | undefined): boolean {
	return MERCHANT_ID_SHAPE.test(String(value ?? '').trim().toLowerCase());
}

export function slugifyToStoreHandle(value: string | null | undefined): string {
	const slug = String(value ?? '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.slice(0, STORE_HANDLE_MAX_LENGTH)
		.replace(/-+$/g, '');

	if (!slug || STORE_HANDLE_RESERVED.has(slug) || MERCHANT_ID_SHAPE.test(slug)) {
		return STORE_HANDLE_FALLBACK;
	}

	return slug;
}

export function allocateStoreHandle(
	name: string | null | undefined,
	taken: Iterable<string>,
): string {
	const used = new Set(
		[...taken].map((handle) => handle.trim().toLowerCase()).filter(Boolean),
	);
	const base = slugifyToStoreHandle(name);
	if (!used.has(base)) {
		return base;
	}

	let n = 2;
	while (used.has(`${base}-${n}`)) {
		n += 1;
	}
	return `${base}-${n}`;
}

export function validateStoreHandle(
	value: string | null | undefined,
): { ok: true; handle: string } | { ok: false; reason: StoreHandleValidationReason } {
	const handle = String(value ?? '')
		.trim()
		.toLowerCase();

	if (!handle) {
		return { ok: false, reason: 'empty' };
	}
	if (handle.length > STORE_HANDLE_MAX_LENGTH) {
		return { ok: false, reason: 'too_long' };
	}
	if (!HANDLE_PATTERN.test(handle)) {
		return { ok: false, reason: 'invalid' };
	}
	if (MERCHANT_ID_SHAPE.test(handle)) {
		return { ok: false, reason: 'merchant_id_shape' };
	}
	if (STORE_HANDLE_RESERVED.has(handle)) {
		return { ok: false, reason: 'reserved' };
	}

	return { ok: true, handle };
}

export function merchantStorePath(handle: string): string {
	return `/merchants/${encodeURIComponent(handle)}`;
}

export function merchantStoreProductPath(handle: string, productSegment: string): string {
	return `${merchantStorePath(handle)}/products/${encodeURIComponent(productSegment)}`;
}
