let express = require('express')
let router = express.Router()
const UserController = require('../controllers/UserController')

router.get('/', (req, res) => {
  res.redirect('/user/login') // Redirige a la página de login
})

//Renderiza el formulario
router.get('/login', UserController.login)

//Procesa el login
router.post('/login', UserController.processLogin)

module.exports = router
