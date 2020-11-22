"user strict";
var sql = require("./db.js");

var Admin = function (admin) {
  this.email = admin.email;
  this.password = admin.password;
  this.uid = admin.uid
};

Admin.createAdmin = function (newAdmin, result) {
    sql.query("INSERT INTO admin set ?", newAdmin, function (err, res) {
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

  Admin.getAllAdmin = function(result) {
    sql.query("Select * from admin", function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("answer : ", res);
  
        result(null, res);
      }
    });
  };


  Admin.getUserAdminByUuid = function (uuId, result) {
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

module.exports = Admin;    