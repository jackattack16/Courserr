// API Configuration
const API_BASE_URL = 'http://localhost:3001/api';

// Global variables
let courseMap = new Map();
let coursesLoaded = false;

// Utility function to make API calls
async function apiCall(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'API call failed');
    }

    return data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}

// Load all courses from API
async function loadCoursesFromAPI() {
  try {
    console.log('🔄 Loading courses from API...');
    
    const response = await apiCall('/courses');
    
    if (response.success && response.data) {
      // Clear existing courseMap
      courseMap.clear();
      
      // Populate courseMap with API data
      response.data.forEach(courseData => {
        // Create a Course-like object that matches the existing interface
        const course = {
          _id: courseData.id,
          className: courseData.className,
          subject: courseData.subject,
          description: courseData.description,
          teacher: courseData.teacher,
          dualCredit: courseData.dualCredit,
          usualGrade: courseData.usualGrade,
          prerequisite: courseData.prerequisite,
          duration: courseData.duration,
          semesterOffered: courseData.semesterOffered,
          honorsAP: courseData.honorsAP,
          ratings: courseData.ratings || [],
          comments: courseData.comments || [],
          averageTimePerWeek: courseData.averageTimePerWeek || [],
          grades: courseData.grades || [],
          classDifficulty: courseData.classDifficulty || [],
          tags: courseData.tags || [],
          icon: courseData.icon || 'calculate',
          averageRating: courseData.averageRating || 0,
          averageGrade: courseData.averageGrade || 'B',
          averageDifficulty: courseData.averageDifficulty || 3,
          isActive: courseData.isActive,
          lastUpdated: courseData.lastUpdated,
          
          // Methods to maintain compatibility with existing code
          getClassName: () => this.className,
          getSubject: () => this.subject,
          getDescription: () => this.description,
          getTeacher: () => this.teacher,
          getDualCredit: () => this.dualCredit,
          getUsualGrade: () => this.usualGrade,
          getPrerequisite: () => this.prerequisite,
          getDuration: () => this.duration,
          getSemesterOffered: () => this.semesterOffered,
          getHonorsAP: () => this.honorsAP,
          getRatings: () => this.ratings,
          getComments: () => this.comments,
          getAverageTimePerWeek: () => this.averageTimePerWeek,
          getGrades: () => this.grades,
          getClassDifficulty: () => this.classDifficulty,
          getTags: () => this.tags,
          getIcon: () => this.icon,
          getAverageRating: () => this.averageRating,
          getAverageGrade: () => this.averageGrade,
          getAverageDifficulty: () => this.averageDifficulty,
          getIsActive: () => this.isActive,
          getLastUpdated: () => this.lastUpdated
        };
        
        // Bind methods to the course object
        Object.keys(course).forEach(key => {
          if (typeof course[key] === 'function') {
            course[key] = course[key].bind(course);
          }
        });
        
        courseMap.set(courseData.className, course);
      });
      
      coursesLoaded = true;
      console.log(`✅ Loaded ${courseMap.size} courses from API`);
      
      // Trigger any pending operations that were waiting for courses to load
      if (window.onCoursesLoaded) {
        window.onCoursesLoaded();
      }
      
      return courseMap;
    } else {
      throw new Error('Invalid response from API');
    }
  } catch (error) {
    console.error('❌ Failed to load courses from API:', error);
    
    // Fallback to static data if API fails
    console.log('🔄 Falling back to static course data...');
    return loadStaticCourses();
  }
}

