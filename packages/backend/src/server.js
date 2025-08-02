import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

// Import module routes
import authRoutes from './routes/auth.js';
import profileRoutes from './routes/profile.js';
import streamingRoutes from './routes/streaming.js';
import monetizationRoutes from './routes/monetization.js';
import blacRoutes from './routes/blac.js';
import tvradioRoutes from './routes/tvradio.js';
import musicmediaRoutes from './routes/musicmedia.js';
import adminRoutes from './routes/admin.js';
import notificationsRoutes from './routes/notifications.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL, process.env.ADMIN_URL]
    : ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// General middleware
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'PUABO OS Backend is running',
    version: '2.0.0',
    timestamp: new Date().toISOString()
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/streaming', streamingRoutes);
app.use('/api/monetization', monetizationRoutes);
app.use('/api/blac', blacRoutes);
app.use('/api/tvradio', tvradioRoutes);
app.use('/api/musicmedia', musicmediaRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/notifications', notificationsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 PUABO OS Backend server running on port ${PORT}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
});

export default app;