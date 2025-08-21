import mongoose from 'mongoose';
import validator from 'validator';

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name cannot exceed 50 characters'],
    minlength: [2, 'First name must be at least 2 characters'],
    validate: {
      validator: function(v) {
        return /^[a-zA-Z\s'-]+$/.test(v);
      },
      message: 'First name can only contain letters, spaces, hyphens, and apostrophes'
    }
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [50, 'Last name cannot exceed 50 characters'],
    minlength: [2, 'Last name must be at least 2 characters'],
    validate: {
      validator: function(v) {
        return /^[a-zA-Z\s'-]+$/.test(v);
      },
      message: 'Last name can only contain letters, spaces, hyphens, and apostrophes'
    }
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email address'
    }
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters'],
    minlength: [10, 'Message must be at least 10 characters'],
    validate: {
      validator: function(v) {
        // Basic XSS protection - check for common script tags
        const dangerousPatterns = [
          /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
          /javascript:/gi,
          /on\w+\s*=/gi,
          /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi
        ];
        
        return !dangerousPatterns.some(pattern => pattern.test(v));
      },
      message: 'Message contains potentially dangerous content'
    }
  },
  ipAddress: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return validator.isIP(v, 4) || validator.isIP(v, 6);
      },
      message: 'Invalid IP address'
    }
  },
  userAgent: {
    type: String,
    required: true,
    maxlength: 500
  },
  status: {
    type: String,
    enum: ['pending', 'read'],
    default: 'pending'
  },
  isSpam: {
    type: Boolean,
    default: false
  },
  spamScore: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better performance
contactSchema.index({ email: 1, createdAt: -1 });
contactSchema.index({ status: 1, createdAt: -1 });
contactSchema.index({ isSpam: 1, createdAt: -1 });
contactSchema.index({ ipAddress: 1, createdAt: -1 });

// Virtual for full name
contactSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// Virtual for message preview
contactSchema.virtual('messagePreview').get(function() {
  return this.message.length > 100 
    ? this.message.substring(0, 100) + '...' 
    : this.message;
});

// Pre-save middleware for spam detection
contactSchema.pre('save', function(next) {
  // Check for suspicious patterns
  const suspiciousPatterns = [
    /\b(viagra|casino|loan|credit|debt)\b/gi,
    /\b(click here|buy now|limited time|act now)\b/gi,
    /[A-Z]{5,}/g, // Too many consecutive capitals
    /\b(free|money|cash|earn|income)\b/gi
  ];
  
  let spamScore = 0;
  const text = `${this.firstName} ${this.lastName} ${this.message}`.toLowerCase();
  
  suspiciousPatterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      spamScore += matches.length * 5;
    }
  });
  
  // Check for excessive links
  const linkCount = (this.message.match(/https?:\/\/[^\s]+/g) || []).length;
  if (linkCount > 2) {
    spamScore += linkCount * 10;
  }
  
  // Check for excessive punctuation
  const punctuationCount = (this.message.match(/[!]{2,}|[?]{2,}/g) || []).length;
  if (punctuationCount > 0) {
    spamScore += punctuationCount * 3;
  }
  
  this.spamScore = Math.min(spamScore, 100);
  this.isSpam = spamScore > 50;
  
  next();
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
