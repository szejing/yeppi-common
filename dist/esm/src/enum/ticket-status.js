/** Admission state only. Financial eligibility belongs to the purchase. */
export var TicketStatus;
(function (TicketStatus) {
    TicketStatus["VALID"] = "valid";
    TicketStatus["CHECKED_IN"] = "checked_in";
    TicketStatus["CHECKED_OUT"] = "checked_out";
})(TicketStatus || (TicketStatus = {}));
