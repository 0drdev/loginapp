let createError = require('http-errors')
let express = require('express')
let path = require('path')
let cookieParser = require('cookie-parser')
let logger = require('morgan')
let dotenv = require('dotenv').config()

let indexRouter = require('./routes/index')
const favicon = require('serve-favicon')

let app = express()

// Import conection to database
const db = require('./database/config.js')

const PORT = process.env.PORT || 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.svg')))

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // If it's not development, make sure the error message is not sensitive.
  if (req.app.get('env') !== 'development') {
    res.locals.message =
      'Ocurrió un error en el servidor. Por favor, inténtalo de nuevo más tarde.'
  }

  // render the error page
  res.status(err.status || 500)
  res.render('error', { user: req.user })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}/`)
})

module.exports = app
