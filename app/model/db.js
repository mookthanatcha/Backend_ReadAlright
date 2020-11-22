"user strict";

var mysql = require("mysql");

//local mysql db connection
var connection = mysql.createConnection({
  host: "readalright.cx46qogri8it.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "readalright",
  database: "readalright"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
 