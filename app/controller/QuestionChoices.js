"use strict";

var Choice = require("../model/QuestionChoices.js");

exports.create_a_QChoice = function (req, res) {
  var new_QChoice = new Choice(req.body);
  Choice.createChoice(new_QChoice, function (err, quiz) {
    if (err) res.send(err);
    res.json({ error: "Invalid input", msg: res.message, quiz });
  }); 
};   

exports.list_all_choice = function (req, res) {
  Choice.getAllChoice(function (err, choice) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", choice);
    res.send(category);
  });
};


exports.get_a_choice_by_question_id = function (req, res) {
  Choice.getQuizByQuizId(req.params.quizId, function (err, choice) {
    if (err) res.send(err);
    res.json({ choice });
  });
}
exports.list_correct_choice = function (req, res) {
  Choice.getCorrectChoice(function (err, choice) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", choice);
    res.send(choice);
  });
};


