"use strict";

var Choice = require("../model/QuestionChoices.js");

exports.create_a_QChoice = function (req, res) {
  var new_QChoice = new Choice(req.body);
  Choice.createChoice(new_QChoice, function (err, quiz) {
    if (err) res.send(err);
    res.json({ error: "Invalid input", msg: res.message, quiz });
  }); 
};   

exports.delete_a_choice = function (req, res) {
  Choice.deleteChoice(req.params.choice_id, function (err, wordCol) {
    if (err) res.send(err);
    res.json({ wordCol });
  });
}

exports.update_a_choice = function (req, res) {
  var new_choice = new Choice(req.body);
  Choice.updateChoice(new_choice, req.params.choiceId, function (err, quiz) {
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


