"user strict";
var sql = require("./db.js");

var Tricks = function(trick) {
  this.Trick_Title = trick.Trick_Title;
  this.Trick_Detail = trick.Trick_Detail;
};

Tricks.createTrick = function (newTrick, result) {
  sql.query("INSERT INTO Tricks set ?", newTrick, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      res.message = "Okay";
      console.log(res);
      console.log("eiei");
      console.log(res.message);
      console.log(res.insertId);
      result(null, res.insertId, res.message);
    }
  });
};

Tricks.deleteTrick = function (tricks_id, result) {
  sql.query("DELETE FROM Tricks WHERE tricks_id = ?", tricks_id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res.res);
    }
  });
};

Tricks.getAllTricks = function(result) {
    sql.query("Select * from Tricks", function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("answer : ", res);
  
        result(null, res);
      }
    });
  };
  
  module.exports = Tricks;
