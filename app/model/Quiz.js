"user strict";
var sql = require("./db.js");

var Quiz = function (quiz) {
  this.question = quiz.question;
  this.typeOfSuggestion_id = quiz.typeOfSuggestion_id;
  this.reading_id = quiz.reading_id;
  this.typeOfQuestion = quiz.typeOfQuestion;
};

Quiz.createQuiz = function (newQuiz, result) {
  sql.query("INSERT INTO Question set ?", newQuiz, function (err, res) {
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

Quiz.getAllQuiz = function (result) {
  sql.query("Select * from Question", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("tasks : ", res);

      result(null, res);
    }
  });
};

Quiz.getQuizByQuizId = function (quizId, result) {
  sql.query("Select question from Question where question_id = ?", quizId, function (
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

Quiz.getQuizByType = function (type, reading_id, result) {
  let selectedQuery =
    "Select * from ?? where typeOfQuestion = ? and reading_id = ?";
  let query = sql.format(selectedQuery, ["Question", type, reading_id]);
  sql.query(query, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Quiz.getQuizPretest = function (result) {
  sql.query("Select * from Question where typeOfQuestion = 'c'", function (
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

module.exports = Quiz;
