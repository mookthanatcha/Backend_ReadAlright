"use strict";

var Word = require("../model/WordCollection");

exports.list_all_word = function (req, res) {
  Word.getAllWord(function (err, quiz) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", quiz);
    res.status(200).json({ quiz });
  });
};

exports.create_a_word = function (req, res) {
  var new_word = new Word(req.body);

  //handles null error

  Word.createWord(new_word, function (err, word) {
    if (err) res.send(err);
    res.json({ word });
  });
};

exports.delete_a_words = function (req, res) {
  Word.deleteWord(req.params.wordEng, function (err, wordCol) {
    if (err) res.send(err);
    res.json({ wordCol });
  });
}

exports.get_WordByUserId = function (req, res) {
  Word.getWordByUserId(req.params.userId, function (err, word) {
    if (err) res.send(err);
    res.json({ word });
  });
}