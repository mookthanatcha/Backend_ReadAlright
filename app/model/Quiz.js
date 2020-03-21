"user strict";
var sql = require("./db.js");

var Quiz = function(quiz) {
  this.question = quiz.question;
};

Quiz.createQuiz = function(newQuiz, result) {
  sql.query("INSERT INTO quiz set ?", newQuiz, function(err, res) {
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


Quiz.getAllQuiz = function(result) {
  sql.query("Select * from quiz", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("tasks : ", res);

      result(null, res);
    }
  });
};

module.exports = Quiz;
