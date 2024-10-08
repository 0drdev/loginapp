const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'DRD#99#drdr'
})

connection.connect(function (err) {
  if (err) throw err
  console.log('Connected To Database!')
})

module.exports = connection
