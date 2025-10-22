# Google Form Integration Setup Guide

This guide will help you connect your existing Google Form to the Courserr backend system.

## Step 1: Google Cloud Platform Setup

### 1.1 Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name your project (e.g., "Courserr Integration")
4. Click "Create"

### 1.2 Enable Google Sheets API
1. In your project, go to "APIs & Services" → "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

### 1.3 Create Service Account
1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Fill in the details:
   - Name: `courserr-integration`
   - Description: `Service account for Courserr Google Forms integration`
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

### 1.4 Generate Service Account Key
1. In the Credentials page, find your service account
2. Click on the service account email
3. Go to "Keys" tab
4. Click "Add Key" → "Create new key"
5. Choose "JSON" format
6. Download the JSON file

## Step 2: Configure Your Google Form

### 2.1 Set Up Form Responses
1. Open your Google Form
2. Click the "Responses" tab
3. Click the Google Sheets icon (📊) to create a linked spreadsheet
4. Choose "Create a new spreadsheet" or link to existing one

### 2.2 Share Spreadsheet with Service Account
1. Open the linked Google Sheet
2. Click "Share" button
3. Add the service account email (from the JSON file: `client_email`)
4. Give it "Editor" permissions
5. Click "Send"

## Step 3: Configure Backend Environment

### 3.1 Extract Credentials from JSON
From your downloaded JSON file, extract:
- `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `private_key` → `GOOGLE_PRIVATE_KEY`
- The spreadsheet ID from the URL → `GOOGLE_SHEETS_SPREADSHEET_ID`

### 3.2 Update .env File
```env
# Google Forms Integration
GOOGLE_SHEETS_API_KEY=your_api_key_here
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
```

## Step 4: Map Form Fields to Course Data

The system needs to know how your Google Form fields map to course properties. Here's the expected mapping:

### Required Fields
- **Course Name**: Maps to `className`
- **Subject**: Maps to `subject` 
- **Description**: Maps to `description`

### Optional Fields
- **Teacher**: Maps to `teacher`
- **Dual Credit**: Maps to `dualCredit` (Yes/No → true/false)
- **Grade Level**: Maps to `usualGrade`
- **Prerequisites**: Maps to `prerequisite`
- **Duration**: Maps to `duration` (Semester/Year)
- **Semester Offered**: Maps to `semesterOffered`
- **Honors/AP**: Maps to `honorsAP`
- **Tags**: Maps to `tags` (comma-separated)
- **Icon**: Maps to `icon`

## Step 5: Test the Integration

### 5.1 Test Connection
1. Start your backend server: `npm run dev`
2. Go to admin panel: `http://localhost:3001/admin.html`
3. Login with your admin credentials
4. Go to "Google Forms" tab
5. Click "Test Connection"

### 5.2 Fetch and Process Data
1. Click "Fetch Data" to get responses from your form
2. Review the data mapping
3. Click "Process Data" to create course changes
4. Go to "Course Changes" tab to approve/reject changes

## Step 6: Customize Field Mapping (if needed)

If your Google Form has different field names, you can customize the mapping by editing the backend code.

### 6.1 Update Field Mapping
Edit `backend/routes/googleForms.js` and modify the field mapping section:

```javascript
// Map Google Form fields to our course schema
switch (header.toLowerCase()) {
  case 'course name':
  case 'class name':
  case 'your_custom_field_name':  // Add your custom field name
    courseData.className = value;
    break;
  // ... other mappings
}
```

## Troubleshooting

### Common Issues

1. **"Permission denied" error**
   - Ensure the service account email has Editor access to the spreadsheet
   - Check that the spreadsheet ID is correct

2. **"API not enabled" error**
   - Verify Google Sheets API is enabled in your Google Cloud project
   - Check that the service account has the correct permissions

3. **"Invalid credentials" error**
   - Verify the private key is correctly formatted in .env
   - Ensure the service account email matches the JSON file

4. **"Spreadsheet not found" error**
   - Check the spreadsheet ID in the URL
   - Ensure the spreadsheet is shared with the service account

### Debug Steps

1. Check the browser console for detailed error messages
2. Verify all environment variables are set correctly
3. Test the Google Sheets API connection manually
4. Check the admin panel logs for specific error details

## Security Notes

- Never commit the service account JSON file to version control
- Keep your .env file secure and don't share it
- Regularly rotate your service account keys
- Use least-privilege access (only give necessary permissions)

## Next Steps

Once your Google Form is connected:

1. **Set up automated processing**: You can set up a cron job or webhook to automatically fetch new form responses
2. **Customize the approval workflow**: Modify the admin panel to match your specific needs
3. **Add validation rules**: Implement additional validation for form data
4. **Set up notifications**: Add email notifications when new submissions arrive

## Support

If you encounter issues:
1. Check the console logs in your browser
2. Review the backend server logs
3. Verify your Google Cloud setup
4. Test with a simple form first before using your full form
