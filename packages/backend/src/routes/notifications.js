import express from 'express';
import notificationsModule from '../modules/notifications/index.js';

const router = express.Router();

// Notifications routes
router.post('/send', notificationsModule.sendNotification);
router.get('/:userId', notificationsModule.getUserNotifications);
router.put('/:notificationId/read', notificationsModule.markAsRead);
router.post('/webhook', notificationsModule.handleWebhook);

export default router;