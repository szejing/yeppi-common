/** Admission state only. Financial eligibility belongs to the purchase. */
export enum TicketStatus {
	VALID = 'valid',
	CHECKED_IN = 'checked_in',
	CHECKED_OUT = 'checked_out',
}

export enum EventStatus {
	DRAFT = 'draft',
	PUBLISHED = 'published',
	CANCELLED = 'cancelled',
}

export enum ParticipantInformationPolicy {
	BUYER_ONLY = 'buyer_only',
	ALL_PARTICIPANTS = 'all_participants',
}
