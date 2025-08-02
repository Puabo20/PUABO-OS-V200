# PUABO OS v2.0.0 API Documentation

## Base URL
```
http://localhost:3002/api
```

## Authentication

All API endpoints (except auth endpoints) require a valid JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### Authentication (`/auth`)

#### POST `/auth/login`
Login user and receive JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt-token-here",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "User Name",
    "role": "creator"
  }
}
```

#### POST `/auth/register`
Register new user account.

#### POST `/auth/refresh`
Refresh JWT token.

#### POST `/auth/logout`
Logout user.

#### GET `/auth/me`
Get current user profile.

---

### Profile Management (`/profile`)

#### GET `/profile/:userId`
Get user profile information.

#### PUT `/profile/:userId`
Update user profile.

#### POST `/profile/:userId/avatar`
Upload user avatar image.

#### DELETE `/profile/:userId`
Delete user profile.

---

### Streaming (`/streaming`)

#### POST `/streaming/start`
Start a new live stream.

**Request Body:**
```json
{
  "title": "My Live Stream",
  "description": "Stream description",
  "privacy": "public"
}
```

#### POST `/streaming/stop`
Stop an active stream.

#### GET `/streaming/status/:streamId`
Get stream status and statistics.

#### GET `/streaming/list`
List all active streams.

---

### Monetization (`/monetization`)

#### POST `/monetization/payment-intent`
Create Stripe payment intent.

#### POST `/monetization/subscription`
Create subscription.

#### GET `/monetization/earnings/:userId`
Get user earnings data.

#### POST `/monetization/payout`
Request payout.

---

### BLAC Alternative Lending (`/blac`)

#### POST `/blac/application`
Submit loan application.

#### GET `/blac/application/:id`
Get application status.

#### PUT `/blac/application/:id/status`
Update application status (admin only).

#### GET `/blac/loans/:userId`
Get user's loans.

---

### TV/Radio Broadcasting (`/tvradio`)

#### POST `/tvradio/broadcast/start`
Start TV/Radio broadcast.

#### POST `/tvradio/broadcast/stop`
Stop broadcast.

#### GET `/tvradio/channels`
Get available channels.

#### POST `/tvradio/schedule`
Schedule content.

---

### Music/Media (`/musicmedia`)

#### POST `/musicmedia/upload`
Upload music or video file.

#### GET `/musicmedia/library/:userId`
Get user's media library.

#### DELETE `/musicmedia/media/:mediaId`
Delete media file.

#### GET `/musicmedia/search`
Search media content.

---

### Admin (`/admin`)

#### GET `/admin/users`
Get all users (admin only).

#### PUT `/admin/users/:userId/role`
Update user role (admin only).

#### GET `/admin/system/logs`
Get system logs (admin only).

#### GET `/admin/analytics`
Get analytics data (admin only).

#### POST `/admin/modules/:moduleId/toggle`
Toggle module status (admin only).

---

### Notifications (`/notifications`)

#### POST `/notifications/send`
Send notification.

#### GET `/notifications/:userId`
Get user notifications.

#### PUT `/notifications/:notificationId/read`
Mark notification as read.

#### POST `/notifications/webhook`
Handle webhook notifications.

---

## Error Responses

All endpoints return errors in this format:
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message"
}
```

## Rate Limiting

API requests are rate limited to 100 requests per 15 minutes per IP address.