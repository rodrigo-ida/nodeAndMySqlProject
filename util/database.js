const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    database: 'primeiro',
    password: 'politica@859'
});

module.exports = pool.promise();