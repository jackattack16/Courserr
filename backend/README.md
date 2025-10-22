# Courserr Backend System

A comprehensive backend system for the Courserr course management platform that integrates with Google Forms and provides an admin interface for course data management.

## Features

- **RESTful API** for course and comment management
- **Google Forms Integration** for automated course data collection
- **Admin Panel** for approving course changes and moderating comments
- **MongoDB Database** for persistent data storage
- **JWT Authentication** for secure admin access
- **Comment Moderation System** with approval workflow
- **Course Change Tracking** with approval workflow

## Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Google Forms  │───▶│   Backend API   │───▶│   MongoDB DB    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │   Admin Panel   │
                       └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │   Frontend      │
                       └─────────────────┘
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- Google Cloud Platform account (for Google Forms integration)

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Copy the example environment file and configure it:

```bash
cp env.example .env
```

Edit `.env` with your configuration:

```env
# Server Configuration
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/courserr

# Google Forms Integration
GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=24h

# Admin Configuration
ADMIN_EMAIL=admin@courserr.com
ADMIN_PASSWORD=your_admin_password
```

### 3. Database Setup

#### Option A: Local MongoDB
```bash
# Install MongoDB locally
# Start MongoDB service
mongod
```

#### Option B: MongoDB Atlas (Recommended)
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in `.env`

### 4. Google Forms Integration Setup

1. **Create a Google Cloud Project**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project

2. **Enable Google Sheets API**
   - Go to APIs & Services > Library
   - Search for "Google Sheets API"
   - Enable it

3. **Create Service Account**
   - Go to APIs & Services > Credentials
   - Create Credentials > Service Account
   - Download the JSON key file
   - Extract the email and private key for `.env`

4. **Share Google Sheet**
   - Open your Google Sheet
   - Share it with the service account email
   - Give "Editor" permissions

### 5. Start the Server

```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3001`

### 6. Migrate Existing Course Data

Run the migration script to import existing course data:

```bash
node scripts/migrateCourses.js
```

### 7. Access Admin Panel

Visit `http://localhost:3001/admin.html` and login with your admin credentials.

## API Endpoints

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get specific course
- `POST /api/courses` - Create new course (admin only)
- `PUT /api/courses/:id` - Update course (admin only)
- `POST /api/courses/:id/ratings` - Add rating to course

### Comments
- `GET /api/comments/course/:courseId` - Get comments for a course
- `POST /api/comments` - Submit new comment
- `GET /api/comments/pending` - Get pending comments (admin only)
- `POST /api/comments/:id/approve` - Approve comment (admin only)
- `POST /api/comments/:id/flag` - Flag comment (admin only)

### Admin
- `POST /api/admin/login` - Admin login
- `GET /api/admin/profile` - Get admin profile
- `GET /api/admin/dashboard` - Get dashboard statistics
- `GET /api/admin/changes/pending` - Get pending course changes
- `POST /api/admin/changes/:id/approve` - Approve course change
- `POST /api/admin/changes/:id/reject` - Reject course change

### Google Forms
- `GET /api/google-forms/fetch` - Fetch data from Google Sheets
- `POST /api/google-forms/process` - Process Google Forms data
- `GET /api/google-forms/status` - Get integration status
- `GET /api/google-forms/test` - Test Google Sheets connection

## Frontend Integration

### Update HTML Files

Replace the static course loading with API integration:

```html
<!-- Remove this line -->
<script src="../Javascript/ClassInstantiation.js"></script>

<!-- Add this line -->
<script src="../Javascript/apiIntegration.js"></script>
```

### Update JavaScript Files

The `apiIntegration.js` file provides backward compatibility with existing code while adding API functionality.

## Workflow

### Course Data Management

1. **Data Collection**: Google Forms collects course information
2. **Data Processing**: Admin fetches and processes data via API
3. **Review Process**: Admin reviews and approves/rejects changes
4. **Publication**: Approved changes are applied to the database
5. **Frontend Updates**: Frontend automatically reflects changes

### Comment Moderation

1. **Submission**: Students submit comments via frontend
2. **Queue**: Comments are queued for moderation
3. **Review**: Admin reviews comments in admin panel
4. **Decision**: Admin approves or flags comments
5. **Publication**: Approved comments appear on course pages

## Security Features

- **JWT Authentication** for admin access
- **Rate Limiting** to prevent abuse
- **Input Validation** for all API endpoints
- **CORS Protection** for cross-origin requests
- **Helmet.js** for security headers
- **Password Hashing** with bcrypt
- **Account Lockout** after failed login attempts

## Monitoring and Logging

- **Console Logging** for development
- **Error Handling** with detailed error messages
- **Admin Action Logging** for audit trails
- **Health Check Endpoint** for monitoring

## Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check MongoDB is running
   - Verify connection string in `.env`
   - Check network connectivity

2. **Google Sheets API Error**
   - Verify service account credentials
   - Check API is enabled
   - Ensure sheet is shared with service account

3. **Admin Login Failed**
   - Check admin credentials in `.env`
   - Verify JWT_SECRET is set
   - Check account is not locked

### Debug Mode

Set `NODE_ENV=development` in `.env` for detailed error messages.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
