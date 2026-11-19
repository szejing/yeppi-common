/** Admission state only. Financial eligibility belongs to the purchase. */
export var TicketStatus;
(function (TicketStatus) {
    TicketStatus["VALID"] = "valid";
    TicketStatus["CHECKED_IN"] = "checked_in";
    TicketStatus["CHECKED_OUT"] = "checked_out";
})(TicketStatus || (TicketStatus = {}));
export var EventStatus;
(function (EventStatus) {
    EventStatus["DRAFT"] = "draft";
    EventStatus["PUBLISHED"] = "published";
    EventStatus["CANCELLED"] = "cancelled";
})(EventStatus || (EventStatus = {}));
export var ParticipantInformationPolicy;
(function (ParticipantInformationPolicy) {
    ParticipantInformationPolicy["BUYER_ONLY"] = "buyer_only";
    ParticipantInformationPolicy["ALL_PARTICIPANTS"] = "all_participants";
})(ParticipantInformationPolicy || (ParticipantInformationPolicy = {}));
