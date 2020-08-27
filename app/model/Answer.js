"user strict";
var sql = require("./db.js");

var Answer = function (answer) {
  this.isRightChoice = answer.isRightChoice;
  this.choice = answer.choice;
  this.optionText = answer.optionText;
  this.value = answer.value;
  this.choice_id = answer.choice_id;
  this.question_id = answer.question_id;
  this.user_id = answer.user_id;
};

Answer.createAnswer = function (newAnswer, result) {
  sql.query("INSERT INTO Answer set ?", newAnswer, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};


Answer.getAnswerByQuizId = function (quizId, result) {
  sql.query("Select * from Answer where quiz_id = ?", quizId, function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Answer.getSuggestionByUserId = function (userId, result) {
  sql.query("select t.suggestion from Answer a join Question q on a.question_id = q.question_id join TypeOfSuggestion t on q.typeOfSuggestion_id = t.typeOfSuggestion_id where user_id = ?", userId, function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Answer.getAllAnswer = function (result) {
  sql.query("Select * from answer", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("answer : ", res);

      result(null, res);
    }
  });
};

module.exports = Answer;
