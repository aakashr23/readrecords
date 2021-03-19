var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost', //IP address of DB host
    user: 'root', //DB username
    password: 'root',//DB pw
    database: 'my_db' //enter DB name
})
connection.on('error', (err) => {
    console.log("[mysql error]", err);
});
connection.on('connection', () => {
    console.log("[mysql DB connection]", err);
});
module.exports = connection;