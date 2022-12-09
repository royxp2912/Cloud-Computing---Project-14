const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'cloud.cxrmdauvfwmy.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: '29122002',
    port: '3306',
    database: 'rds'
})

module.exports = pool