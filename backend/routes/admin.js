const express = require('express');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const CourseChange = require('../models/CourseChange');
const Comment = require('../models/Comment');
const Course = require('../models/Course');
const auth = require('../middleware/auth');

const router = express.Router();

// Admin login
router.post('/login',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
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

      const { email, password } = req.body;

      // Find admin
      const admin = await Admin.findOne({ email: email.toLowerCase() });
      if (!admin) {
        return res.status(401).json({
          success: false,
          error: 'Invalid credentials'
        });
      }

      // Check if account is locked
      if (admin.isLocked) {
        return res.status(423).json({
          success: false,
          error: 'Account is temporarily locked due to too many failed login attempts'
        });
      }

      // Check password
      const isMatch = await admin.comparePassword(password);
      if (!isMatch) {
        await admin.incLoginAttempts();
        return res.status(401).json({
          success: false,
          error: 'Invalid credentials'
        });
      }

      // Reset login attempts on successful login
      await admin.resetLoginAttempts();
      admin.lastLogin = new Date();
      await admin.save();

      // Generate JWT token
      const token = jwt.sign(
        { 
          adminId: admin._id, 
          email: admin.email, 
          role: admin.role 
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
      );

      res.json({
        success: true,
        message: 'Login successful',
        data: {
          token,
          admin: {
            id: admin._id,
            email: admin.email,
            name: admin.name,
            role: admin.role,
            permissions: admin.permissions,
            lastLogin: admin.lastLogin
          }
        }
      });

    } catch (error) {
      console.error('Admin login error:', error);
      res.status(500).json({
        success: false,
        error: 'Login failed'
      });
    }
  }
);

// Get admin profile
router.get('/profile', auth, async (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        id: req.admin._id,
        email: req.admin.email,
        name: req.admin.name,
        role: req.admin.role,
        permissions: req.admin.permissions,
        lastLogin: req.admin.lastLogin,
        isActive: req.admin.isActive
      }
    });
  } catch (error) {
    console.error('Error fetching admin profile:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch profile'
    });
  }
});

// Get dashboard statistics
router.get('/dashboard', auth, async (req, res) => {
  try {
    const [
      totalCourses,
      activeCourses,
      pendingChanges,
      totalComments,
      pendingComments,
      flaggedComments,
      recentChanges,
      recentComments
    ] = await Promise.all([
      Course.countDocuments(),
      Course.countDocuments({ isActive: true }),
      CourseChange.countDocuments({ status: 'pending' }),
      Comment.countDocuments(),
      Comment.countDocuments({ isApproved: false, isFlagged: false }),
      Comment.countDocuments({ isFlagged: true }),
      CourseChange.find({ status: 'pending' })
        .populate('courseId', 'className subject')
        .sort({ submittedAt: -1 })
        .limit(5),
      Comment.find({ isApproved: false, isFlagged: false })
        .populate('courseId', 'className subject')
        .sort({ submittedAt: -1 })
        .limit(5)
    ]);

    res.json({
      success: true,
      data: {
        courses: {
          total: totalCourses,
          active: activeCourses,
          pendingChanges
        },
        comments: {
          total: totalComments,
          pending: pendingComments,
          flagged: flaggedComments
        },
        recentChanges,
        recentComments
      }
    });

  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch dashboard data'
    });
  }
});

// Get pending course changes
router.get('/changes/pending', auth, async (req, res) => {
  try {
    const changes = await CourseChange.getPending();
    
    res.json({
      success: true,
      count: changes.length,
      data: changes
    });

  } catch (error) {
    console.error('Error fetching pending changes:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch pending changes'
    });
  }
});

// Approve course change
router.post('/changes/:id/approve',
  auth,
  [
    body('notes').optional().isLength({ max: 1000 }).withMessage('Notes cannot exceed 1000 characters')
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

      const change = await CourseChange.findById(req.params.id);
      if (!change) {
        return res.status(404).json({
          success: false,
          error: 'Change not found'
        });
      }

      // Apply the change
      if (change.changeType === 'create') {
        const course = new Course(change.changes);
        course.createdBy = req.admin.email;
        await course.save();
        change.courseId = course._id;
      } else if (change.changeType === 'update') {
        await Course.findByIdAndUpdate(
          change.courseId,
          { ...change.changes, lastUpdated: new Date() },
          { new: true, runValidators: true }
        );
      } else if (change.changeType === 'delete') {
        await Course.findByIdAndUpdate(
          change.courseId,
          { isActive: false, lastUpdated: new Date() },
          { new: true }
        );
      }

      // Approve the change
      await change.approve(req.admin.email, req.body.notes);

      // Log admin action
      await req.admin.logAction('approve_change', change._id, {
        changeType: change.changeType,
        courseId: change.courseId,
        notes: req.body.notes
      });

      res.json({
        success: true,
        message: 'Change approved and applied successfully'
      });

    } catch (error) {
      console.error('Error approving change:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to approve change'
      });
    }
  }
);

// Reject course change
router.post('/changes/:id/reject',
  auth,
  [
    body('reason').isIn(['inaccurate', 'inappropriate', 'duplicate', 'incomplete', 'other']).withMessage('Invalid rejection reason'),
    body('notes').optional().isLength({ max: 1000 }).withMessage('Notes cannot exceed 1000 characters')
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

      const change = await CourseChange.findById(req.params.id);
      if (!change) {
        return res.status(404).json({
          success: false,
          error: 'Change not found'
        });
      }

      await change.reject(req.admin.email, req.body.reason, req.body.notes);

      // Log admin action
      await req.admin.logAction('reject_change', change._id, {
        reason: req.body.reason,
        notes: req.body.notes,
        courseId: change.courseId
      });

      res.json({
        success: true,
        message: 'Change rejected successfully'
      });

    } catch (error) {
      console.error('Error rejecting change:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to reject change'
      });
    }
  }
);

// Get all admins (super admin only)
router.get('/admins', auth, async (req, res) => {
  try {
    if (req.admin.role !== 'super_admin') {
      return res.status(403).json({
        success: false,
        error: 'Insufficient permissions'
      });
    }

    const admins = await Admin.find({}, '-password').sort({ createdAt: -1 });

    res.json({
      success: true,
      data: admins
    });

  } catch (error) {
    console.error('Error fetching admins:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch admins'
    });
  }
});

// Create new admin (super admin only)
router.post('/admins',
  auth,
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
    body('name').notEmpty().withMessage('Name is required'),
    body('role').isIn(['admin', 'moderator']).withMessage('Invalid role')
  ],
  async (req, res) => {
    try {
      if (req.admin.role !== 'super_admin') {
        return res.status(403).json({
          success: false,
          error: 'Insufficient permissions'
        });
      }

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const { email, password, name, role, permissions } = req.body;

      // Check if admin already exists
      const existingAdmin = await Admin.findOne({ email: email.toLowerCase() });
      if (existingAdmin) {
        return res.status(400).json({
          success: false,
          error: 'Admin with this email already exists'
        });
      }

      const admin = new Admin({
        email: email.toLowerCase(),
        password,
        name,
        role,
        permissions: permissions || {}
      });

      await admin.save();

      // Log admin action
      await req.admin.logAction('create_admin', admin._id, {
        newAdminEmail: admin.email,
        newAdminRole: admin.role
      });

      res.status(201).json({
        success: true,
        message: 'Admin created successfully',
        data: {
          id: admin._id,
          email: admin.email,
          name: admin.name,
          role: admin.role,
          permissions: admin.permissions
        }
      });

    } catch (error) {
      console.error('Error creating admin:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to create admin'
      });
    }
  }
);

module.exports = router;
