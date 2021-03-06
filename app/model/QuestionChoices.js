"user strict";
var sql = require("./db.js");

var Choice = function (choice) {
  this.isRightChoice = choice.isRightChoice;
  this.choice = choice.choice;
  this.question_id = choice.question_id;
  this.optionText = choice.optionText;
  this.value = choice.value;
};

Choice.createChoice = function (newchoice, result) {
  sql.query("INSERT INTO Question_Choices set ?", newchoice, function (err, res) {
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

Choice.updateChoice = function (newChoice, choiceId, result) {
  sql.query("UPDATE Question_Choices set ? where choice_id = " + choiceId, newChoice, function (err, res) {
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

Choice.deleteChoice = function (choice_id, result) {
  sql.query("DELETE FROM Question_Choices WHERE choice_id = ?", choice_id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res.res);
    }
  });
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
