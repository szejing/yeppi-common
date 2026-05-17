"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSeverity = exports.NotificationType = void 0;
var NotificationType;
(function (NotificationType) {
    NotificationType["NEW_ORDER"] = "new_order";
    NotificationType["ORDER_CANCELLED"] = "order_cancelled";
    NotificationType["ORDER_REQUIRES_ACTION"] = "order_requires_action";
    NotificationType["TODAY_APPOINTMENTS"] = "today_appointments";
    NotificationType["APPOINTMENT_TO_RESCHEDULE"] = "appointment_to_reschedule";
})(NotificationType || (exports.NotificationType = NotificationType = {}));
var NotificationSeverity;
(function (NotificationSeverity) {
    NotificationSeverity["INFO"] = "info";
    NotificationSeverity["WARNING"] = "warning";
    NotificationSeverity["CRITICAL"] = "critical";
})(NotificationSeverity || (exports.NotificationSeverity = NotificationSeverity = {}));
