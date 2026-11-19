"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantInformationPolicy = exports.EventStatus = exports.TicketStatus = void 0;
/** Admission state only. Financial eligibility belongs to the purchase. */
var TicketStatus;
(function (TicketStatus) {
    TicketStatus["VALID"] = "valid";
    TicketStatus["CHECKED_IN"] = "checked_in";
    TicketStatus["CHECKED_OUT"] = "checked_out";
})(TicketStatus || (exports.TicketStatus = TicketStatus = {}));
var EventStatus;
(function (EventStatus) {
    EventStatus["DRAFT"] = "draft";
    EventStatus["PUBLISHED"] = "published";
    EventStatus["CANCELLED"] = "cancelled";
})(EventStatus || (exports.EventStatus = EventStatus = {}));
var ParticipantInformationPolicy;
(function (ParticipantInformationPolicy) {
    ParticipantInformationPolicy["BUYER_ONLY"] = "buyer_only";
    ParticipantInformationPolicy["ALL_PARTICIPANTS"] = "all_participants";
})(ParticipantInformationPolicy || (exports.ParticipantInformationPolicy = ParticipantInformationPolicy = {}));
