// Basic security middleware for Dalxiis Tourism backend
export default function securityMiddleware(req, res, next) {
  // Remove sensitive headers
  res.removeHeader('X-Powered-By');
  
  // Add security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Basic request validation
  if (req.method === 'POST' && req.headers['content-type'] !== 'application/json') {
    return res.status(400).json({ error: 'Content-Type must be application/json' });
  }
  
  // Check request size
  const contentLength = parseInt(req.headers['content-length'] || '0');
  if (contentLength > 10240) { // 10KB limit
    return res.status(413).json({ error: 'Request too large' });
  }
  
  next();
}