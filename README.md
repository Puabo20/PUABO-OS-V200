# PUABO OS v2.0.0 - Creator OS

Welcome to PUABO OS, the world's first Creator Operating System designed specifically for content creators, streamers, musicians, and digital artists.

## Overview

PUABO OS is a comprehensive platform that provides creators with all the tools they need to build, manage, and monetize their creative work in one integrated ecosystem.

### Key Features

- **🎨 Content Creation Tools**: Integrated tools for music, video, and digital art creation
- **📺 TV & Radio Broadcasting**: Professional broadcasting capabilities with scheduling
- **💰 Monetization Platform**: Built-in payment processing and revenue management
- **🏦 BLAC (Alternative Lending)**: Access to creator-focused funding and loans
- **📊 Analytics & Insights**: Comprehensive analytics for content performance
- **🔒 User Management**: Role-based access control and user administration
- **🔔 Notification System**: Multi-channel notifications (email, push, webhooks)

## Architecture

PUABO OS is built as a modern monorepo using pnpm with the following structure:

```
puabo-os-v200/
├── frontend/          # React + Vite + TailwindCSS (Creator Dashboard)
├── admin/             # React + Vite + TailwindCSS (Admin Dashboard)  
├── backend/           # Node.js + Express + MongoDB (REST API)
├── docs/              # Documentation
├── assets/            # Brand assets and legacy files
├── docker-compose.yml # Full-stack deployment
└── .env.example       # Environment configuration template
```

### Technology Stack

**Frontend & Admin:**
- React 19 with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- React Router for navigation
- React Hook Form + Zod for validation
- Lucide React for icons

**Backend:**
- Node.js 20+ with TypeScript
- Express.js framework
- MongoDB with Mongoose
- JWT authentication
- Stripe integration for payments
- WebSocket support for real-time features
- Comprehensive logging and monitoring

**DevOps:**
- Docker containerization
- pnpm workspace management
- GitHub Actions CI/CD
- Environment-based configuration

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+
- MongoDB (local or Atlas)
- Docker (optional)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Puabo20/PUABO-OS-V200.git
cd PUABO-OS-V200
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start development servers:
```bash
# Start all services
pnpm dev

# Or start individual services
pnpm frontend:dev    # Frontend on http://localhost:5173
pnpm admin:dev       # Admin on http://localhost:3001  
pnpm backend:dev     # Backend on http://localhost:3000
```

### Docker Deployment

1. Build and start with Docker Compose:
```bash
docker-compose up --build
```

2. Access the applications:
- Frontend: http://localhost:5173
- Admin: http://localhost:3001
- Backend API: http://localhost:3000
- MongoDB: localhost:27017

## Project Structure

### Frontend (Creator Dashboard)
The frontend is a React application designed for content creators to manage their work:

- **Dashboard**: Overview of creator metrics and quick actions
- **TV & Radio**: Manage broadcasting programs and schedules
- **Music & Media**: Upload and organize creative content
- **Monetization**: Track earnings and manage Stripe integration
- **BLAC**: Apply for creator loans and funding
- **Profile**: Manage user profile and settings

### Admin Dashboard
Administrative interface for system management:

- **User Management**: Manage creator accounts and permissions
- **System Analytics**: Monitor platform usage and performance
- **Content Moderation**: Review and moderate uploaded content
- **Financial Oversight**: Monitor payments and transactions
- **System Health**: Server monitoring and maintenance tools

### Backend API
RESTful API with modular architecture:

- **Authentication**: JWT-based auth with role management
- **User Profiles**: Profile management and settings
- **Streaming**: Video/audio streaming infrastructure
- **Monetization**: Stripe integration and payment processing
- **BLAC**: Loan application and management system
- **TV/Radio**: Broadcasting schedule and program management
- **Music/Media**: Content upload and metadata management
- **Admin**: System administration and monitoring
- **Notifications**: Multi-channel notification system

## API Documentation

### Base URL
```
Development: http://localhost:3000/api
Production: https://api.puabo.com/api
```

### Authentication
All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

### Main Endpoints

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh JWT token
- `GET /api/auth/me` - Get current user

#### Profile Management
- `GET /api/profile` - Get user profile
- `PUT /api/profile` - Update profile
- `POST /api/profile/avatar` - Upload avatar
- `GET /api/profile/settings` - Get user settings
- `PUT /api/profile/settings` - Update settings

#### Content & Media
- `GET /api/musicmedia/uploads` - List user uploads
- `POST /api/musicmedia/upload` - Upload content
- `GET /api/musicmedia/playlists` - List playlists
- `POST /api/musicmedia/playlist` - Create playlist

#### Broadcasting
- `GET /api/tvradio/programs` - List programs
- `POST /api/tvradio/program` - Create program
- `POST /api/tvradio/program/:id/start` - Start broadcast
- `GET /api/tvradio/schedule` - Get schedule

#### Monetization
- `GET /api/monetization/earnings` - Get earnings data
- `GET /api/monetization/transactions` - List transactions
- `POST /api/monetization/stripe/setup` - Setup Stripe
- `POST /api/monetization/payout` - Request payout

#### Alternative Lending (BLAC)
- `GET /api/blac/applications` - List applications
- `POST /api/blac/apply` - Submit application
- `GET /api/blac/loan-types` - Available loan types

#### Streaming
- `GET /api/streaming/sessions` - Active sessions
- `POST /api/streaming/start` - Start stream
- `POST /api/streaming/stop/:id` - Stop stream

#### Notifications
- `GET /api/notifications` - List notifications
- `PUT /api/notifications/:id/read` - Mark as read
- `POST /api/notifications/preferences` - Update preferences

#### Admin (Admin role required)
- `GET /api/admin/users` - List users
- `GET /api/admin/reports` - System reports
- `GET /api/admin/logs` - System logs
- `GET /api/admin/analytics` - Platform analytics

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/puabo-os

# Authentication
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d

# Stripe Integration
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email Service
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# File Storage
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=100MB

# Redis (for caching)
REDIS_URL=redis://localhost:6379

# WebSocket
WEBSOCKET_URL=ws://localhost:3000/streaming

# Environment
NODE_ENV=development
PORT=3000
```

## Development

### Code Style
- ESLint for linting
- Prettier for formatting
- TypeScript for type safety
- Conventional commits

### Testing
```bash
# Run all tests
pnpm test

# Run specific package tests
pnpm --filter frontend test
pnpm --filter backend test
```

### Building
```bash
# Build all packages
pnpm build

# Build specific package
pnpm --filter frontend build
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and patterns
- Write tests for new features
- Update documentation for API changes
- Use semantic commit messages
- Ensure all builds pass before submitting PR

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- Documentation: [docs.puabo.com](https://docs.puabo.com)
- Community: [community.puabo.com](https://community.puabo.com)
- Support: [support@puabo.com](mailto:support@puabo.com)
- GitHub Issues: [github.com/Puabo20/PUABO-OS-V200/issues](https://github.com/Puabo20/PUABO-OS-V200/issues)

---

Built with ❤️ by the PUABO team for creators worldwide.
