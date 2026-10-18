"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformInAppAnnouncementStatus = exports.PlatformEmailBlastStatus = void 0;
var PlatformEmailBlastStatus;
(function (PlatformEmailBlastStatus) {
    PlatformEmailBlastStatus["DRAFT"] = "draft";
    PlatformEmailBlastStatus["SCHEDULED"] = "scheduled";
    PlatformEmailBlastStatus["SENDING"] = "sending";
    PlatformEmailBlastStatus["SENT"] = "sent";
    PlatformEmailBlastStatus["CANCELLED"] = "cancelled";
})(PlatformEmailBlastStatus || (exports.PlatformEmailBlastStatus = PlatformEmailBlastStatus = {}));
var PlatformInAppAnnouncementStatus;
(function (PlatformInAppAnnouncementStatus) {
    PlatformInAppAnnouncementStatus["DRAFT"] = "draft";
    PlatformInAppAnnouncementStatus["PUBLISHED"] = "published";
    PlatformInAppAnnouncementStatus["UNPUBLISHED"] = "unpublished";
})(PlatformInAppAnnouncementStatus || (exports.PlatformInAppAnnouncementStatus = PlatformInAppAnnouncementStatus = {}));
