#!/bin/bash

# Google Forms Integration Setup Script for Courserr
echo "🔗 Setting up Google Forms Integration for Courserr..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "❌ .env file not found. Please run the main setup script first."
    exit 1
fi

echo "📋 Google Forms Integration Setup"
echo "================================="
echo ""
echo "This script will help you configure your Google Form integration."
echo ""

# Check if Google credentials are already configured
if grep -q "GOOGLE_SHEETS_SPREADSHEET_ID" .env && grep -q "GOOGLE_SERVICE_ACCOUNT_EMAIL" .env; then
    echo "✅ Google credentials appear to be configured in .env"
    echo ""
    read -p "Do you want to reconfigure? (y/N): " reconfigure
    if [[ ! $reconfigure =~ ^[Yy]$ ]]; then
        echo "Skipping configuration."
        exit 0
    fi
fi

echo "📝 Please provide the following information:"
echo ""

# Get spreadsheet ID
read -p "Google Sheets Spreadsheet ID (from URL): " spreadsheet_id
if [ -z "$spreadsheet_id" ]; then
    echo "❌ Spreadsheet ID is required"
    exit 1
fi

# Get service account email
read -p "Service Account Email: " service_email
if [ -z "$service_email" ]; then
    echo "❌ Service account email is required"
    exit 1
fi

# Get private key
echo ""
echo "📄 Please paste your private key (including BEGIN/END lines):"
echo "Press Enter when done, then type 'END' on a new line"
private_key=""
while IFS= read -r line; do
    if [ "$line" = "END" ]; then
        break
    fi
    private_key="$private_key$line\n"
done

if [ -z "$private_key" ]; then
    echo "❌ Private key is required"
    exit 1
fi

# Update .env file
echo ""
echo "🔧 Updating .env file..."

# Remove existing Google credentials
sed -i '/^GOOGLE_SHEETS_SPREADSHEET_ID/d' .env
sed -i '/^GOOGLE_SERVICE_ACCOUNT_EMAIL/d' .env
sed -i '/^GOOGLE_PRIVATE_KEY/d' .env

# Add new credentials
echo "" >> .env
echo "# Google Forms Integration" >> .env
echo "GOOGLE_SHEETS_SPREADSHEET_ID=$spreadsheet_id" >> .env
echo "GOOGLE_SERVICE_ACCOUNT_EMAIL=$service_email" >> .env
echo "GOOGLE_PRIVATE_KEY=\"$private_key\"" >> .env

echo "✅ Google credentials updated in .env file"
echo ""

# Test the configuration
echo "🧪 Testing Google Sheets connection..."
if command -v node &> /dev/null; then
    node -e "
        require('dotenv').config();
        const { google } = require('googleapis');
        
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\\\n/g, '\\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });
        
        const sheets = google.sheets({ version: 'v4', auth });
        
        sheets.spreadsheets.get({
            spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        }).then(response => {
            console.log('✅ Connection successful!');
            console.log('📊 Spreadsheet title:', response.data.properties.title);
            console.log('📋 Sheets:', response.data.sheets.map(s => s.properties.title).join(', '));
        }).catch(error => {
            console.log('❌ Connection failed:', error.message);
            process.exit(1);
        });
    "
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "🎉 Google Forms integration setup completed successfully!"
        echo ""
        echo "Next steps:"
        echo "1. Start your backend server: npm run dev"
        echo "2. Go to admin panel: http://localhost:3001/admin.html"
        echo "3. Test the integration in the 'Google Forms' tab"
        echo "4. Use 'Get Field Mapping' to see how your form fields map to course data"
        echo "5. Use 'Fetch Data' to get responses from your Google Form"
        echo "6. Use 'Process Data' to create course changes for review"
    else
        echo ""
        echo "❌ Connection test failed. Please check your credentials."
        echo ""
        echo "Common issues:"
        echo "- Make sure the service account has access to the spreadsheet"
        echo "- Verify the spreadsheet ID is correct"
        echo "- Check that the private key is properly formatted"
    fi
else
    echo "⚠️  Node.js not found. Cannot test connection automatically."
    echo "Please start your server and test manually in the admin panel."
fi

echo ""
echo "📚 For detailed setup instructions, see backend/docs/GoogleFormIntegration.md"
