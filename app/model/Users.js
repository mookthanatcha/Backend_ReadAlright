"user strict";
var sql = require("./db.js");

var User = function (user) {
  this.regTime = user.regTime;
  this.username = user.username;
  this.pwd = user.pwd;
  this.level = user.level
  this.image = user.image;
  this.uid = user.uid
  this.isTested= user.isTested
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

User.getUserByUuid = function (uuId, result) {
  sql.query(
    "Select * from Users where uid = ?",
    uuId,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

User.updateUsere = function (newUser, uuId, result) {
  sql.query("UPDATE Users set ? where uid = '" + uuId+"'", newUser, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      res.message = "Okay";
      console.log(res);
      result(null, res);
    }
  });
};
User.getUserAdminByUuid = function (uuId, result) {
  sql.query(
    "Select * from admin where uid = ?",
    uuId,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};



module.exports = User;