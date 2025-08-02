# PUABO OS Admin Panel

Administrative dashboard for managing the PUABO OS v2.0.0 platform.

## Features

- **Dashboard Analytics** - System overview and metrics
- **User Management** - View, edit, and manage user accounts
- **System Logs** - Monitor system events and errors
- **Module Control** - Enable/disable platform modules
- **Real-time Monitoring** - Live system status updates

## Tech Stack

- React 19
- Vite 7
- TailwindCSS 3
- Recharts for analytics
- Lucide React for icons
- Axios for API calls

## Development

### Start Development Server
```bash
pnpm dev
```
Runs on http://localhost:3001

### Build for Production
```bash
pnpm build
```

### Preview Production Build
```bash
pnpm preview
```

## Admin Features

### Dashboard
- Total users count
- Active streams monitoring
- Revenue tracking
- New user registrations

### User Management
- User list with search/filter
- Role management (creator, admin, etc.)
- Account status control
- User activity monitoring

### System Logs
- Real-time log viewing
- Log level filtering (info, warning, error)
- System event tracking
- Error monitoring

### Module Control
- Enable/disable platform modules
- Module status monitoring
- Configuration management
- Health checks

## API Integration

Connects to backend admin endpoints:
- User management via `/api/admin/users`
- Analytics via `/api/admin/analytics`
- Logs via `/api/admin/system/logs`
- Module control via `/api/admin/modules`

## Security

- Admin-only access with role verification
- Session management
- Secure API communication
- Action logging and audit trail

## Styling

Uses PUABO theme with admin-specific styling:
- Dashboard cards with metrics
- Data tables for user management
- Status indicators for system health
- Responsive design for all screen sizes

## Project Structure

```
src/
├── App.jsx           # Main admin application
├── main.jsx         # React entry point
├── index.css        # Admin-specific styles
└── App.css          # Component styles
```

## Environment Variables

```bash
VITE_API_URL=http://localhost:3002/api
VITE_APP_NAME=PUABO OS Admin
```

## Contributing

1. Follow admin UI/UX patterns
2. Ensure secure access controls
3. Add proper error handling
4. Include loading states
5. Test admin workflows thoroughly