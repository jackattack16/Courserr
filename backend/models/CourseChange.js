const mongoose = require('mongoose');

const courseChangeSchema = new mongoose.Schema({
  // Course being changed
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  
  // Change type
  changeType: {
    type: String,
    enum: ['create', 'update', 'delete'],
    required: true
  },
  
  // Change data
  changes: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  
  // Original data (for updates/deletes)
  originalData: {
    type: mongoose.Schema.Types.Mixed
  },
  
  // Source of change
  source: {
    type: String,
    enum: ['google_forms', 'admin', 'api', 'manual'],
    required: true
  },
  
  // Google Forms specific data
  googleFormsData: {
    submissionId: String,
    timestamp: Date,
    formData: mongoose.Schema.Types.Mixed
  },
  
  // Approval workflow
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  
  // Review information
  reviewedBy: {
    type: String,
    ref: 'Admin'
  },
  reviewedAt: {
    type: Date
  },
  reviewNotes: {
    type: String,
    maxlength: 1000
  },
  rejectionReason: {
    type: String,
    enum: ['inaccurate', 'inappropriate', 'duplicate', 'incomplete', 'other']
  },
  
  // Priority and urgency
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  
  // Metadata
  submittedAt: {
    type: Date,
    default: Date.now
  },
  submittedBy: {
    type: String,
    default: 'system'
  }
}, {
  timestamps: true
});

// Indexes
courseChangeSchema.index({ courseId: 1 });
courseChangeSchema.index({ status: 1 });
courseChangeSchema.index({ submittedAt: -1 });
courseChangeSchema.index({ priority: 1 });

// Method to approve change
courseChangeSchema.methods.approve = function(reviewerId, notes) {
  this.status = 'approved';
  this.reviewedBy = reviewerId;
  this.reviewedAt = new Date();
  this.reviewNotes = notes;
  return this.save();
};

// Method to reject change
courseChangeSchema.methods.reject = function(reviewerId, reason, notes) {
  this.status = 'rejected';
  this.reviewedBy = reviewerId;
  this.reviewedAt = new Date();
  this.rejectionReason = reason;
  this.reviewNotes = notes;
  return this.save();
};

// Static method to get pending changes
courseChangeSchema.statics.getPending = function() {
  return this.find({ status: 'pending' })
    .populate('courseId', 'className subject')
    .sort({ priority: -1, submittedAt: -1 });
};

// Static method to get changes by course
courseChangeSchema.statics.getByCourse = function(courseId) {
  return this.find({ courseId: courseId })
    .sort({ submittedAt: -1 });
};

module.exports = mongoose.model('CourseChange', courseChangeSchema);
