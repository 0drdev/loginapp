const express = require('express')
const users = require('../data/users.json')

const UserController = {
  login: (req, res) => {
    res.render('login')
  },
  processLogin: (req, res) => {
    try {
      const { email, password } = req.body

      console.log('Email:', email) // Depuración
      console.log('Password:', password) // Depuración

      // Primero, busca al usuario solo por email
      const user = users.find((user) => user.email === email)

      if (!user) {
        // Si el usuario no existe, renderiza con mensaje de error
        return res
          .status(401)
          .render('login', { error: 'User not found', email })
      } else if (user.password !== password) {
        // Si el usuario existe pero la contraseña es incorrecta
        return res
          .status(401)
          .render('login', { error: 'Password Incorrect', email })
      } else {
        // Si el login es correcto, redirige a la página de admin
        return res.redirect('/admin')
      }
    } catch (error) {
      console.error('Error en el proceso de login:', error) // Log del error
      res
        .status(500)
        .render('login', {
          error: 'An unexpected error occurred. Please try again.'
        })
    }
  },

  logout: (req, res) => {}
}

module.exports = UserController
