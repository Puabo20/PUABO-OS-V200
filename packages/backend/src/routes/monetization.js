import express from 'express';
import monetizationModule from '../modules/monetization/index.js';

const router = express.Router();

// Monetization routes
router.post('/payment-intent', monetizationModule.createPaymentIntent);
router.post('/subscription', monetizationModule.createSubscription);
router.get('/earnings/:userId', monetizationModule.getEarnings);
router.post('/payout', monetizationModule.requestPayout);

export default router;