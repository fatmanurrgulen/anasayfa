const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'node-app',
    password: 'FTMNur9.0!4&1:#+$gLn,'
});

module.exports= connection.promise();