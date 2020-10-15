"use strict";

const ChoicePre = require("../model/ChoicePretest");
var ChoicePretest = require("../model/ChoicePretest");

exports.create_a_ChoicePretest = function (req, res) {
  var new_ChoicePretest = new ChoicePretest(req.body);
  ChoicePretest.createChoicePre(new_ChoicePretest, function (err, quiz) {
    if (err) res.send(err);
    res.json({ error: "Invalid input", msg: res.message, quiz });
  }); 
};   

exports.delete_a_choicePre = function (req, res) {
  ChoicePretest.deleteChoicePre(req.params.choices_id, function (err, wordCol) {
    if (err) res.send(err);
    res.json({ wordCol });
  });
}