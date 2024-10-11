const mysql = require('mysql2/promise') // Make sure to import the promises module

// Create a pool of connections
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'auth_db',
  password: 'DRD#99#drdr'
})

// Test the connection
async function testConnection() {
  try {
    const connection = await pool.getConnection() // Get a connection from the pool
    console.log('Connected to the database successfully')
    connection.release() // Release the connection when done
  } catch (err) {
    console.error('Error connecting to the database:', err)
  }
}

testConnection()

// Export the pool for use in other modules
module.exports = pool // No need to call .promise() here
