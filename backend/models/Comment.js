const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  // Comment content
  text: {
    type: String,
    required: true,
    maxlength: 1000
  },
  
  // Associated course
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  
  // Student feedback data
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  grade: {
    type: String,
    enum: ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'],
    required: true
  },
  timeSpent: {
    type: Number,
    min: 0,
    max: 50, // hours per week
    required: true
  },
  difficulty: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  
  // Student information (optional, for verification)
  studentGrade: {
    type: String,
    enum: ['9', '10', '11', '12', 'Graduate'],
    required: true
  },
  semesterTaken: {
    type: String,
    enum: ['Fall', 'Spring', 'Summer'],
    required: true
  },
  yearTaken: {
    type: Number,
    min: 2020,
    max: new Date().getFullYear() + 1
  },
  
  // Moderation
  isApproved: {
    type: Boolean,
    default: false
  },
  isFlagged: {
    type: Boolean,
    default: false
  },
  flaggedReason: {
    type: String,
    enum: ['inappropriate', 'spam', 'irrelevant', 'duplicate', 'other']
  },
  moderationNotes: {
    type: String,
    maxlength: 500
  },
  
  // Metadata
  submittedAt: {
    type: Date,
    default: Date.now
  },
  approvedAt: {
    type: Date
  },
  moderatedBy: {
    type: String,
    default: 'system'
  },
  
  // Anonymous submission tracking (for preventing spam)
  submissionHash: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Indexes
commentSchema.index({ courseId: 1 });
commentSchema.index({ isApproved: 1 });
commentSchema.index({ submittedAt: -1 });
commentSchema.index({ submissionHash: 1 });

// Pre-save middleware to generate submission hash
commentSchema.pre('save', function(next) {
  if (this.isNew) {
    const crypto = require('crypto');
    const hashInput = `${this.text}${this.courseId}${this.studentGrade}${Date.now()}`;
    this.submissionHash = crypto.createHash('md5').update(hashInput).digest('hex');
  }
  next();
});

// Method to approve comment
commentSchema.methods.approve = function(moderatorId) {
  this.isApproved = true;
  this.approvedAt = new Date();
  this.moderatedBy = moderatorId;
  return this.save();
};

// Method to flag comment
commentSchema.methods.flag = function(reason, notes, moderatorId) {
  this.isFlagged = true;
  this.flaggedReason = reason;
  this.moderationNotes = notes;
  this.moderatedBy = moderatorId;
  return this.save();
};

// Static method to get approved comments for a course
commentSchema.statics.getApprovedForCourse = function(courseId) {
  return this.find({
    courseId: courseId,
    isApproved: true,
    isFlagged: false
  }).sort({ submittedAt: -1 });
};

// Static method to get pending comments
commentSchema.statics.getPending = function() {
  return this.find({
    isApproved: false,
    isFlagged: false
  }).populate('courseId', 'className subject').sort({ submittedAt: -1 });
};

module.exports = mongoose.model('Comment', commentSchema);
