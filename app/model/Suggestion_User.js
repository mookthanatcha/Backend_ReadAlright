"user strict";
var sql = require("./db.js");

var Suggestion_User = function (suggestion_User) {
  this.typeOfSuggestion_id = suggestion_User.typeOfSuggestion_id;
  this.user_id = suggestion_User.user_id;
};
 
Suggestion_User.createSuggestion = function (newSuggestion, result) {
    sql.query("INSERT INTO Suggestion_User set ?", newSuggestion, function (err, res) {
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

  Suggestion_User.getAllSuggestion = function (result) {
    sql.query("Select * from Suggestion_User", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("tasks : ", res);
  
        result(null, res);
      }
    });
  };

 Suggestion_User.deleteSuggestion = function (suggestion, result) {
    sql.query("DELETE FROM Suggestion_User WHERE typeOfSuggestion_id = ?", suggestion, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res.res);
      }
    });
  };

module.exports = Suggestion_User;