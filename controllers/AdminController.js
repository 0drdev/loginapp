const jwt = require('jsonwebtoken')
const users = require('../data/users.json')
const secretKey = 'tuClaveSecretaJWT'

const AdminController = {
  home: (req, res) => {
    res.render('admin/home', { user: req.user })
  }
}

module.exports = AdminController
