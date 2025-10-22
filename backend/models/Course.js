const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  // Basic course information
  className: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  teacher: {
    type: String,
    default: 'TBD'
  },
  
  // Course details
  dualCredit: {
    type: Boolean,
    default: false
  },
  usualGrade: {
    type: String,
    required: true
  },
  prerequisite: {
    type: String,
    default: 'None'
  },
  duration: {
    type: String,
    enum: ['Semester', 'Year'],
    required: true
  },
  semesterOffered: {
    type: String,
    enum: ['Both', 'Fall', 'Spring', 'Year-long'],
    required: true
  },
  honorsAP: {
    type: String,
    enum: ['honors', 'AP', 'none'],
    default: 'none'
  },
  
  // Student feedback data
  ratings: [{
    type: Number,
    min: 0,
    max: 5
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  averageTimePerWeek: [{
    type: Number,
    min: 0
  }],
  grades: [{
    type: String,
    enum: ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F']
  }],
  classDifficulty: [{
    type: Number,
    min: 1,
    max: 5
  }],
  
  // Course characteristics
  tags: [{
    type: String,
    trim: true
  }],
  icon: {
    type: String,
    default: 'calculate'
  },
  
  // Calculated fields
  averageRating: {
    type: Number,
    default: 0
  },
  averageGrade: {
    type: String,
    default: 'B'
  },
  averageDifficulty: {
    type: Number,
    default: 3
  },
  
  // Metadata
  isActive: {
    type: Boolean,
    default: true
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: String,
    default: 'system'
  },
  
  // Approval workflow
  pendingChanges: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CourseChange'
  },
  approvalStatus: {
    type: String,
    enum: ['approved', 'pending', 'rejected'],
    default: 'approved'
  }
}, {
  timestamps: true
});

// Indexes for better performance
courseSchema.index({ className: 1 });
courseSchema.index({ subject: 1 });
courseSchema.index({ isActive: 1 });
courseSchema.index({ approvalStatus: 1 });

// Virtual for average rating calculation
courseSchema.virtual('calculatedAverageRating').get(function() {
  if (this.ratings.length === 0) return 0;
  const sum = this.ratings.reduce((acc, rating) => acc + rating, 0);
  return Math.round((sum / this.ratings.length) * 10) / 10;
});

// Virtual for average grade calculation
courseSchema.virtual('calculatedAverageGrade').get(function() {
  if (!this.grades || this.grades.length === 0) return null;
  
  const letterToValue = {
    'A+': 4.3, 'A': 4.0, 'A-': 3.7,
    'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7,
    'D+': 1.3, 'D': 1.0, 'D-': 0.7,
    'F': 0.0
  };
  
  const valueToLetter = [
    { min: 4.15, letter: 'A+' },
    { min: 3.85, letter: 'A' },
    { min: 3.5, letter: 'A-' },
    { min: 3.15, letter: 'B+' },
    { min: 2.85, letter: 'B' },
    { min: 2.5, letter: 'B-' },
    { min: 2.15, letter: 'C+' },
    { min: 1.85, letter: 'C' },
    { min: 1.5, letter: 'C-' },
    { min: 1.15, letter: 'D+' },
    { min: 0.85, letter: 'D' },
    { min: 0.5, letter: 'D-' },
    { min: 0, letter: 'F' }
  ];
  
  const validGrades = this.grades.filter(g => letterToValue.hasOwnProperty(g));
  if (validGrades.length === 0) return null;
  
  const sum = validGrades.reduce((acc, g) => acc + letterToValue[g], 0);
  const avg = sum / validGrades.length;
  
  return valueToLetter.find(v => avg >= v.min).letter;
});

// Pre-save middleware to update calculated fields
courseSchema.pre('save', function(next) {
  this.averageRating = this.calculatedAverageRating;
  this.averageGrade = this.calculatedAverageGrade || 'B';
  
  if (this.classDifficulty && this.classDifficulty.length > 0) {
    const sum = this.classDifficulty.reduce((acc, val) => acc + val, 0);
    this.averageDifficulty = Math.round((sum / this.classDifficulty.length) * 10) / 10;
  }
  
  this.lastUpdated = new Date();
  next();
});

// Method to add a rating
courseSchema.methods.addRating = function(rating) {
  if (rating >= 0 && rating <= 5) {
    this.ratings.push(rating);
    return this.save();
  }
  throw new Error('Rating must be between 0 and 5');
};

// Method to add a comment
courseSchema.methods.addComment = function(commentId) {
  this.comments.push(commentId);
  return this.save();
};

// Method to get course summary for API
courseSchema.methods.toSummary = function() {
  return {
    id: this._id,
    className: this.className,
    subject: this.subject,
    description: this.description,
    teacher: this.teacher,
    dualCredit: this.dualCredit,
    usualGrade: this.usualGrade,
    prerequisite: this.prerequisite,
    duration: this.duration,
    semesterOffered: this.semesterOffered,
    honorsAP: this.honorsAP,
    averageRating: this.averageRating,
    averageGrade: this.averageGrade,
    averageDifficulty: this.averageDifficulty,
    tags: this.tags,
    icon: this.icon,
    isActive: this.isActive,
    lastUpdated: this.lastUpdated
  };
};

module.exports = mongoose.model('Course', courseSchema);
