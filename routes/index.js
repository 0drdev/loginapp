let express = require('express')
let router = express.Router()
const userRouter = require('../routes/user')
const adminRouter = require('../routes/admin')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Login App' })
})

// Routes user
router.use('/user', userRouter)

// Routes admin
router.use('/admin', adminRouter)

module.exports = router
