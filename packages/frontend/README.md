# PUABO OS Frontend

The main user-facing application for PUABO OS v2.0.0 - a React-based creator platform.

## Features

- **JWT Authentication** - Secure login/logout system
- **Creator Dashboard** - Centralized control panel for creators
- **Live Streaming** - Start and manage live streams
- **Media Library** - Upload and manage music/video content
- **Monetization** - Track earnings and manage payouts
- **TV/Radio** - Access broadcasting channels
- **BLAC Lending** - Alternative lending for creators
- **Profile Management** - Update creator profiles

## Tech Stack

- React 19
- Vite 7
- TailwindCSS 3
- React Router 6
- Axios for API calls
- JWT Decode
- TanStack Query

## Development

### Start Development Server
```bash
pnpm dev
```
Runs on http://localhost:3000

### Build for Production
```bash
pnpm build
```

### Preview Production Build
```bash
pnpm preview
```

## API Integration

The frontend connects to the backend API at `http://localhost:3002/api`. 

Key services:
- Authentication via `/api/auth`
- Profile management via `/api/profile`
- Streaming via `/api/streaming`
- Media management via `/api/musicmedia`
- Monetization via `/api/monetization`

## Styling

Uses TailwindCSS with custom PUABO theme:
- Primary: #00ffcc (bright cyan)
- Secondary: #0d0d0d (dark background)
- Accent: #001f1f (dark cyan)

## Project Structure

```
src/
├── App.jsx           # Main application component
├── main.jsx         # React entry point
├── index.css        # Global styles with Tailwind
└── App.css          # Component-specific styles
```

## Environment Variables

```bash
VITE_API_URL=http://localhost:3002/api
VITE_APP_NAME=PUABO OS Frontend
```

## Contributing

1. Follow React best practices
2. Use functional components with hooks
3. Style with TailwindCSS classes
4. Connect to backend APIs via services
5. Test on multiple screen sizes