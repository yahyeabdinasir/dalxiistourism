import Contact from '../models/Contact.js';
import { validationResult } from 'express-validator';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';

// Rate limiting for contact submissions
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 contact submissions per 15 minutes
  message: {
    error: 'Too many contact submissions from this IP, please try again later.',
    retryAfter: 15
  },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: false,
  keyGenerator: (req) => req.ip,
});

// Get client IP address
const getClientIP = (req) => {
  return req.ip || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress ||
         (req.connection.socket ? req.connection.socket.remoteAddress : null) ||
         req.headers['x-forwarded-for']?.split(',')[0] ||
         'unknown';
};

// Create new contact submission
export const createContact = [
  contactLimiter,
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          error: 'Validation failed',
          details: errors.array()
        });
      }

      const { firstName, lastName, email, message } = req.body;
      
      // Get client information
      const ipAddress = getClientIP(req);
      const userAgent = req.get('User-Agent') || 'Unknown';
      
      // Check if this IP has submitted too many messages recently
      const recentSubmissions = await Contact.countDocuments({
        ipAddress,
        createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } // Last 24 hours
      });
      
      if (recentSubmissions >= 10) {
        return res.status(429).json({
          success: false,
          error: 'Too many submissions from this IP address. Please try again later.',
          retryAfter: 24 * 60 * 60 // 24 hours in seconds
        });
      }
      
      // Check for duplicate submissions (same email, similar message within 1 hour)
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
      const duplicateCheck = await Contact.findOne({
        email,
        createdAt: { $gte: oneHourAgo },
        message: { $regex: new RegExp(message.substring(0, 20), 'i') }
      });
      
      if (duplicateCheck) {
        return res.status(400).json({
          success: false,
          error: 'Similar message already submitted. Please wait before submitting again.'
        });
      }
      
      // Create new contact
      const contact = new Contact({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.toLowerCase().trim(),
        message: message.trim(),
        ipAddress,
        userAgent
      });
      
      console.log('📝 About to save contact to database:', {
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        messageLength: contact.message.length,
        ipAddress: contact.ipAddress,
        database: mongoose.connection.name
      });
      
      await contact.save();
      
      console.log('💾 Contact saved successfully with ID:', contact._id);
      
      // Log successful submission
      console.log(`✅ New contact submission from ${email} (IP: ${ipAddress})`);
      
      res.status(201).json({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
        data: {
          id: contact._id,
          firstName: contact.firstName,
          lastName: contact.lastName,
          email: contact.email,
          submittedAt: contact.createdAt
        }
      });
      
    } catch (error) {
      console.error('❌ Contact creation error:', error);
      
      // Handle specific MongoDB errors
      if (error.name === 'ValidationError') {
        return res.status(400).json({
          success: false,
          error: 'Validation failed',
          details: Object.values(error.errors).map(err => ({
            field: err.path,
            message: err.message
          }))
        });
      }
      
      if (error.code === 11000) {
        return res.status(400).json({
          success: false,
          error: 'Duplicate submission detected'
        });
      }
      
      res.status(500).json({
        success: false,
        error: 'Internal server error. Please try again later.'
      });
    }
  }
];
