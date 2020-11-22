"user strict";
var sql = require("./db.js");

var Quiz = function (quiz) {
  this.question = quiz.question;
  this.typeOfSuggestion_id = quiz.typeOfSuggestion_id;
  this.reading_id = quiz.reading_id;
  this.typeOfQuestion = quiz.typeOfQuestion;
  this.level = quiz.level;

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

Quiz.deleteQuiz = function (question_id, result) {
  sql.query("DELETE FROM Question WHERE question_id = ?", question_id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res.res);
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

Quiz.updateQuiz = function (newQuiz, quizId, result) {
  sql.query("UPDATE Question set ? where question_id = " + quizId, newQuiz, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      res.message = "Okay";
      console.log(res);
      result(null, res);
    }
  });
};

Quiz.getQuizByQuizId = function (quizId, result) {
  sql.query("Select question, typeOfSuggestion_id from Question where question_id = ?", quizId, function (
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

Quiz.getQuizPretest = function (readingId, result) {
  sql.query("Select question_id from Question where typeOfQuestion = 'chal' and reading_id = ?", readingId, function (
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



Quiz.getSuggestion = function (result) {
  sql.query("select t.suggestion from Question q join TypeOfSuggestion t on q.typeOfSuggestion_id = t.typeOfSuggestion_id group by t.suggestion;", function (
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
