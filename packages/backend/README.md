# PUABO OS Backend

Node.js Express API server for PUABO OS v2.0.0 with modular architecture.

## Features

- **Modular Architecture** - Separate modules for each feature
- **JWT Authentication** - Secure user authentication and authorization
- **RESTful API** - Well-structured API endpoints
- **Rate Limiting** - Protection against abuse
- **Security Middleware** - Helmet, CORS, input validation
- **File Uploads** - Support for media file uploads
- **Real-time Features** - WebSocket support for live features

## Tech Stack

- Node.js 18+
- Express 4
- JWT for authentication
- Multer for file uploads
- Mongoose for MongoDB (ready to integrate)
- Socket.io for real-time features
- Stripe for payments
- Nodemailer for emails

## Development

### Start Development Server
```bash
pnpm dev
```
Runs on http://localhost:3002

### Start Production Server
```bash
pnpm start
```

### Run Tests
```bash
pnpm test
```

## API Modules

### Authentication (`/api/auth`)
- User login/logout
- JWT token management
- Password reset
- Account verification

### Profile Management (`/api/profile`)
- User profile CRUD operations
- Avatar upload
- Social media links
- Creator settings

### Streaming (`/api/streaming`)
- Live stream management
- RTMP integration
- Stream analytics
- Viewer management

### Monetization (`/api/monetization`)
- Stripe payment processing
- Subscription management
- Earnings tracking
- Payout requests

### BLAC Lending (`/api/blac`)
- Loan application processing
- Credit assessment
- Payment tracking
- Alternative lending logic

### TV/Radio (`/api/tvradio`)
- Broadcasting channel management
- Content scheduling
- Live broadcast control
- Program guide

### Music/Media (`/api/musicmedia`)
- File upload handling
- Media library management
- Search functionality
- Content organization

### Admin (`/api/admin`)
- User management
- System analytics
- Log management
- Module control

### Notifications (`/api/notifications`)
- Email notifications
- Push notifications
- Webhook handling
- In-app messaging

## Architecture

```
src/
├── server.js                 # Main server file
├── modules/                  # Feature modules
│   ├── auth/
│   ├── profile/
│   ├── streaming/
│   ├── monetization/
│   ├── blac/
│   ├── tvradio/
│   ├── musicmedia/
│   ├── admin/
│   └── notifications/
├── routes/                   # API route definitions
├── middleware/               # Custom middleware
└── utils/                    # Utility functions
```

## Security Features

- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - Request rate limiting
- **Input Validation** - Request validation
- **JWT Authentication** - Secure token-based auth
- **Password Hashing** - bcrypt password hashing

## Database Integration

Ready for MongoDB integration:
1. Install mongoose: `pnpm add mongoose`
2. Create models in `src/models/`
3. Replace mock data with database calls
4. Update connection in server.js

## Environment Variables

```bash
PORT=3002
NODE_ENV=development
DATABASE_URL=mongodb://localhost:27017/puabo-os
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=your-stripe-key
SMTP_HOST=your-email-host
# See .env.example for complete list
```

## File Upload Support

- Image uploads (JPEG, PNG, GIF)
- Video uploads (MP4)
- Audio uploads (MP3, WAV)
- Maximum file size: 50MB
- Storage in `uploads/` directory

## Real-time Features

- WebSocket support via Socket.io
- Live stream notifications
- Real-time chat
- System status updates

## API Documentation

Complete API documentation available at `/docs/api/README.md`

Health check endpoint: `GET /health`

## Testing

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run specific test file
pnpm test auth.test.js
```

## Deployment

### Docker
```bash
docker build -t puabo-backend .
docker run -p 3002:3002 puabo-backend
```

### Production
```bash
pnpm build
pnpm start
```

## Contributing

1. Follow modular architecture
2. Add comprehensive error handling
3. Include input validation
4. Write tests for new features
5. Update API documentation
6. Follow security best practices