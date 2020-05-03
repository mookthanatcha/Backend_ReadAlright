"user strict";
var sql = require("./db.js");

var Answer = function(answer) {
  this.quiz_id = answer.quiz_id;
  this.answer = answer.answer;
  this.isTrue = answer.isTrue;
};

Answer.createAnswer = function(newAnswer, result) {
  sql.query("INSERT INTO answer set ?", newAnswer, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};


Answer.getAnswerByQuizId = function(quizId, result) {
  sql.query("Select * from Answer where quiz_id = ?", quizId, function(
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

Answer.getAllAnswer = function(result) {
  sql.query("Select * from answer", function(err, res) {
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
