const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
  // Basic admin information
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  
  // Admin details
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['super_admin', 'admin', 'moderator'],
    default: 'moderator'
  },
  
  // Permissions
  permissions: {
    canApproveCourses: {
      type: Boolean,
      default: false
    },
    canModerateComments: {
      type: Boolean,
      default: true
    },
    canManageAdmins: {
      type: Boolean,
      default: false
    },
    canViewAnalytics: {
      type: Boolean,
      default: false
    }
  },
  
  // Account status
  isActive: {
    type: Boolean,
    default: true
  },
  lastLogin: {
    type: Date
  },
  loginAttempts: {
    type: Number,
    default: 0
  },
  lockUntil: {
    type: Date
  },
  
  // Activity tracking
  actionsPerformed: [{
    action: String,
    target: String,
    timestamp: {
      type: Date,
      default: Date.now
    },
    details: mongoose.Schema.Types.Mixed
  }]
}, {
  timestamps: true
});

// Indexes
adminSchema.index({ email: 1 });
adminSchema.index({ isActive: 1 });

// Virtual for account lock status
adminSchema.virtual('isLocked').get(function() {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

// Pre-save middleware to hash password
adminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
adminSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Method to increment login attempts
adminSchema.methods.incLoginAttempts = function() {
  // If we have a previous lock that has expired, restart at 1
  if (this.lockUntil && this.lockUntil < Date.now()) {
    return this.updateOne({
      $unset: { lockUntil: 1 },
      $set: { loginAttempts: 1 }
    });
  }
  
  const updates = { $inc: { loginAttempts: 1 } };
  
  // Lock account after 5 failed attempts for 2 hours
  if (this.loginAttempts + 1 >= 5 && !this.isLocked) {
    updates.$set = { lockUntil: Date.now() + 2 * 60 * 60 * 1000 }; // 2 hours
  }
  
  return this.updateOne(updates);
};

// Method to reset login attempts
adminSchema.methods.resetLoginAttempts = function() {
  return this.updateOne({
    $unset: { loginAttempts: 1, lockUntil: 1 }
  });
};

// Method to log action
adminSchema.methods.logAction = function(action, target, details) {
  this.actionsPerformed.push({
    action,
    target,
    details
  });
  
  // Keep only last 100 actions
  if (this.actionsPerformed.length > 100) {
    this.actionsPerformed = this.actionsPerformed.slice(-100);
  }
  
  return this.save();
};

// Static method to create default admin
adminSchema.statics.createDefaultAdmin = async function() {
  const defaultAdmin = await this.findOne({ email: process.env.ADMIN_EMAIL });
  
  if (!defaultAdmin) {
    const admin = new this({
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      name: 'System Administrator',
      role: 'super_admin',
      permissions: {
        canApproveCourses: true,
        canModerateComments: true,
        canManageAdmins: true,
        canViewAnalytics: true
      }
    });
    
    await admin.save();
    console.log('✅ Default admin created');
  }
};

module.exports = mongoose.model('Admin', adminSchema);
