#!/bin/bash

# Courserr Backend Setup Script
echo "🚀 Setting up Courserr Backend System..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v14 or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 14 ]; then
    echo "❌ Node.js version $NODE_VERSION is too old. Please install Node.js v14 or higher."
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ npm $(npm -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Check if .env file exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp env.example .env
    echo "⚠️  Please edit .env file with your configuration before starting the server"
    echo "   Required: MONGODB_URI, JWT_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD"
else
    echo "✅ .env file already exists"
fi

# Check if MongoDB is accessible
echo "🔍 Checking MongoDB connection..."
if command -v mongosh &> /dev/null; then
    # Try to connect to MongoDB
    if mongosh --eval "db.runCommand('ping')" --quiet &> /dev/null; then
        echo "✅ MongoDB connection successful"
    else
        echo "⚠️  MongoDB connection failed. Please ensure MongoDB is running or check your MONGODB_URI in .env"
    fi
else
    echo "⚠️  mongosh not found. Please ensure MongoDB is installed and running"
fi

echo ""
echo "🎉 Setup completed!"
echo ""
echo "Next steps:"
echo "1. Edit .env file with your configuration"
echo "2. Start MongoDB (if using local instance)"
echo "3. Run: npm run dev (for development) or npm start (for production)"
echo "4. Visit http://localhost:3001/admin.html for admin panel"
echo "5. Run: node scripts/migrateCourses.js to import existing course data"
echo ""
echo "📚 For detailed setup instructions, see README.md"
