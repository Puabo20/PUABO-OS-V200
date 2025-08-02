import express from 'express';
import musicmediaModule from '../modules/musicmedia/index.js';

const router = express.Router();

// Music/Media routes
router.post('/upload', musicmediaModule.uploadMedia);
router.get('/library/:userId', musicmediaModule.getUserLibrary);
router.delete('/media/:mediaId', musicmediaModule.deleteMedia);
router.get('/search', musicmediaModule.searchMedia);

export default router;