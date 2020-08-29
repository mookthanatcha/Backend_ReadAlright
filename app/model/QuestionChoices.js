"user strict";
var sql = require("./db.js");

var Choice = function (choice) {
  this.isRightChoice = choice.isRightChoice;
  this.choice = choice.choice;
  this.question_id = choice.question_id;
  this.optionText = choice.optionText;
  this.value = choice.value;
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

Choice.getChoicePretest = function (readingId, result) {
  sql.query(
    "Select * from Question_Choices c join Question q  where c.question_id = q.question_id and typeOfQuestion = 'chal' and reading_id = ?",
    readingId,
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

Choice.getCorrectChoice = function (result) {
  sql.query(
    "Select * from Question_Choices where isRightChoice = '1'", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("tasks : ", res);

        result(null, res);
      }
    });
};


module.exports = Choice;
