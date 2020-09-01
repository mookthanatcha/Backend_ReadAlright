"user strict";
var sql = require("./db.js");

var QuizPretest = function (quizPretest) {
  this.question = quizPretest.question;
  this.typeOfSuggestion_id = quizPretest.typeOfSuggestion_id;
  this.reading_Pretest_id = quizPretest.reading_Pretest_id;
};

QuizPretest.getQuizPre = function (readingId, result) {
  sql.query("Select reading_Pretest_id from Question_Pretest where reading_Pretest_id = ?", readingId, function (
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

QuizPretest.getQuizByQuizId = function (quizId, result) {
  sql.query("Select question from Question_Pretest where Question_Pretest_id = ?", quizId, function (
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
module.exports = QuizPretest;
