"user strict";

var mysql = require("mysql");

//local mysql db connection
var connection = mysql.createConnection({
  host: "readalright.clmzfnhaoacq.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "readalright",
  database: "ReadAlright"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
 