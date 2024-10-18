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
  processLogin: async (req, res) => {},
  logout: (req, res) => {
    // Delete the token cookie
    res.clearCookie('authToken')
    res.redirect('/user/login') // Redirects to login after logging out
  },
  testLogin: async (req, res) => {
    try {
      // Use promise-based query to get all users
      const [results] = await db.query('SELECT * FROM users') // No necesitas llamar a .promise()

      // Render the results as JSON
      return res.json(results)
    } catch (err) {
      console.error('Error in the login process:', err)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }
}

module.exports = UserController
