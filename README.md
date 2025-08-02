# PUABO-OS-V200
# PUABO OS v2.0.0

**The World's First! Creator OS** - A complete full-stack monorepo for content creators.

## 🚀 Features

### Frontend (React + Vite)
- **Creator Dashboard** with JWT authentication
- **Live Streaming** management
- **Media Library** for music/video uploads
- **Monetization** tracking and payouts
- **TV/Radio** broadcasting access
- **BLAC Lending** integration
- **Profile Management** system

### Admin Panel (React + TailwindCSS)
- **Dashboard Analytics** with real-time metrics
- **User Management** with role controls
- **System Logs** monitoring
- **Module Control** for platform features

### Backend (Node.js + Express)
- **Modular Architecture** with 9 specialized modules:
  - 🔐 **auth** - JWT authentication & roles
  - 👤 **profile** - User data & image management
  - 📹 **streaming** - Video/audio streaming support
  - 💰 **monetization** - Stripe payment integration
  - 🏦 **BLAC** - Alternative lending logic
  - 📺 **tvradio** - Live broadcast backend
  - 🎵 **musicmedia** - Music/video upload system
  - ⚡ **admin** - Dashboard backend logic
  - 📱 **notifications** - Email/push/webhook system

## 🏗️ Architecture

```
PUABO-OS-V200/
├── packages/
│   ├── frontend/          # React frontend (port 3000)
│   ├── admin/            # Admin dashboard (port 3001)
│   └── backend/          # Express API server (port 3002)
├── docs/                 # Documentation
├── assets/              # Brand assets & UI resources
├── .github/workflows/   # CI/CD automation
├── docker-compose.yml   # Container orchestration
└── .env.example        # Environment variables template
```

## 🚦 Quick Start

### Prerequisites
- Node.js 18+
- pnpm 8+
- Docker (optional)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Puabo20/PUABO-OS-V200.git
cd PUABO-OS-V200
```

2. **Install all dependencies:**
```bash
pnpm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start all services:**
```bash
# Start all services in parallel
pnpm dev

# Or start individual services
pnpm frontend:dev  # http://localhost:3000
pnpm admin:dev     # http://localhost:3001  
pnpm backend:dev   # http://localhost:3002
```

## 🐳 Docker Deployment

### Quick Start with Docker Compose
```bash
# Start the entire stack
docker-compose up --build

# Access the applications:
# Frontend: http://localhost:3000
# Admin: http://localhost:3001
# Backend API: http://localhost:3002
# Health Check: http://localhost:3002/health
```

### Services Included
- **MongoDB** - Database (port 27017)
- **Redis** - Caching (port 6379)
- **PUABO Backend** - API server (port 3002)
- **Nginx** - Reverse proxy (port 80/443)
- **RTMP Server** - Live streaming (port 1935)

## 📱 Applications

### Frontend - Creator Platform
- **URL:** http://localhost:3000
- **Demo Login:** Use any email/password (mock auth)
- **Features:** Creator dashboard, streaming, monetization, media library

### Admin Panel - Management Dashboard  
- **URL:** http://localhost:3001
- **Demo Login:** Click "Sign In as Admin" (mock auth)
- **Features:** User management, analytics, system logs, module control

### Backend API - RESTful Services
- **URL:** http://localhost:3002/api
- **Health Check:** http://localhost:3002/health
- **Documentation:** [API Docs](./docs/api/README.md)

## 🔧 Development

### Available Scripts
```bash
# Development
pnpm dev                 # Start all services
pnpm frontend:dev        # Frontend only
pnpm admin:dev          # Admin panel only  
pnpm backend:dev        # Backend only

# Building
pnpm build              # Build all packages
pnpm build:frontend     # Build frontend only
pnpm build:admin        # Build admin only

# Testing
pnpm test               # Run all tests
pnpm lint               # Lint all packages

# Utilities
pnpm clean              # Clean node_modules
```

### Package Structure
Each package has its own:
- `package.json` with specific dependencies
- `README.md` with detailed documentation
- Build and development scripts
- Linting and testing configuration

## 🛡️ Security Features

- **JWT Authentication** with refresh tokens
- **Rate Limiting** (100 requests/15min)
- **CORS Protection** with whitelist
- **Input Validation** on all endpoints
- **Security Headers** via Helmet
- **Password Hashing** with bcrypt
- **File Upload Validation** with size limits

## 💳 Integrations

- **Stripe** - Payment processing & subscriptions
- **Nodemailer** - Email notifications
- **Socket.io** - Real-time features
- **Sharp** - Image processing
- **FFmpeg** - Video processing
- **JWT** - Secure authentication

## 📊 System Requirements

### Development
- **CPU:** 2+ cores
- **RAM:** 4GB minimum, 8GB recommended
- **Storage:** 5GB free space
- **Network:** Broadband internet

### Production
- **CPU:** 4+ cores
- **RAM:** 8GB minimum, 16GB recommended  
- **Storage:** 50GB+ SSD
- **Network:** High-speed internet with low latency

## 🔄 CI/CD Pipeline

Automated GitHub Actions workflow:
- **Testing** - Lint and test all packages
- **Security** - Vulnerability scanning
- **Building** - Multi-stage Docker builds
- **Deployment** - Staging and production releases

## 📚 Documentation

- **[API Documentation](./docs/api/README.md)** - Complete API reference
- **[Developer Guide](./docs/developer-guide/README.md)** - Development setup and guidelines
- **[Frontend README](./packages/frontend/README.md)** - React frontend details
- **[Admin README](./packages/admin/README.md)** - Admin panel documentation
- **[Backend README](./packages/backend/README.md)** - API server documentation

## 🌐 Live Demo

**Mock Authentication:**
- **Frontend:** Any email/password combination works
- **Admin:** Click "Sign In as Admin" button
- **Backend:** All endpoints return mock data

**Test Features:**
- Create and manage streams
- Upload and organize media
- Track earnings and payments
- Manage users and system settings
- View analytics and logs

## 🤝 Contributing

1. **Fork** the repository
2. **Create** your feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**PUABO Team** - Building the future of creator platforms

---

**Built with ❤️ for creators worldwide**

🌟 **Star this repo** if you find it helpful!
🐛 **Report issues** to help us improve
💡 **Suggest features** for future releases
