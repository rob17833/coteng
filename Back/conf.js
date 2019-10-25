require('dotenv').config()
const mysql = require('mysql');
const connection = mysql.createConnection ({
    host:'127.0.0.1',
    db_port:'3306',
    user:'root',
    password:'8bkzdzx2y99',
    database:'mydb',
    timezone: 'local',
    dateStrings: 'true'
});
module.exports = connection;