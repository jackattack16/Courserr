const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const Course = require('./models/Course');

// Connect to database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('📊 Connected to MongoDB');
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    process.exit(1);
  }
};

// Parse the JavaScript file to extract course data
const parseCourseData = () => {
  const filePath = path.join(__dirname, '../src/Javascript/ClassInstantiation.js');
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract course instantiations using regex
  const courseRegex = /const\s+(\w+)\s*=\s*new\s+Class\(\s*([\s\S]*?)\s*\);/g;
  const courses = [];
  let match;
  
  while ((match = courseRegex.exec(content)) !== null) {
    const varName = match[1];
    const params = match[2];
    
    // Parse the parameters
    const paramArray = [];
    let currentParam = '';
    let parenCount = 0;
    let bracketCount = 0;
    let inString = false;
    let stringChar = '';
    
    for (let i = 0; i < params.length; i++) {
      const char = params[i];
      
      if (!inString) {
        if (char === '"' || char === "'") {
          inString = true;
          stringChar = char;
          currentParam += char;
        } else if (char === '(') {
          parenCount++;
          currentParam += char;
        } else if (char === ')') {
          parenCount--;
          currentParam += char;
        } else if (char === '[') {
          bracketCount++;
          currentParam += char;
        } else if (char === ']') {
          bracketCount--;
          currentParam += char;
        } else if (char === ',' && parenCount === 0 && bracketCount === 0) {
          paramArray.push(currentParam.trim());
          currentParam = '';
        } else {
          currentParam += char;
        }
      } else {
        currentParam += char;
        if (char === stringChar && params[i-1] !== '\\') {
          inString = false;
        }
      }
    }
    
    if (currentParam.trim()) {
      paramArray.push(currentParam.trim());
    }
    
    // Parse each parameter
    const parseParam = (param) => {
      param = param.trim();
      
      // Handle arrays
      if (param.startsWith('[') && param.endsWith(']')) {
        const arrayContent = param.slice(1, -1);
        if (arrayContent.trim() === '') return [];
        
        const items = [];
        let currentItem = '';
        let inString = false;
        let stringChar = '';
        
        for (let i = 0; i < arrayContent.length; i++) {
          const char = arrayContent[i];
          
          if (!inString) {
            if (char === '"' || char === "'") {
              inString = true;
              stringChar = char;
              currentItem += char;
            } else if (char === ',') {
              items.push(parseParam(currentItem.trim()));
              currentItem = '';
            } else {
              currentItem += char;
            }
          } else {
            currentItem += char;
            if (char === stringChar && arrayContent[i-1] !== '\\') {
              inString = false;
            }
          }
        }
        
        if (currentItem.trim()) {
          items.push(parseParam(currentItem.trim()));
        }
        
        return items;
      }
      
      // Handle strings
      if ((param.startsWith('"') && param.endsWith('"')) || 
          (param.startsWith("'") && param.endsWith("'"))) {
        return param.slice(1, -1);
      }
      
      // Handle booleans
      if (param === 'true') return true;
      if (param === 'false') return false;
      
      // Handle numbers
      if (!isNaN(param)) return parseFloat(param);
      
      return param;
    };
    
    try {
      const parsedParams = paramArray.map(parseParam);
      
      if (parsedParams.length >= 18) {
        const courseData = {
          dualCredit: parsedParams[0],
          subject: parsedParams[1],
          usualGrade: parsedParams[2],
          prerequisite: parsedParams[3],
          duration: parsedParams[4],
          semesterOffered: parsedParams[5],
          honorsAP: parsedParams[6],
          description: parsedParams[7],
          ratings: parsedParams[8] || [],
          comments: [], // Will be populated separately
          averageTimePerWeek: parsedParams[10] || [],
          icon: parsedParams[11] || 'calculate',
          className: parsedParams[12],
          grades: parsedParams[14] || [],
          classDifficulty: parsedParams[15] || [],
          tags: parsedParams[16] || [],
          createdBy: 'migration_script'
        };
        
        courses.push(courseData);
      }
    } catch (error) {
      console.error(`Error parsing course ${varName}:`, error.message);
    }
  }
  
  return courses;
};

// Migrate courses to database
const migrateCourses = async () => {
  try {
    console.log('🔄 Starting course migration...');
    
    // Clear existing courses
    await Course.deleteMany({});
    console.log('🗑️  Cleared existing courses');
    
    // Parse course data
    const coursesData = parseCourseData();
    console.log(`📚 Found ${coursesData.length} courses to migrate`);
    
    // Insert courses
    const courses = await Course.insertMany(coursesData);
    console.log(`✅ Successfully migrated ${courses.length} courses`);
    
    // Display summary
    const subjects = [...new Set(courses.map(c => c.subject))];
    console.log('\n📊 Migration Summary:');
    console.log(`Total courses: ${courses.length}`);
    console.log(`Subjects: ${subjects.join(', ')}`);
    
    subjects.forEach(subject => {
      const count = courses.filter(c => c.subject === subject).length;
      console.log(`  ${subject}: ${count} courses`);
    });
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    throw error;
  }
};

// Main execution
const main = async () => {
  try {
    await connectDB();
    await migrateCourses();
    console.log('\n🎉 Migration completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('💥 Migration failed:', error);
    process.exit(1);
  }
};

// Run migration if this file is executed directly
if (require.main === module) {
  main();
}

module.exports = { migrateCourses, parseCourseData };
