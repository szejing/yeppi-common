"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketStatus = void 0;
/** Admission state only. Financial eligibility belongs to the purchase. */
var TicketStatus;
(function (TicketStatus) {
    TicketStatus["VALID"] = "valid";
    TicketStatus["CHECKED_IN"] = "checked_in";
    TicketStatus["CHECKED_OUT"] = "checked_out";
})(TicketStatus || (exports.TicketStatus = TicketStatus = {}));
