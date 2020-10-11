"user strict";
var sql = require("./db.js");

var User = function (user) {
  this.regTime = user.regTime;
  this.username = user.username;
  this.pwd = user.pwd;
  this.level = user.level
  this.image = user.image;
};

User.createUser = function (newUser, result) {
    sql.query("INSERT INTO Users set ?", newUser, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        res.message = "Okay";
        console.log(res);
        // console.log("eiei");
        console.log(res.message);
        console.log(res.insertId);
        result(null, res.insertId, res.message);
      }
    });
  };

module.exports = User;