const express = require('express');
const { body, validationResult } = require('express-validator');
const { google } = require('googleapis');
const Course = require('../models/Course');
const CourseChange = require('../models/CourseChange');
const auth = require('../middleware/auth');

const router = express.Router();

// Field mapping configuration - customize this based on your Google Form
const FIELD_MAPPING = {
  // Course identification
  'course name': 'className',
  'class name': 'className',
  'course title': 'className',
  'name': 'className',
  
  // Subject/Department
  'subject': 'subject',
  'department': 'subject',
  'discipline': 'subject',
  'area': 'subject',
  
  // Description
  'description': 'description',
  'course description': 'description',
  'overview': 'description',
  'summary': 'description',
  
  // Teacher/Instructor
  'teacher': 'teacher',
  'instructor': 'teacher',
  'professor': 'teacher',
  'taught by': 'teacher',
  
  // Course details
  'dual credit': 'dualCredit',
  'dual credit course': 'dualCredit',
  'college credit': 'dualCredit',
  
  'grade level': 'usualGrade',
  'grade levels': 'usualGrade',
  'target grade': 'usualGrade',
  'grades': 'usualGrade',
  
  'prerequisite': 'prerequisite',
  'prerequisites': 'prerequisite',
  'required courses': 'prerequisite',
  'prior courses': 'prerequisite',
  
  'duration': 'duration',
  'length': 'duration',
  'term length': 'duration',
  
  'semester offered': 'semesterOffered',
  'when offered': 'semesterOffered',
  'availability': 'semesterOffered',
  'schedule': 'semesterOffered',
  
  'honors/ap': 'honorsAP',
  'honors ap': 'honorsAP',
  'level': 'honorsAP',
  'course level': 'honorsAP',
  
  'tags': 'tags',
  'keywords': 'tags',
  'characteristics': 'tags',
  'features': 'tags',
  
  'icon': 'icon',
  'symbol': 'icon',
  'emoji': 'icon'
};

// Initialize Google Sheets API
const getGoogleSheets = () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  return google.sheets({ version: 'v4', auth });
};

// Helper function to normalize field names
const normalizeFieldName = (fieldName) => {
  return fieldName.toLowerCase().trim().replace(/[^a-z0-9\s]/g, '');
};

// Helper function to map form data to course schema
const mapFormDataToCourse = (headers, row) => {
  const courseData = {};
  
  headers.forEach((header, index) => {
    const value = row[index] || '';
    const normalizedHeader = normalizeFieldName(header);
    
    // Find matching field in our mapping
    const mappedField = FIELD_MAPPING[normalizedHeader];
    
    if (mappedField) {
      switch (mappedField) {
        case 'className':
        case 'subject':
        case 'description':
        case 'teacher':
        case 'prerequisite':
        case 'duration':
        case 'semesterOffered':
        case 'honorsAP':
        case 'icon':
          courseData[mappedField] = value.trim();
          break;
          
        case 'dualCredit':
          const dualCreditValue = value.toLowerCase().trim();
          courseData[mappedField] = dualCreditValue === 'yes' || 
                                   dualCreditValue === 'true' || 
                                   dualCreditValue === '1' ||
                                   dualCreditValue === 'y';
          break;
          
        case 'usualGrade':
          courseData[mappedField] = value.trim();
          break;
          
        case 'tags':
          if (value.trim()) {
            courseData[mappedField] = value.split(',').map(tag => tag.trim()).filter(tag => tag);
          } else {
            courseData[mappedField] = [];
          }
          break;
      }
    }
  });
  
  // Set defaults for required fields
  if (!courseData.className) {
    courseData.className = 'Unnamed Course';
  }
  if (!courseData.subject) {
    courseData.subject = 'General';
  }
  if (!courseData.description) {
    courseData.description = 'No description provided.';
  }
  if (!courseData.prerequisite) {
    courseData.prerequisite = 'None';
  }
  if (!courseData.duration) {
    courseData.duration = 'Semester';
  }
  if (!courseData.semesterOffered) {
    courseData.semesterOffered = 'Both';
  }
  if (!courseData.honorsAP) {
    courseData.honorsAP = 'none';
  }
  if (!courseData.tags) {
    courseData.tags = [];
  }
  if (!courseData.icon) {
    courseData.icon = 'calculate';
  }
  
  return courseData;
};

// Fetch data from Google Sheets with flexible field mapping
router.get('/fetch', auth, async (req, res) => {
  try {
    const sheets = getGoogleSheets();
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    
    if (!spreadsheetId) {
      return res.status(400).json({
        success: false,
        error: 'Google Sheets spreadsheet ID not configured'
      });
    }
    
    // Get the first sheet (you can modify this to target specific sheets)
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'A:Z', // Adjust range as needed
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return res.json({
        success: true,
        message: 'No data found in spreadsheet',
        data: []
      });
    }

    // Assume first row is headers
    const headers = rows[0];
    const dataRows = rows.slice(1);

    console.log('📊 Headers found:', headers);
    console.log('📊 Data rows:', dataRows.length);

    // Transform data to course objects using flexible mapping
    const courses = dataRows.map((row, index) => {
      const courseData = mapFormDataToCourse(headers, row);
      
      return {
        ...courseData,
        source: 'google_forms',
        submissionId: `row_${index + 2}`, // +2 because we skip header and 0-index
        timestamp: new Date(),
        originalRowData: row // Keep original data for debugging
      };
    });

    res.json({
      success: true,
      count: courses.length,
      headers: headers,
      fieldMapping: FIELD_MAPPING,
      data: courses
    });

  } catch (error) {
    console.error('Error fetching from Google Sheets:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch data from Google Sheets',
      details: error.message
    });
  }
});

