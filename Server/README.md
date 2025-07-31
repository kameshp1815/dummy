# AutoSharePolling Backend

This is the backend server for the AutoSharePolling application, providing authentication and user management APIs.

## Features

- User authentication (login/register)
- JWT-based authentication
- Role-based access control (Customer/Driver)
- User profile management
- Password hashing with bcrypt
- MongoDB database integration
- CORS enabled for frontend integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd Server
   npm install
   ```

2. **Environment Configuration**
   ```bash
   # Copy the example environment file
   cp env.example .env
   
   # Edit .env with your configuration
   # Make sure to change the JWT_SECRET in production
   ```

3. **Database Setup**
   - Install MongoDB locally, or
   - Use MongoDB Atlas (cloud)
   - Update the `MONGODB_URI` in your `.env` file

4. **Start the Server**
   ```bash
   # Development mode (with auto-restart)
   npm run dev
   
   # Production mode
   npm start
   ```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication

#### POST `/api/auth/register`
Register a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "role": "customer",
  "firstName": "John",
  "lastName": "Doe",
  "phoneNumber": "+1234567890"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully.",
  "data": {
    "user": {
      "_id": "...",
      "email": "user@example.com",
      "role": "customer",
      "firstName": "John",
      "lastName": "Doe",
      "phoneNumber": "+1234567890",
      "isActive": true,
      "lastLogin": "2024-01-01T00:00:00.000Z",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### POST `/api/auth/login`
Login with existing credentials.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "role": "customer"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful.",
  "data": {
    "user": {
      "_id": "...",
      "email": "user@example.com",
      "role": "customer",
      "firstName": "John",
      "lastName": "Doe",
      "phoneNumber": "+1234567890",
      "isActive": true,
      "lastLogin": "2024-01-01T00:00:00.000Z",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Protected Routes (Require Authentication)

#### GET `/api/auth/profile`
Get current user profile.

**Headers:**
```
Authorization: Bearer <token>
```

#### PUT `/api/auth/profile`
Update user profile.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "phoneNumber": "+1234567890"
}
```

#### PUT `/api/auth/change-password`
Change user password.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "currentPassword": "oldpassword",
  "newPassword": "newpassword123"
}
```

#### POST `/api/auth/logout`
Logout (client-side token removal).

**Headers:**
```
Authorization: Bearer <token>
```

### Role-Specific Routes

#### GET `/api/auth/customer/profile`
Get customer profile (customer role only).

#### GET `/api/auth/driver/profile`
Get driver profile (driver role only).

## Error Responses

All endpoints return consistent error responses:

```json
{
  "success": false,
  "message": "Error description"
}
```

Common HTTP status codes:
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (invalid credentials/token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `500` - Internal Server Error

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- CORS protection
- Helmet security headers
- Input validation
- Role-based access control

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/autosharepolling` |
| `JWT_SECRET` | JWT signing secret | `your-super-secret-jwt-key-change-this-in-production` |
| `JWT_EXPIRES_IN` | JWT expiration time | `7d` |
| `CLIENT_URL` | Frontend URL for CORS | `http://localhost:5173` |

## Development

- The server uses nodemon for development auto-restart
- MongoDB connection is established on server start
- Graceful shutdown handling for SIGTERM and SIGINT
- Comprehensive error logging

## Production Considerations

1. Change the `JWT_SECRET` to a strong, unique value
2. Use environment variables for all sensitive configuration
3. Set up proper MongoDB Atlas or production MongoDB instance
4. Configure proper CORS origins
5. Set up HTTPS in production
6. Consider rate limiting for production use 