const express = require('express');
const { body, validationResult } = require('express-validator');
const Comment = require('../models/Comment');
const Course = require('../models/Course');
const auth = require('../middleware/auth');

const router = express.Router();

// Get comments for a course
router.get('/course/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;
    const { approved, limit = 50, offset = 0 } = req.query;
    
    let query = { courseId };
    
    // Filter by approval status
    if (approved !== undefined) {
      query.isApproved = approved === 'true';
    } else {
      // Default to approved comments only for public access
      query.isApproved = true;
      query.isFlagged = false;
    }
    
    const comments = await Comment.find(query)
      .populate('courseId', 'className subject')
      .sort({ submittedAt: -1 })
      .limit(parseInt(limit))
      .skip(parseInt(offset));
    
    res.json({
      success: true,
      count: comments.length,
      data: comments
    });
    
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch comments'
    });
  }
});

// Submit new comment
router.post('/',
  [
    body('courseId').isMongoId().withMessage('Valid course ID is required'),
    body('text').isLength({ min: 10, max: 1000 }).withMessage('Comment must be between 10 and 1000 characters'),
    body('rating').isFloat({ min: 0, max: 5 }).withMessage('Rating must be between 0 and 5'),
    body('grade').isIn(['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F']).withMessage('Invalid grade'),
    body('timeSpent').isFloat({ min: 0, max: 50 }).withMessage('Time spent must be between 0 and 50 hours'),
    body('difficulty').isInt({ min: 1, max: 5 }).withMessage('Difficulty must be between 1 and 5'),
    body('studentGrade').isIn(['9', '10', '11', '12', 'Graduate']).withMessage('Invalid student grade'),
    body('semesterTaken').isIn(['Fall', 'Spring', 'Summer']).withMessage('Invalid semester'),
    body('yearTaken').isInt({ min: 2020, max: new Date().getFullYear() + 1 }).withMessage('Invalid year')
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
      
      // Verify course exists
      const course = await Course.findById(req.body.courseId);
      if (!course) {
        return res.status(404).json({
          success: false,
          error: 'Course not found'
        });
      }
      
      // Create comment
      const comment = new Comment(req.body);
      await comment.save();
      
      // Add comment to course
      await course.addComment(comment._id);
      
      res.status(201).json({
        success: true,
        message: 'Comment submitted successfully. It will be reviewed before being published.',
        data: {
          id: comment._id,
          submittedAt: comment.submittedAt
        }
      });
      
    } catch (error) {
      console.error('Error submitting comment:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to submit comment'
      });
    }
  }
);

// Get pending comments (admin only)
router.get('/pending', auth, async (req, res) => {
  try {
    const comments = await Comment.getPending();
    
    res.json({
      success: true,
      count: comments.length,
      data: comments
    });
    
  } catch (error) {
    console.error('Error fetching pending comments:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch pending comments'
    });
  }
});

// Approve comment (admin only)
router.post('/:id/approve', auth, async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({
        success: false,
        error: 'Comment not found'
      });
    }
    
    await comment.approve(req.admin.email);
    
    // Log admin action
    await req.admin.logAction('approve_comment', comment._id, {
      commentText: comment.text.substring(0, 100) + '...',
      courseId: comment.courseId
    });
    
    res.json({
      success: true,
      message: 'Comment approved successfully'
    });
    
  } catch (error) {
    console.error('Error approving comment:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to approve comment'
    });
  }
});

// Flag comment (admin only)
router.post('/:id/flag', 
  auth,
  [
    body('reason').isIn(['inappropriate', 'spam', 'irrelevant', 'duplicate', 'other']).withMessage('Invalid flag reason'),
    body('notes').optional().isLength({ max: 500 }).withMessage('Notes cannot exceed 500 characters')
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
      
      const comment = await Comment.findById(req.params.id);
      if (!comment) {
        return res.status(404).json({
          success: false,
          error: 'Comment not found'
        });
      }
      
      await comment.flag(req.body.reason, req.body.notes, req.admin.email);
      
      // Log admin action
      await req.admin.logAction('flag_comment', comment._id, {
        reason: req.body.reason,
        notes: req.body.notes,
        courseId: comment.courseId
      });
      
      res.json({
        success: true,
        message: 'Comment flagged successfully'
      });
      
    } catch (error) {
      console.error('Error flagging comment:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to flag comment'
      });
    }
  }
);

// Get comment statistics
router.get('/stats', auth, async (req, res) => {
  try {
    const totalComments = await Comment.countDocuments();
    const approvedComments = await Comment.countDocuments({ isApproved: true });
    const pendingComments = await Comment.countDocuments({ isApproved: false, isFlagged: false });
    const flaggedComments = await Comment.countDocuments({ isFlagged: true });
    
    // Comments by month (last 12 months)
    const monthlyStats = await Comment.aggregate([
      {
        $match: {
          submittedAt: {
            $gte: new Date(new Date().setFullYear(new Date().getFullYear() - 1))
          }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$submittedAt' },
            month: { $month: '$submittedAt' }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { '_id.year': 1, '_id.month': 1 }
      }
    ]);
    
    res.json({
      success: true,
      data: {
        total: totalComments,
        approved: approvedComments,
        pending: pendingComments,
        flagged: flaggedComments,
        monthlyStats
      }
    });
    
  } catch (error) {
    console.error('Error fetching comment stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch comment statistics'
    });
  }
});

module.exports = router;
