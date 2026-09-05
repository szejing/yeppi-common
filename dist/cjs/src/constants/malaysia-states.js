"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MALAYSIA_STATES = void 0;
exports.resolveMalaysiaSubdivisionCode = resolveMalaysiaSubdivisionCode;
/**
 * Malaysian state labels aligned with EasyParcel OpenAPI English names (Option B).
 * Store these human-readable values in addresses; map to ISO subdivision codes at API boundaries.
 */
exports.MALAYSIA_STATES = [
    'Johor',
    'Kedah',
    'Kelantan',
    'Melaka',
    'Negeri Sembilan',
    'Pahang',
    'Pulau Pinang',
    'Perak',
    'Perlis',
    'Sabah',
    'Sarawak',
    'Selangor',
    'Terengganu',
    'Kuala Lumpur',
    'Labuan',
    'Putrajaya',
];
const MALAYSIA_STATE_TO_SUBDIVISION = {
    Johor: 'MY-01',
    Kedah: 'MY-02',
    Kelantan: 'MY-03',
    Melaka: 'MY-04',
    'Negeri Sembilan': 'MY-05',
    Pahang: 'MY-06',
    'Pulau Pinang': 'MY-07',
    Perak: 'MY-08',
    Perlis: 'MY-09',
    Sabah: 'MY-12',
    Sarawak: 'MY-13',
    Selangor: 'MY-10',
    Terengganu: 'MY-11',
    'Kuala Lumpur': 'MY-14',
    Labuan: 'MY-15',
    Putrajaya: 'MY-16',
};
/** Legacy and third-party labels that still map to an EasyParcel subdivision. */
const MALAYSIA_SUBDIVISION_ALIASES = {
    ...MALAYSIA_STATE_TO_SUBDIVISION,
    Malacca: 'MY-04',
    Penang: 'MY-07',
};
function resolveMalaysiaSubdivisionCode(state) {
    const trimmed = (state ?? '').trim();
    if (/^MY-\d{2}$/i.test(trimmed)) {
        return trimmed.toUpperCase();
    }
    const code = MALAYSIA_SUBDIVISION_ALIASES[trimmed];
    if (!code) {
        throw new Error(`Unsupported Malaysian state for EasyParcel: ${trimmed || '(empty)'}`);
    }
    return code;
}
