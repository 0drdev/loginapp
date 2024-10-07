let express = require('express')
let router = express.Router()
const userRouter = require('../routes/user')
const adminRouter = require('../routes/admin')
const authMiddleware = require('../middleware/authMiddleware')

/* GET home page. */
router.get('/', authMiddleware, function (req, res, next) {
  res.render('index', { title: 'Login App', user: req.user })
})

// Routes user
router.use('/user', userRouter)

// Routes admin
router.use('/admin', adminRouter)

module.exports = router
