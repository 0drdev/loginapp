const express = require('express')
const users = require('../data/users.json')

const UserController = {
  login: (req, res) => {
    res.render('login')
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
        res
          .status(401)
          .render('login', { error: 'User not found', email: email })
      } else if (user.password !== password) {
        // Si el usuario existe pero la contraseña es incorrecta
        res
          .status(401)
          .render('login', { error: 'Password Incorrect', email: email })
      } else {
        // Si el login es correcto, redirige a la página de admin
        res.redirect('/admin')
      }
    } catch (err) {
      console.error(err)
      res.status(500).render('login', { error: 'Internal Server Error' })
    }
  },

  logout: (req, res) => {}
}

module.exports = UserController
