/**
 * Malaysian state labels aligned with EasyParcel OpenAPI English names (Option B).
 * Store these human-readable values in addresses; map to ISO subdivision codes at API boundaries.
 */
export declare const MALAYSIA_STATES: readonly ["Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan", "Pahang", "Pulau Pinang", "Perak", "Perlis", "Sabah", "Sarawak", "Selangor", "Terengganu", "Kuala Lumpur", "Labuan", "Putrajaya"];
export type MalaysiaState = (typeof MALAYSIA_STATES)[number];
export declare function resolveMalaysiaSubdivisionCode(state: string): string;
//# sourceMappingURL=malaysia-states.d.ts.map