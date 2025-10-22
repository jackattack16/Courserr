const express = require('express');
const { body, validationResult } = require('express-validator');
const Course = require('../models/Course');
const Comment = require('../models/Comment');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
  try {
    const { subject, search, active } = req.query;
    
    let query = {};
    
    // Filter by subject
    if (subject) {
      query.subject = new RegExp(subject, 'i');
    }
    
    // Filter by active status
    if (active !== undefined) {
      query.isActive = active === 'true';
    }
    
    // Search functionality
    if (search) {
      query.$or = [
        { className: new RegExp(search, 'i') },
        { description: new RegExp(search, 'i') },
        { subject: new RegExp(search, 'i') },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }
    
    const courses = await Course.find(query)
      .populate('comments', 'text rating grade timeSpent difficulty submittedAt')
      .sort({ className: 1 });
    
    // Transform data to match frontend expectations
    const transformedCourses = courses.map(course => ({
      id: course._id,
      className: course.className,
      subject: course.subject,
      description: course.description,
      teacher: course.teacher,
      dualCredit: course.dualCredit,
      usualGrade: course.usualGrade,
      prerequisite: course.prerequisite,
      duration: course.duration,
      semesterOffered: course.semesterOffered,
      honorsAP: course.honorsAP,
      ratings: course.ratings,
      comments: course.comments,
      averageTimePerWeek: course.averageTimePerWeek,
      grades: course.grades,
      classDifficulty: course.classDifficulty,
      tags: course.tags,
      icon: course.icon,
      averageRating: course.averageRating,
      averageGrade: course.averageGrade,
      averageDifficulty: course.averageDifficulty,
      isActive: course.isActive,
      lastUpdated: course.lastUpdated
    }));
    
    res.json({
      success: true,
      count: transformedCourses.length,
      data: transformedCourses
    });
    
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch courses'
    });
  }
});

// Get single course by ID or name
router.get('/:identifier', async (req, res) => {
  try {
    const { identifier } = req.params;
    
    let course;
    
    // Try to find by ID first
    if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
      course = await Course.findById(identifier)
        .populate('comments', 'text rating grade timeSpent difficulty submittedAt');
    } else {
      // Find by class name
      course = await Course.findOne({ 
        className: new RegExp(`^${identifier}$`, 'i') 
      }).populate('comments', 'text rating grade timeSpent difficulty submittedAt');
    }
    
    if (!course) {
      return res.status(404).json({
        success: false,
        error: 'Course not found'
      });
    }
    
    res.json({
      success: true,
      data: course.toSummary()
    });
    
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch course'
    });
  }
});

// Create new course (admin only)
router.post('/', 
  auth,
  [
    body('className').notEmpty().withMessage('Class name is required'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('usualGrade').notEmpty().withMessage('Usual grade is required'),
    body('duration').isIn(['Semester', 'Year']).withMessage('Duration must be Semester or Year'),
    body('semesterOffered').isIn(['Both', 'Fall', 'Spring', 'Year-long']).withMessage('Invalid semester offered'),
    body('honorsAP').isIn(['honors', 'AP', 'none']).withMessage('Invalid honors/AP value')
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
      
      const courseData = req.body;
      courseData.createdBy = req.admin.email;
      
      const course = new Course(courseData);
      await course.save();
      
      res.status(201).json({
        success: true,
        data: course.toSummary()
      });
      
    } catch (error) {
      console.error('Error creating course:', error);
      
      if (error.code === 11000) {
        return res.status(400).json({
          success: false,
          error: 'Course with this name already exists'
        });
      }
      
      res.status(500).json({
        success: false,
        error: 'Failed to create course'
      });
    }
  }
);

// Update course (admin only)
router.put('/:id',
  auth,
  [
    body('className').optional().notEmpty().withMessage('Class name cannot be empty'),
    body('subject').optional().notEmpty().withMessage('Subject cannot be empty'),
    body('description').optional().notEmpty().withMessage('Description cannot be empty'),
    body('duration').optional().isIn(['Semester', 'Year']).withMessage('Duration must be Semester or Year'),
    body('semesterOffered').optional().isIn(['Both', 'Fall', 'Spring', 'Year-long']).withMessage('Invalid semester offered'),
    body('honorsAP').optional().isIn(['honors', 'AP', 'none']).withMessage('Invalid honors/AP value')
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
      
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({
          success: false,
          error: 'Course not found'
        });
      }
      
      const updatedCourse = await Course.findByIdAndUpdate(
        req.params.id,
        { ...req.body, lastUpdated: new Date() },
        { new: true, runValidators: true }
      );
      
      res.json({
        success: true,
        data: updatedCourse.toSummary()
      });
      
    } catch (error) {
      console.error('Error updating course:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to update course'
      });
    }
  }
);

// Add rating to course
router.post('/:id/ratings',
  [
    body('rating').isFloat({ min: 0, max: 5 }).withMessage('Rating must be between 0 and 5')
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
      
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({
          success: false,
          error: 'Course not found'
        });
      }
      
      await course.addRating(req.body.rating);
      
      res.json({
        success: true,
        message: 'Rating added successfully',
        averageRating: course.averageRating
      });
      
    } catch (error) {
      console.error('Error adding rating:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to add rating'
      });
    }
  }
);

// Get course statistics
router.get('/:id/stats', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('comments');
    
    if (!course) {
      return res.status(404).json({
        success: false,
        error: 'Course not found'
      });
    }
    
    const stats = {
      totalRatings: course.ratings.length,
      averageRating: course.averageRating,
      totalComments: course.comments.length,
      averageGrade: course.averageGrade,
      averageDifficulty: course.averageDifficulty,
      averageTimePerWeek: course.averageTimePerWeek.length > 0 
        ? course.averageTimePerWeek.reduce((a, b) => a + b, 0) / course.averageTimePerWeek.length 
        : 0,
      gradeDistribution: {},
      difficultyDistribution: {}
    };
    
    // Calculate grade distribution
    course.grades.forEach(grade => {
      stats.gradeDistribution[grade] = (stats.gradeDistribution[grade] || 0) + 1;
    });
    
    // Calculate difficulty distribution
    course.classDifficulty.forEach(difficulty => {
      stats.difficultyDistribution[difficulty] = (stats.difficultyDistribution[difficulty] || 0) + 1;
    });
    
    res.json({
      success: true,
      data: stats
    });
    
  } catch (error) {
    console.error('Error fetching course stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch course statistics'
    });
  }
});

module.exports = router;
