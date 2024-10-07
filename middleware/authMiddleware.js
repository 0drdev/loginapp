const jwt = require('jsonwebtoken')
const secretKey = 'tuClaveSecretaJWT'

const authMiddleware = (req, res, next) => {
  const token = req.cookies.authToken

  // Verifica si hay un token
  if (token) {
    try {
      // Verifica y decodifica el token
      const decoded = jwt.verify(token, secretKey)
      req.user = decoded // Almacena los datos del usuario decodificado
      return next() // Continua a la siguiente ruta
    } catch (error) {
      console.error('Token inválido o expirado', error)
      // Redirige al login si el token es inválido o ha expirado
      return res.redirect('/user/login')
    }
  }

  // Si no hay token, permite el acceso a la página de login
  next()
}

module.exports = authMiddleware
