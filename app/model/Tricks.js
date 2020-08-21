"user strict";
var sql = require("./db.js");

var Tricks = function(trick) {
  this.Tricks_id = trick.Tricks_id;
  this.Trick_Title = trick.Trick_Title;
  this.Trick_Detail = trick.Trick_Detail;
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
