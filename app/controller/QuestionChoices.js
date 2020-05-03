"use strict";

var Choice = require("../model/QuestionChoices");

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
};
