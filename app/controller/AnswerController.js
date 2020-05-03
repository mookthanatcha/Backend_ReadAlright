"use strict";

var Answer = require("../model/Answer.js");

exports.list_all_answers = function (req, res) {
    Answer.getAllAnswer(function (err, answer) {
        console.log("controller");
        if (err) res.send(err);
        console.log("res", answer);
        res.send(answer);
    });
};

exports.create_a_answer = function (req, res) {
    var new_answer = new Answer(req.body);
    Answer.createAnswer(new_answer, function (err, answer) {
        if (err) res.send(err);
        res.json(answer);
    });
};

exports.read_a_answer_quiz_id = function (req, res) {
    Answer.getAnswerByQuizId(req.params.quizId, function (err, answer) {
        if (err) res.send(err);
        res.json({ answer });
    });
};