// Get field mapping suggestions based on spreadsheet headers
router.get('/mapping-suggestions', auth, async (req, res) => {
  try {
    const sheets = getGoogleSheets();
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'A1:Z1', // Just get headers
    });

    const headers = response.data.values?.[0] || [];
    
    // Generate mapping suggestions
    const suggestions = headers.map(header => {
      const normalizedHeader = normalizeFieldName(header);
      const suggestedField = FIELD_MAPPING[normalizedHeader];
      
      return {
        originalHeader: header,
        normalizedHeader: normalizedHeader,
        suggestedField: suggestedField,
        isMapped: !!suggestedField
      };
    });

    res.json({
      success: true,
      headers: headers,
      suggestions: suggestions,
      unmappedFields: suggestions.filter(s => !s.isMapped)
    });

  } catch (error) {
    console.error('Error getting mapping suggestions:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get mapping suggestions',
      details: error.message
    });
  }
});

// Process Google Forms data and create course changes
router.post('/process', 
  auth,
  [
    body('courses').isArray().withMessage('Courses must be an array'),
    body('courses.*.className').notEmpty().withMessage('Class name is required'),
    body('courses.*.subject').notEmpty().withMessage('Subject is required'),
    body('courses.*.description').notEmpty().withMessage('Description is required')
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const { courses } = req.body;
      const processedChanges = [];

      for (const courseData of courses) {
        try {
          // Check if course already exists
          const existingCourse = await Course.findOne({ 
            className: new RegExp(`^${courseData.className}$`, 'i') 
          });

          let changeType;
          let originalData = null;

          if (existingCourse) {
            // Update existing course
            changeType = 'update';
            originalData = existingCourse.toObject();
            
            // Create course change record
            const courseChange = new CourseChange({
              courseId: existingCourse._id,
              changeType,
              changes: courseData,
              originalData,
              source: 'google_forms',
              googleFormsData: {
                submissionId: courseData.submissionId,
                timestamp: courseData.timestamp,
                formData: courseData
              },
              submittedBy: req.admin.email
            });

            await courseChange.save();
            processedChanges.push(courseChange);

          } else {
            // Create new course
            changeType = 'create';
            
            // Create course change record
            const courseChange = new CourseChange({
              changeType,
              changes: courseData,
              source: 'google_forms',
              googleFormsData: {
                submissionId: courseData.submissionId,
                timestamp: courseData.timestamp,
                formData: courseData
              },
              submittedBy: req.admin.email
            });

            await courseChange.save();
            processedChanges.push(courseChange);
          }

        } catch (error) {
          console.error(`Error processing course ${courseData.className}:`, error);
          // Continue processing other courses
        }
      }

      // Log admin action
      await req.admin.logAction('process_google_forms', 'batch', {
        coursesProcessed: courses.length,
        changesCreated: processedChanges.length
      });

      res.json({
        success: true,
        message: `${processedChanges.length} course changes created and queued for review`,
        data: {
          changesCreated: processedChanges.length,
          changes: processedChanges.map(change => ({
            id: change._id,
            changeType: change.changeType,
            className: change.changes.className,
            status: change.status
          }))
        }
      });

    } catch (error) {
      console.error('Error processing Google Forms data:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to process Google Forms data'
      });
    }
  }
);

// Get Google Forms integration status
router.get('/status', auth, async (req, res) => {
  try {
    const pendingChanges = await CourseChange.countDocuments({ 
      source: 'google_forms', 
      status: 'pending' 
    });
    
    const recentChanges = await CourseChange.find({ 
      source: 'google_forms' 
    })
    .sort({ submittedAt: -1 })
    .limit(10)
    .populate('courseId', 'className subject');

    res.json({
      success: true,
      data: {
        pendingChanges,
        recentChanges,
        isConfigured: !!(process.env.GOOGLE_SHEETS_SPREADSHEET_ID && 
                        process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL),
        fieldMapping: FIELD_MAPPING
      }
    });

  } catch (error) {
    console.error('Error fetching Google Forms status:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch Google Forms status'
    });
  }
});

// Test Google Sheets connection
router.get('/test', auth, async (req, res) => {
  try {
    const sheets = getGoogleSheets();
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    
    if (!spreadsheetId) {
      return res.status(400).json({
        success: false,
        error: 'Google Sheets spreadsheet ID not configured in environment variables'
      });
    }
    
    // Try to get spreadsheet metadata
    const response = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    res.json({
      success: true,
      message: 'Google Sheets connection successful',
      data: {
        title: response.data.properties.title,
        sheets: response.data.sheets.map(sheet => ({
          title: sheet.properties.title,
          sheetId: sheet.properties.sheetId
        })),
        spreadsheetId: spreadsheetId
      }
    });

  } catch (error) {
    console.error('Google Sheets connection test failed:', error);
    res.status(500).json({
      success: false,
      error: 'Google Sheets connection failed',
      details: error.message
    });
  }
});

module.exports = router;