let express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')
const AdminController = require('../controllers/AdminController')

let router = express.Router()
// The home page is used to validate which role you have and if you have an active token.
router.get('/', authMiddleware, adminMiddleware, AdminController.home)

module.exports = router
