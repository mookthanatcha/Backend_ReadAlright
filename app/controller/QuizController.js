"use strict";

var Quiz = require("../model/Quiz.js");

exports.list_all_quizs = function (req, res) {
  
  Quiz.getAllQuiz(function (err, quiz) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", quiz);
    res.status(200).json({ non: "Love you", quiz });
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
