let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
  res.render('admin/home')
})

module.exports = router
