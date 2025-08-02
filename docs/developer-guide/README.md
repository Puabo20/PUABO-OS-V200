# PUABO OS v2.0.0 Developer Guide

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm 8+
- Docker (optional)
- MongoDB (for backend)
- Redis (for caching)

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
pnpm frontend:dev  # Frontend on port 3000
pnpm admin:dev     # Admin panel on port 3001
pnpm backend:dev   # Backend API on port 3002
```

## Project Structure

```
PUABO-OS-V200/
├── packages/
│   ├── frontend/          # React frontend app
│   ├── admin/            # React admin dashboard
│   └── backend/          # Node.js API server
├── docs/                 # Documentation
├── assets/              # Brand assets
├── .github/workflows/   # CI/CD pipelines
├── docker-compose.yml   # Docker configuration
├── Dockerfile          # Multi-stage Docker build
└── .env.example       # Environment variables template
```

## Backend Architecture

### Modular Structure
The backend uses a modular architecture with separate modules for each feature:

- `auth/` - Authentication and authorization
- `profile/` - User profile management
- `streaming/` - Live streaming functionality
- `monetization/` - Payment processing with Stripe
- `blac/` - Alternative lending system
- `tvradio/` - TV and radio broadcasting
- `musicmedia/` - Music and video uploads
- `admin/` - Admin dashboard functionality
- `notifications/` - Email, push, and webhook notifications

### Adding New Modules

1. Create module directory: `packages/backend/src/modules/yourmodule/`
2. Create `index.js` with module logic
3. Create route file: `packages/backend/src/routes/yourmodule.js`
4. Import and use in `packages/backend/src/server.js`

Example module structure:
```javascript
// packages/backend/src/modules/yourmodule/index.js
const yourModule = {
  getData: async (req, res) => {
    // Module logic here
    res.json({ success: true, data: 'your data' })
  }
}

export default yourModule
```

## Frontend Development

### Component Structure
```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── services/      # API service calls
└── styles/        # CSS and styling
```

### Adding New Features

1. Create component in appropriate directory
2. Add routing if needed
3. Connect to backend API via services
4. Style with TailwindCSS using PUABO theme

### PUABO Theme Colors
```css
puabo-primary: #00ffcc    /* Bright cyan */
puabo-secondary: #0d0d0d  /* Dark background */
puabo-accent: #001f1f     /* Dark cyan accent */
puabo-dark: #002222       /* Darker panels */
puabo-light: #00ffcc44    /* Light cyan with opacity */
```

## Admin Panel Development

The admin panel is a separate React app with:

- Dashboard with analytics
- User management
- System logs
- Module control

### Adding Admin Features

1. Add new tab to navigation
2. Create component for the feature
3. Add to main App.jsx switch statement
4. Connect to admin API endpoints

## Database Integration

Currently uses mock data. To integrate with MongoDB:

1. Install mongoose: `pnpm add mongoose`
2. Create models in `packages/backend/src/models/`
3. Replace mock implementations with database calls
4. Update connection string in `.env`

## Testing

### Running Tests
```bash
# Run all tests
pnpm test

# Run tests for specific package
pnpm --filter frontend test
pnpm --filter admin test  
pnpm --filter backend test
```

### Writing Tests
- Frontend: Use Jest + React Testing Library
- Backend: Use Jest + Supertest
- Place test files next to components with `.test.js` extension

## Deployment

### Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up --build

# Production deployment
docker-compose -f docker-compose.prod.yml up -d
```

### Manual Deployment
```bash
# Build all packages
pnpm build

# Start production server
pnpm start
```

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Make changes and test
4. Commit: `git commit -m 'Add your feature'`
5. Push: `git push origin feature/your-feature`
6. Create Pull Request

## Troubleshooting

### Common Issues

**Port conflicts:**
- Frontend: Change port in vite.config.js
- Admin: Use `--port` flag in package.json
- Backend: Set PORT in .env

**Dependencies issues:**
```bash
# Clear node_modules and reinstall
pnpm clean
pnpm install
```

**Build failures:**
- Check TailwindCSS configuration
- Verify all imports are correct
- Ensure environment variables are set

**API connection issues:**
- Verify backend is running on correct port
- Check CORS configuration
- Validate API endpoints in frontend services

For more help, check the GitHub Issues or create a new issue.