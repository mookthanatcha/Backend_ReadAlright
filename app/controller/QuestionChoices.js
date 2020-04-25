"use strict";

var Choice = require("../model/QuestionChoices");

exports.list_all_choice = function (req, res) {
    Choice.getAllChoice(function (err, category) {
        console.log("controller");
        if (err) res.send(err);
        console.log("res", category);
        res.send(category);
    });
};
    