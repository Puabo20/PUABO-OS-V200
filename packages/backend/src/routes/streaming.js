import express from 'express';
import streamingModule from '../modules/streaming/index.js';

const router = express.Router();

// Streaming routes
router.post('/start', streamingModule.startStream);
router.post('/stop', streamingModule.stopStream);
router.get('/status/:streamId', streamingModule.getStreamStatus);
router.get('/list', streamingModule.listStreams);

export default router;