// Fallback function to load static courses (original implementation)
function loadStaticCourses() {
  console.log('📚 Loading static course data as fallback...');
  
  // This would contain the original course instantiation code
  // For now, we'll create a minimal fallback
  const fallbackCourse = {
    className: 'Sample Course',
    subject: 'General',
    description: 'This is a fallback course loaded when the API is unavailable.',
    teacher: 'TBD',
    dualCredit: false,
    usualGrade: '9,10,11,12',
    prerequisite: 'None',
    duration: 'Semester',
    semesterOffered: 'Both',
    honorsAP: 'none',
    ratings: [4, 3, 5],
    comments: ['Great course!', 'Very informative.'],
    averageTimePerWeek: [2, 3, 4],
    grades: ['A', 'B+', 'A-'],
    classDifficulty: [3, 4, 2],
    tags: ['Academic', 'Core Subject'],
    icon: 'calculate',
    averageRating: 4,
    averageGrade: 'A-',
    averageDifficulty: 3,
    isActive: true,
    lastUpdated: new Date(),
    
    getClassName: function() { return this.className; },
    getSubject: function() { return this.subject; },
    getDescription: function() { return this.description; },
    getTeacher: function() { return this.teacher; },
    getDualCredit: function() { return this.dualCredit; },
    getUsualGrade: function() { return this.usualGrade; },
    getPrerequisite: function() { return this.prerequisite; },
    getDuration: function() { return this.duration; },
    getSemesterOffered: function() { return this.semesterOffered; },
    getHonorsAP: function() { return this.honorsAP; },
    getRatings: function() { return this.ratings; },
    getComments: function() { return this.comments; },
    getAverageTimePerWeek: function() { return this.averageTimePerWeek; },
    getGrades: function() { return this.grades; },
    getClassDifficulty: function() { return this.classDifficulty; },
    getTags: function() { return this.tags; },
    getIcon: function() { return this.icon; },
    getAverageRating: function() { return this.averageRating; },
    getAverageGrade: function() { return this.averageGrade; },
    getAverageDifficulty: function() { return this.averageDifficulty; },
    getIsActive: function() { return this.isActive; },
    getLastUpdated: function() { return this.lastUpdated; }
  };
  
  courseMap.set('Sample Course', fallbackCourse);
  coursesLoaded = true;
  
  return courseMap;
}

// Submit a new comment
async function submitComment(courseId, commentData) {
  try {
    const response = await apiCall('/comments', {
      method: 'POST',
      body: JSON.stringify({
        courseId: courseId,
        text: commentData.text,
        rating: commentData.rating,
        grade: commentData.grade,
        timeSpent: commentData.timeSpent,
        difficulty: commentData.difficulty,
        studentGrade: commentData.studentGrade,
        semesterTaken: commentData.semesterTaken,
        yearTaken: commentData.yearTaken
      })
    });
    
    if (response.success) {
      console.log('✅ Comment submitted successfully');
      return response;
    } else {
      throw new Error(response.error || 'Failed to submit comment');
    }
  } catch (error) {
    console.error('❌ Failed to submit comment:', error);
    throw error;
  }
}

// Get course by ID or name
async function getCourseByIdentifier(identifier) {
  try {
    const response = await apiCall(`/courses/${identifier}`);
    
    if (response.success && response.data) {
      return response.data;
    } else {
      throw new Error('Course not found');
    }
  } catch (error) {
    console.error('❌ Failed to get course:', error);
    throw error;
  }
}

// Get course statistics
async function getCourseStats(courseId) {
  try {
    const response = await apiCall(`/courses/${courseId}/stats`);
    
    if (response.success && response.data) {
      return response.data;
    } else {
      throw new Error('Failed to get course statistics');
    }
  } catch (error) {
    console.error('❌ Failed to get course stats:', error);
    throw error;
  }
}

// Initialize courses when the page loads
document.addEventListener('DOMContentLoaded', async () => {
  console.log('🚀 Initializing Courserr with API integration...');
  
  try {
    await loadCoursesFromAPI();
    console.log('✅ Courses loaded successfully');
  } catch (error) {
    console.error('❌ Failed to initialize courses:', error);
  }
});

// Export functions for use in other scripts
window.CourserrAPI = {
  loadCoursesFromAPI,
  submitComment,
  getCourseByIdentifier,
  getCourseStats,
  courseMap: () => courseMap,
  coursesLoaded: () => coursesLoaded
};

// Make courseMap available globally for backward compatibility
window.courseMap = courseMap;
