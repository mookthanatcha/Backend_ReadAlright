"user strict";
var sql = require("./db.js");

var ChoicePre = function (choicePre) {
  this.isRightChoice = choicePre.isRightChoice;
  this.choice = choicePre.choice;
  this.optionText = choicePre.optionText;
  this.value = choicePre.value;
  this.Question_Pretest_id = choicePre.question_id;
};

ChoicePre.createChoicePre = function (newChoicePre, result) {
  sql.query("INSERT INTO Choices_TF set ?", newChoicePre, function (err, res) {
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

ChoicePre.getQuizByQuizId = function (quizId, result) {
    sql.query(
      "Select * from Choices_TF where Question_Pretest_id = ?",
      quizId,
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
module.exports = ChoicePre;

