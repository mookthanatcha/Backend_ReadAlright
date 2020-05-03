"user strict";
var sql = require("./db.js");

var Choice = function (choice) {
  this.isRightChoice = choice.isRightChoice;
  this.choice = choice.choice;
  this.question_id = choice.question_id;
};

Choice.getAllChoice = function (result) {
  sql.query("Select * from Question_Choices", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("tasks : ", res);

      result(null, res);
    }
  });
};
Choice.getQuizByQuizId = function (quizId, result) {
  sql.query(
    "Select * from Question_Choices where question_id = ?",
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
module.exports = Choice;
