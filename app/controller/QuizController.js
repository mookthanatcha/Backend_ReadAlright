"use strict";

var Quiz = require("../model/Quiz.js");
var Choice = require("../model/QuestionChoices");

exports.list_all_quizs = function (req, res) {
  Quiz.getAllQuiz(function (err, quiz) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", quiz);
    res.status(200).json({ quiz });
  });
};

exports.create_a_quiz = function (req, res) {
  var new_quiz = new Quiz(req.body);

  //handles null error

  Quiz.createQuiz(new_quiz, function (err, quiz) {
    if (err) res.send(err);
    res.json({ error: "Invalid input", msg: res.message, quiz });
  });
};

exports.get_a_quiz_by_id = function (req, res) {
  Quiz.getQuizByQuizId(req.params.quizId, function (err, quiz) {
    Choice.getQuizByQuizId(req.params.quizId, function (err, choice) {
      res.json({ quiz, data: [{ choice: choice }] });
    });
  });
};

exports.get_a_quiz_by_type = function (req, res) {
  Quiz.getQuizByType(req.params.type, req.params.reading_id, function (
    err,
    quiz
  ) {
    if (err) res.send(err);
    res.json({ quiz });
  });
};

exports.list_Pretest = function (req, res) {
  Quiz.getQuizPretest(function (err, quiz) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", quiz);
    res.status(200).json({ quiz });
  });
};
// exports.read_a_plan = function(req, res) {
//   Plan.getPlanById(req.params.planId, function(err, plan) {
//     if (err) res.send(err);
//     res.json(plan);
//   });
// };

// exports.update_a_plan = function(req, res) {
//   Plan.updateById(req.params.planId, new Task(req.body), function(err, plan) {
//     if (err) res.send(err);
//     res.json(plan);
//   });
// };

// exports.delete_a_plan = function(req, res) {
//   Plan.remove(req.params.planId, function(err, plan) {
//     if (err) res.send(err);
//     res.json({ message: "Plan successfully deleted" });
//   });
// };
