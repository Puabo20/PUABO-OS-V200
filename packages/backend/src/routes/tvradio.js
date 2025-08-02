import express from 'express';
import tvradioModule from '../modules/tvradio/index.js';

const router = express.Router();

// TV/Radio broadcasting routes
router.post('/broadcast/start', tvradioModule.startBroadcast);
router.post('/broadcast/stop', tvradioModule.stopBroadcast);
router.get('/channels', tvradioModule.getChannels);
router.post('/schedule', tvradioModule.scheduleContent);

export default router;