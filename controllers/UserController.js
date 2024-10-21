const jwt = require('jsonwebtoken')
const secretKey = 'tuClaveSecretaJWT'
const bcrypt = require('bcrypt')
const db = require('../database/config')

const UserController = {
  login: (req, res) => {
    // If the user is already logged in, redirects to admin.
    if (req.user) {
      return res.redirect('/')
    }
    // If not, it shows the login form
    res.render('login', { user: req.user })
  },
  processLogin: async (req, res) => {
    const { email, password } = req.body

    try {
      console.log(email, password)

      // First, search user in the bd for email
      const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [
        email
      ])
      const user = rows[0] // Get the first result

      if (!user) {
        // This user is not found, render to message error
        return res.status(401).render('login', {
          error: 'User not found',
          email: email,
          user: req.user
        })
      }

      // Compare password hashed using bycrypt
      const passwordMatch = await bcrypt.compare(password, user.password)

      if (!passwordMatch) {
        // If passwordd is incorrect
        return res.status(401).render('login', {
          error: 'Password Incorrect',
          email: email,
          user: req.user
        })
      }

      // Generates a JWT token with user data
      const token = jwt.sign(
        { name: user.name, email: user.email, role: user.role },
        secretKey,
        { expiresIn: '1h' }
      )

      // Stores the token in a cookie
      res.cookie('authToken', token, { httpOnly: true })
      console.log(token)

      // Redirects the user according to their role
      if (user.role === 'admin' || user.role === 'editor') {
        return res.redirect('/admin') // Redirect to /admin if you are admin or editor
      } else {
        return res.redirect('/') // Redirige to / if you are client
      }
    } catch (err) {
      console.error(err)
      res
        .status(500)
        .render('login', { error: 'Internal Server Error', user: req.user })
    }
  },
  logout: (req, res) => {
    // Delete the token cookie
    res.clearCookie('authToken')
    console.log('disconnected')
    res.redirect('/user/login') // Redirects to login after logging out
  }
}

module.exports = UserController
