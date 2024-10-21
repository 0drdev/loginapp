const rateLimit = require('express-rate-limit')

const loginLimiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  max: 2, // Limit 2 attempts per IP
  handler: (req, res) => {
    // Renders error view with message and status
    res.render('error', {
      message: 'Too many login attempts',
      error: {
        status: 429, // Code status HTTP para Too Many Requests
        stack:
          'You have exceeded your login attempt limit. Please try again later.'
      },
      user: req.user
    })
  }
})

module.exports = { loginLimiter }
