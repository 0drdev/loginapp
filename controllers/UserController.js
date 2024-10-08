const jwt = require('jsonwebtoken')
const users = require('../data/users.json')
const secretKey = 'tuClaveSecretaJWT'

const UserController = {
  login: (req, res) => {
    // If the user is already logged in, redirects to admin.
    if (req.user) {
      return res.redirect('/')
    }
    // If not, it shows the login form
    res.render('login', { user: req.user })
  },
  processLogin: (req, res) => {
    const { email, password } = req.body

    try {
      // First, search the userby email only
      const user = users.find((user) => user.email === email)

      if (!user) {
        // If the user does not exist, render with error message
        return res.status(401).render('login', {
          error: 'User not found',
          email: email,
          user: req.user
        })
      }

      if (user.password !== password) {
        // If the user exists but the password is wrong
        return res.status(401).render('login', {
          error: 'Password Incorrect',
          email: email,
          user: req.user
        })
      }

      // Generate JWT token with user data
      const token = jwt.sign(
        { name: user.name, email: user.email, role: user.role },
        secretKey,
        {
          expiresIn: '1h'
        }
      )

      // Stores the token in a cookie
      res.cookie('authToken', token, { httpOnly: true })
      console.log(token)

      // Redirects the user according to their role
      if (user.role === 'admin' || user.role === 'editor') {
        return res.redirect('/admin') // Redirect to /admin if you are admin or editor
      } else {
        return res.redirect('/') // Redirect to / you are client
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
    res.redirect('/user/login') // Redirects to login after logging out
  }
}

module.exports = UserController
