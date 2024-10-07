const jwt = require('jsonwebtoken')
const users = require('../data/users.json')
const secretKey = 'tuClaveSecretaJWT'

const UserController = {
  login: (req, res) => {
    // Si el usuario ya está autenticado, redirige al admin
    if (req.user) {
      return res.redirect('/')
    }
    // Si no, muestra el formulario de login
    res.render('login', { user: req.user })
  },
  processLogin: (req, res) => {
    const { email, password } = req.body

    console.log('Email:', email) // Depuración
    console.log('Password:', password) // Depuración

    try {
      // Primero, busca al usuario solo por email
      const user = users.find((user) => user.email === email)

      if (!user) {
        // Si el usuario no existe, renderiza con mensaje de error
        return res.status(401).render('login', {
          error: 'User not found',
          email: email,
          user: req.user
        })
      }

      if (user.password !== password) {
        // Si el usuario existe pero la contraseña es incorrecta
        return res.status(401).render('login', {
          error: 'Password Incorrect',
          email: email,
          user: req.user
        })
      }

      // Generar token JWT con los datos del usuario
      const token = jwt.sign(
        { name: user.name, email: user.email, role: user.role },
        secretKey,
        {
          expiresIn: '1h'
        }
      )

      // Almacena el token en una cookie
      res.cookie('authToken', token, { httpOnly: true })
      console.log(token)

      // Redirige al usuario según su rol
      if (user.role === 'admin' || user.role === 'editor') {
        return res.redirect('/admin') // Redirige a /admin si es admin o editor
      } else {
        return res.redirect('/') // Redirige a la raíz si es cliente
      }
    } catch (err) {
      console.error(err)
      res
        .status(500)
        .render('login', { error: 'Internal Server Error', user: req.user })
    }
  },
  logout: (req, res) => {
    // Elimina la cookie del token
    res.clearCookie('authToken')
    res.redirect('/user/login') // Redirige al login tras cerrar sesión
    console.log('Usuario Desconectado')
  }
}

module.exports = UserController
