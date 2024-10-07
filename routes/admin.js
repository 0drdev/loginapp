let express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')
const AdminController = require('../controllers/AdminController')

let router = express.Router()

router.get('/', authMiddleware, adminMiddleware, AdminController.home)

module.exports = router
