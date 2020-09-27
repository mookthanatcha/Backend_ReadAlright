"use strict";

var Suggestion_User = require("../model/Suggestion_User");

exports.create_a_suggestion = function (req, res) {
    var new_suggestion = new Suggestion_User(req.body);

    //handles null error

    Suggestion_User.createSuggestion(new_suggestion, function (err, word) {
        if (err) res.send(err);
        res.json({ word });
    });
};

exports.list_all_suggestion = function (req, res) {
    Suggestion_User.getAllSuggestion(function (err, quiz) {
        console.log("controller");
        if (err) res.send(err);
        console.log("res", quiz);
        res.status(200).json({ quiz });
    });
};

exports.delete_a_suggestion = function (req, res) {
    Suggestion_User.deleteSuggestion(req.params.suggestion, function (err, wordCol) {
        if (err) res.send(err);
        res.json({ wordCol });
    });

}