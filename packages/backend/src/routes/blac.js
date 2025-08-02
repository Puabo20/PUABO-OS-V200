import express from 'express';
import blacModule from '../modules/blac/index.js';

const router = express.Router();

// BLAC (Alternative Lending) routes
router.post('/application', blacModule.submitApplication);
router.get('/application/:id', blacModule.getApplication);
router.put('/application/:id/status', blacModule.updateApplicationStatus);
router.get('/loans/:userId', blacModule.getUserLoans);

export default router;