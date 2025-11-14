const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'D3_93025_Omkar',
    password: 'manager',
    database: 'movie_review'
})

module.exports = pool