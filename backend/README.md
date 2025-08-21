# Dalxiis Tourism Backend API

A secure and simple backend API for handling contact form submissions from the Dalxiis Tourism website.

## 🚀 Features

- **Contact Form API** - Accept and store contact messages
- **Security Features** - Rate limiting, input validation, XSS protection
- **MongoDB Integration** - Store contact data with spam detection
- **ES6 Modules** - Modern JavaScript with import/export syntax

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Setup:**
   ```bash
   # Copy the example environment file
   cp env.example .env
   
   # Edit .env with your configuration
   ```

3. **MongoDB Setup:**
   - Install MongoDB locally or use MongoDB Atlas
   - Update the `MONGODB_URI` in your `.env` file

## ⚙️ Configuration

Create a `.env` file with the following variables:

```env
# Server Configuration
NODE_ENV=development
PORT=5000

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/dalxiis_tourism

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com

# Production Settings
FORCE_HTTPS=false
TRUST_PROXY=false
```

## 🚀 Running the Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on the configured port (default: 5000).

## 📡 API Endpoints

### POST `/api/contact`
Submit a contact form message.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "message": "I'm interested in your tourism services!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon.",
  "data": {
    "id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "submittedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### GET `/api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 123.45,
  "environment": "development"
}
```

## 🔒 Security Features

- **Rate Limiting** - 5 contact submissions per IP per 15 minutes
- **Input Validation** - Comprehensive validation for all fields
- **XSS Protection** - Blocks dangerous HTML/script content
- **Spam Detection** - Automatic spam scoring and filtering
- **CORS Protection** - Configurable allowed origins
- **Request Size Limits** - 10KB maximum request size
- **Security Headers** - Helmet.js security headers

## 🗄️ Database Schema

The Contact model includes:
- `firstName`, `lastName` - Name fields with validation
- `email` - Email address with format validation
- `message` - Contact message with XSS protection
- `ipAddress` - Client IP for rate limiting
- `userAgent` - Browser/client information
- `status` - Message status (pending/read)
- `isSpam` - Spam detection flag
- `spamScore` - Numerical spam score (0-100)
- `timestamps` - Created/updated timestamps

## 🧪 Testing

Test the API endpoints using tools like:
- **Postman** - API testing tool
- **cURL** - Command line HTTP client
- **Thunder Client** - VS Code extension

**Example cURL request:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

## 🚀 Deployment

1. **Set environment variables:**
   - `NODE_ENV=production`
   - `MONGODB_URI` - Your production MongoDB connection string
   - `ALLOWED_ORIGINS` - Your production domain
   - `FORCE_HTTPS=true` - Enable HTTPS enforcement

2. **Use a process manager:**
   ```bash
   npm install -g pm2
   pm2 start src/server.js --name "dalxiis-backend"
   ```

3. **Set up reverse proxy (Nginx/Apache)** for production use.

## 📝 License

MIT License - see LICENSE file for details.

## 🤝 Support

For support or questions, contact the development team.
