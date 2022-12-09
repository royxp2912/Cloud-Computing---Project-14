const mysql = require('mysql');
const con = mysql.createConnection({
    host: "cloud.cxrmdauvfwmy.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "29122002"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con