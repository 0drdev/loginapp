let express = require('express')
let router = express.Router()
const UserController = require('../controllers/UserController')
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

//Render login form
router.get('/login', authMiddleware, UserController.login)

//Process login
router.post('/login', UserController.processLogin)

//Process loguout
router.get('/logout', UserController.logout)

module.exports = router
