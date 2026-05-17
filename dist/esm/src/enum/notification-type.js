export var NotificationType;
(function (NotificationType) {
    NotificationType["NEW_ORDER"] = "new_order";
    NotificationType["ORDER_CANCELLED"] = "order_cancelled";
    NotificationType["ORDER_REQUIRES_ACTION"] = "order_requires_action";
    NotificationType["TODAY_APPOINTMENTS"] = "today_appointments";
    NotificationType["APPOINTMENT_TO_RESCHEDULE"] = "appointment_to_reschedule";
})(NotificationType || (NotificationType = {}));
export var NotificationSeverity;
(function (NotificationSeverity) {
    NotificationSeverity["INFO"] = "info";
    NotificationSeverity["WARNING"] = "warning";
    NotificationSeverity["CRITICAL"] = "critical";
})(NotificationSeverity || (NotificationSeverity = {}));
