const express = require("express"),
  app = express(),
  bodyParser = require("body-parser");
port = process.env.PORT || 3000;

const mysql = require("mysql");
// connection configurations
const mc = mysql.createConnection({
  host: "readalright.cx46qogri8it.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "readalright",
  database: "readalright"
});

// connect to database
mc.connect();

app.listen(port);

console.log("API server started on: " + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://192.168.1.56:19006");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
var routes = require("./app/routes/approutes"); //importing route
routes(app); //register the route
