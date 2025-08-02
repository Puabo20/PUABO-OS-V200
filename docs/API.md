# PUABO OS API Documentation

## Base URL
```
Development: http://localhost:3000/api
Production: https://api.puabo.com/api
```

## Authentication

All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

### User Roles
- `user`: Basic user access
- `creator`: Content creator with additional permissions
- `admin`: Full system access

## Endpoints

### Authentication Module

#### POST /api/auth/register
Register a new user account.

**Request Body:**
```json
{
  "username": "john_creator",
  "email": "john@example.com", 
  "password": "securepassword",
  "role": "creator"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user123",
      "username": "john_creator",
      "email": "john@example.com",
      "role": "creator"
    }
  },
  "message": "User registered successfully"
}
```

#### POST /api/auth/login
Authenticate user and get access token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user123",
      "username": "john_creator", 
      "email": "john@example.com",
      "role": "creator"
    }
  },
  "message": "Login successful"
}
```

#### POST /api/auth/refresh
Refresh JWT token.

**Request Body:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Profile Module

#### GET /api/profile
Get current user's profile.

**Response:**
```json
{
  "success": true,
  "data": {
    "profile": {
      "bio": "Creative content creator...",
      "avatar": "https://example.com/avatar.jpg",
      "settings": {
        "privacy": "public",
        "notifications": true
      }
    }
  }
}
```

#### PUT /api/profile
Update user profile.

**Request Body:**
```json
{
  "bio": "Updated bio text",
  "settings": {
    "privacy": "public",
    "notifications": true
  }
}
```

### Streaming Module

#### GET /api/streaming/sessions
Get active streaming sessions.

**Response:**
```json
{
  "success": true,
  "data": {
    "activeSessions": [
      {
        "id": "session123",
        "title": "Morning Creative Session",
        "status": "live",
        "viewers": 2345,
        "startTime": "2024-01-01T10:00:00Z"
      }
    ],
    "totalSessions": 1
  }
}
```

#### POST /api/streaming/start
Start a new streaming session.

**Request Body:**
```json
{
  "title": "My Creative Stream",
  "description": "Live creative process",
  "type": "video"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "session": {
      "id": "session123",
      "title": "My Creative Stream",
      "status": "starting",
      "streamKey": "sk_abc123xyz"
    }
  }
}
```

### Monetization Module

#### GET /api/monetization/earnings
Get earnings summary.

**Response:**
```json
{
  "success": true,
  "data": {
    "thisMonth": 3247.50,
    "lastMonth": 2984.20,
    "allTime": 24567.80,
    "breakdown": {
      "subscriptions": 2500.00,
      "oneTimePurchases": 547.50,
      "tips": 200.00
    }
  }
}
```

#### GET /api/monetization/transactions
Get transaction history.

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)

**Response:**
```json
{
  "success": true,
  "data": {
    "transactions": [
      {
        "id": "txn123",
        "type": "subscription",
        "amount": 29.99,
        "description": "Premium subscription",
        "date": "2024-01-01T12:00:00Z",
        "status": "completed"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 50,
      "pages": 5
    }
  }
}
```

#### POST /api/monetization/stripe/setup
Initialize Stripe Connect setup.

**Response:**
```json
{
  "success": true,
  "data": {
    "setupUrl": "https://connect.stripe.com/setup/...",
    "accountId": "acct_1234567890"
  }
}
```

### BLAC (Alternative Lending) Module

#### GET /api/blac/applications
Get loan applications.

**Response:**
```json
{
  "success": true,
  "data": {
    "applications": [
      {
        "id": "app123",
        "type": "equipment-loan",
        "amount": 15000,
        "purpose": "Professional streaming equipment",
        "status": "pending",
        "submittedDate": "2024-01-01T00:00:00Z"
      }
    ]
  }
}
```

#### POST /api/blac/apply
Submit a loan application.

**Request Body:**
```json
{
  "type": "equipment-loan",
  "amount": 15000,
  "purpose": "Professional streaming equipment",
  "documents": ["identity", "income"]
}
```

#### GET /api/blac/loan-types
Get available loan types.

**Response:**
```json
{
  "success": true,
  "data": {
    "loanTypes": [
      {
        "id": "equipment-loan",
        "name": "Equipment Loan",
        "description": "Funding for professional content creation equipment",
        "minAmount": 1000,
        "maxAmount": 50000,
        "interestRate": 5.9,
        "term": "12-36 months"
      }
    ]
  }
}
```

### TV/Radio Module

#### GET /api/tvradio/programs
Get broadcasting programs.

**Response:**
```json
{
  "success": true,
  "data": {
    "programs": [
      {
        "id": "prog123",
        "title": "Morning Show",
        "type": "tv",
        "status": "live",
        "viewers": 2345,
        "startTime": "2024-01-01T09:00:00Z"
      }
    ]
  }
}
```

#### POST /api/tvradio/program
Create a new program.

**Request Body:**
```json
{
  "title": "Evening Talk Show",
  "type": "tv",
  "description": "Daily talk show",
  "scheduledTime": "2024-01-01T20:00:00Z"
}
```

#### GET /api/tvradio/schedule
Get broadcasting schedule.

**Query Parameters:**
- `date`: Date in YYYY-MM-DD format

**Response:**
```json
{
  "success": true,
  "data": {
    "date": "2024-01-01",
    "schedule": [
      {
        "time": "09:00",
        "programId": "prog123",
        "title": "Morning Show",
        "type": "tv",
        "duration": 120
      }
    ]
  }
}
```

### Music/Media Module

#### GET /api/musicmedia/uploads
Get uploaded content.

**Query Parameters:**
- `type`: Filter by type (audio, video)
- `page`: Page number
- `limit`: Items per page

**Response:**
```json
{
  "success": true,
  "data": {
    "uploads": [
      {
        "id": "upload123",
        "title": "Midnight Dreams",
        "type": "audio",
        "duration": 245,
        "uploadDate": "2024-01-01T00:00:00Z",
        "tags": ["chill", "ambient"],
        "plays": 1234,
        "status": "published"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 25,
      "pages": 2
    }
  }
}
```

#### POST /api/musicmedia/upload
Upload new content.

**Request Body:**
```json
{
  "title": "New Track",
  "type": "audio",
  "tags": ["indie", "experimental"],
  "description": "My latest creation"
}
```

#### GET /api/musicmedia/playlists
Get user playlists.

**Response:**
```json
{
  "success": true,
  "data": {
    "playlists": [
      {
        "id": "playlist123",
        "name": "Chill Vibes",
        "description": "Relaxing tracks",
        "trackCount": 12,
        "duration": 2890,
        "isPublic": true,
        "createdDate": "2024-01-01T00:00:00Z"
      }
    ]
  }
}
```

### Notifications Module

#### GET /api/notifications
Get user notifications.

**Query Parameters:**
- `page`: Page number
- `limit`: Items per page
- `type`: Filter by type
- `read`: Filter by read status

**Response:**
```json
{
  "success": true,
  "data": {
    "notifications": [
      {
        "id": "notif123",
        "type": "payment",
        "title": "Payment Received",
        "message": "You received a payment of $29.99",
        "read": false,
        "createdAt": "2024-01-01T12:00:00Z"
      }
    ],
    "unreadCount": 12
  }
}
```

#### PUT /api/notifications/:id/read
Mark notification as read.

**Response:**
```json
{
  "success": true,
  "data": {
    "notificationId": "notif123",
    "read": true,
    "readAt": "2024-01-01T12:00:00Z"
  }
}
```

### Admin Module (Admin Role Required)

#### GET /api/admin/users
Get user list (admin only).

**Query Parameters:**
- `page`: Page number
- `limit`: Items per page
- `role`: Filter by role
- `status`: Filter by status

**Response:**
```json
{
  "success": true,
  "data": {
    "users": [
      {
        "id": "user123",
        "username": "john_creator",
        "email": "john@example.com",
        "role": "creator",
        "status": "active",
        "joinDate": "2024-01-01T00:00:00Z",
        "totalUploads": 24,
        "totalEarnings": 1234.56
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 1543,
      "pages": 78
    }
  }
}
```

#### GET /api/admin/reports
Get system reports.

**Response:**
```json
{
  "success": true,
  "data": {
    "systemMetrics": {
      "totalUsers": 12543,
      "activeUsers": 8934,
      "totalRevenue": 234567.89,
      "storageUsed": 2.3
    },
    "recentActivity": [
      {
        "type": "user_registration",
        "count": 23,
        "timeframe": "last_24h"
      }
    ]
  }
}
```

## Error Responses

All endpoints return error responses in the following format:

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message (development only)"
}
```

### Common HTTP Status Codes

- `200`: Success
- `201`: Created successfully
- `400`: Bad request (validation errors)
- `401`: Unauthorized (invalid/missing token)
- `403`: Forbidden (insufficient permissions)
- `404`: Not found
- `500`: Internal server error

## Rate Limiting

API endpoints are rate limited to prevent abuse:

- Authentication endpoints: 5 requests per minute
- General API endpoints: 100 requests per minute
- Upload endpoints: 10 requests per minute

Rate limit headers are included in responses:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1640995200
```

## WebSocket Events

For real-time features, connect to the WebSocket endpoint:
```
ws://localhost:3000/streaming
```

### Events
- `stream-started`: New stream session started
- `stream-ended`: Stream session ended
- `viewer-count`: Real-time viewer count updates
- `chat-message`: Live chat messages
- `notification`: Real-time notifications