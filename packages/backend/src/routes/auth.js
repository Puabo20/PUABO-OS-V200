import express from 'express';
import authModule from '../modules/auth/index.js';

const router = express.Router();

// Auth routes
router.post('/login', authModule.login);
router.post('/register', authModule.register);
router.post('/refresh', authModule.refreshToken);
router.post('/logout', authModule.logout);
router.get('/me', authModule.getProfile);

export default router;