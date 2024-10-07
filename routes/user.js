let express = require('express')
let router = express.Router()
const UserController = require('../controllers/UserController')
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

//Renderiza el formulario
router.get('/login', authMiddleware, UserController.login)

//Procesa el login
router.post('/login', UserController.processLogin)

router.get('/logout', UserController.logout)

module.exports = router
