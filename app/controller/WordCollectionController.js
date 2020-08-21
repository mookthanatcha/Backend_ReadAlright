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
    res.json( {word });
  });
};