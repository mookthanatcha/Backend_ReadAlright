"use strict";

var QuizPre = require("../model/QuizPretest");
const ChoicePre = require("../model/ChoicePretest");
const QuizPretest = require("../model/QuizPretest");

exports.list_QuizPre = function (req, res) {
  QuizPre.getQuizPre(req.params.reading_Pretest_id, function (err, quiz) {
    res.json({ quiz });

  });
};

exports.get_a_quiz_by_id = function (req, res) {
  QuizPretest.getQuizByQuizId(req.params.quizId, function (err, quiz) {
    ChoicePre.getQuizByQuizId(req.params.quizId, function (err, choice) {
      // res.json({ quiz, data: [{ choice: choice }] });
      var temp = JSON.stringify(quiz)
      var tempsub = temp.substring(13, temp.length - 2);
      console.log(tempsub)
      res.json({ questionText: tempsub, questionType: "SelectionGroup", options: choice });

    });
  });
};