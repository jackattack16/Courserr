@echo off
echo 🚀 Setting up Courserr Backend System...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js v14 or higher.
    pause
    exit /b 1
)

echo ✅ Node.js detected

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm.
    pause
    exit /b 1
)

echo ✅ npm detected

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

REM Check if .env file exists
if not exist .env (
    echo 📝 Creating .env file from template...
    copy env.example .env
    echo ⚠️  Please edit .env file with your configuration before starting the server
    echo    Required: MONGODB_URI, JWT_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD
) else (
    echo ✅ .env file already exists
)

echo.
echo 🎉 Setup completed!
echo.
echo Next steps:
echo 1. Edit .env file with your configuration
echo 2. Start MongoDB (if using local instance)
echo 3. Run: npm run dev (for development) or npm start (for production)
echo 4. Visit http://localhost:3001/admin.html for admin panel
echo 5. Run: node scripts/migrateCourses.js to import existing course data
echo.
echo 📚 For detailed setup instructions, see README.md
pause
