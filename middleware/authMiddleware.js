const jwt = require('jsonwebtoken')
const secretKey = 'tuClaveSecretaJWT'

const authMiddleware = (req, res, next) => {
  const token = req.cookies.authToken

  // check for a token
  if (token) {
    try {
      // Verifica y decodifica el token
      const decoded = jwt.verify(token, secretKey)
      req.user = decoded // Stores decoded user data
      return next() // Continue to the next route
    } catch (error) {
      console.error('Token inválido o expirado', error)
      // Redirects to login if token is invalid or expired
      return res.redirect('/user/login')
    }
  }

  // If no token is present, allow access to the login page.
  next()
}

module.exports = authMiddleware
