const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '34.64.233.32',
    user: 'root',
    password: 'process.env.DB_PASSWORD',
    database: 'popic',
    port: '3306'
});

module.exports = connection;