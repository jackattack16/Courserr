@echo off
echo 🔗 Setting up Google Forms Integration for Courserr...

REM Check if .env file exists
if not exist .env (
    echo ❌ .env file not found. Please run the main setup script first.
    pause
    exit /b 1
)

echo 📋 Google Forms Integration Setup
echo =================================
echo.
echo This script will help you configure your Google Form integration.
echo.

REM Check if Google credentials are already configured
findstr /C:"GOOGLE_SHEETS_SPREADSHEET_ID" .env >nul
if %errorlevel% equ 0 (
    findstr /C:"GOOGLE_SERVICE_ACCOUNT_EMAIL" .env >nul
    if %errorlevel% equ 0 (
        echo ✅ Google credentials appear to be configured in .env
        echo.
        set /p reconfigure="Do you want to reconfigure? (y/N): "
        if /i not "%reconfigure%"=="y" (
            echo Skipping configuration.
            pause
            exit /b 0
        )
    )
)

echo 📝 Please provide the following information:
echo.

REM Get spreadsheet ID
set /p spreadsheet_id="Google Sheets Spreadsheet ID (from URL): "
if "%spreadsheet_id%"=="" (
    echo ❌ Spreadsheet ID is required
    pause
    exit /b 1
)

REM Get service account email
set /p service_email="Service Account Email: "
if "%service_email%"=="" (
    echo ❌ Service account email is required
    pause
    exit /b 1
)

echo.
echo 📄 Please paste your private key (including BEGIN/END lines):
echo Press Enter when done, then type 'END' on a new line
echo.

REM Create a temporary file for private key input
set temp_key_file=%temp%\private_key_temp.txt
echo Please paste your private key below, then type 'END' on a new line: > %temp_key_file%
notepad %temp_key_file%

REM Read the private key from the file
set private_key=
for /f "delims=" %%i in (%temp_key_file%) do (
    if "%%i"=="END" goto :key_done
    set private_key=!private_key!%%i\n
)
:key_done

REM Clean up temp file
del %temp_key_file%

if "%private_key%"=="" (
    echo ❌ Private key is required
    pause
    exit /b 1
)

REM Update .env file
echo.
echo 🔧 Updating .env file...

REM Remove existing Google credentials
findstr /V "GOOGLE_SHEETS_SPREADSHEET_ID" .env > .env.tmp
findstr /V "GOOGLE_SERVICE_ACCOUNT_EMAIL" .env.tmp > .env.tmp2
findstr /V "GOOGLE_PRIVATE_KEY" .env.tmp2 > .env.tmp3
move .env.tmp3 .env
del .env.tmp .env.tmp2 2>nul

REM Add new credentials
echo. >> .env
echo # Google Forms Integration >> .env
echo GOOGLE_SHEETS_SPREADSHEET_ID=%spreadsheet_id% >> .env
echo GOOGLE_SERVICE_ACCOUNT_EMAIL=%service_email% >> .env
echo GOOGLE_PRIVATE_KEY="%private_key%" >> .env

echo ✅ Google credentials updated in .env file
echo.

echo 🧪 Testing Google Sheets connection...
node -e "require('dotenv').config(); const { google } = require('googleapis'); const auth = new google.auth.GoogleAuth({ credentials: { client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL, private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\\\n/g, '\\n'), }, scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'], }); const sheets = google.sheets({ version: 'v4', auth }); sheets.spreadsheets.get({ spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID, }).then(response => { console.log('✅ Connection successful!'); console.log('📊 Spreadsheet title:', response.data.properties.title); console.log('📋 Sheets:', response.data.sheets.map(s => s.properties.title).join(', ')); }).catch(error => { console.log('❌ Connection failed:', error.message); process.exit(1); });"

if %errorlevel% equ 0 (
    echo.
    echo 🎉 Google Forms integration setup completed successfully!
    echo.
    echo Next steps:
    echo 1. Start your backend server: npm run dev
    echo 2. Go to admin panel: http://localhost:3001/admin.html
    echo 3. Test the integration in the 'Google Forms' tab
    echo 4. Use 'Get Field Mapping' to see how your form fields map to course data
    echo 5. Use 'Fetch Data' to get responses from your Google Form
    echo 6. Use 'Process Data' to create course changes for review
) else (
    echo.
    echo ❌ Connection test failed. Please check your credentials.
    echo.
    echo Common issues:
    echo - Make sure the service account has access to the spreadsheet
    echo - Verify the spreadsheet ID is correct
    echo - Check that the private key is properly formatted
)

echo.
echo 📚 For detailed setup instructions, see backend/docs/GoogleFormIntegration.md
pause
