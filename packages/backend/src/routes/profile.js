import express from 'express';
import profileModule from '../modules/profile/index.js';

const router = express.Router();

// Profile routes
router.get('/:userId', profileModule.getProfile);
router.put('/:userId', profileModule.updateProfile);
router.post('/:userId/avatar', profileModule.uploadAvatar);
router.delete('/:userId', profileModule.deleteProfile);

export default router;