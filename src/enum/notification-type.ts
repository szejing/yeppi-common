export enum NotificationType {
	NEW_ORDER = 'new_order',
	ORDER_PENDING_PAYMENT = 'order_pending_payment',
	ORDER_CANCELLED = 'order_cancelled',
	ORDER_REQUIRES_ACTION = 'order_requires_action',
	ORDER_STATUS_CHANGED = 'order_status_changed',
	NEW_APPOINTMENT = 'new_appointment',
	TODAY_APPOINTMENTS = 'today_appointments',
	APPOINTMENT_TO_RESCHEDULE = 'appointment_to_reschedule',
	PRODUCT_IMAGE_IMPORT_FAILED = 'product_image_import_failed',
}

export enum NotificationSeverity {
	INFO = 'info',
	WARNING = 'warning',
	CRITICAL = 'critical',
}
