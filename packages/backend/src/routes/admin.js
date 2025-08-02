import express from 'express';
import adminModule from '../modules/admin/index.js';

const router = express.Router();

// Admin routes
router.get('/users', adminModule.getUsers);
router.put('/users/:userId/role', adminModule.updateUserRole);
router.get('/system/logs', adminModule.getSystemLogs);
router.get('/analytics', adminModule.getAnalytics);
router.post('/modules/:moduleId/toggle', adminModule.toggleModule);

export default router;