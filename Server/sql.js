const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'D3_93025_Omkar',
    password: 'manager',
    database: 'airbnb_db'
})

module.exports = pool