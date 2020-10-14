"use strict";

var ChoicePretest = require("../model/ChoicePretest");

exports.create_a_ChoicePretest = function (req, res) {
  var new_ChoicePretest = new ChoicePretest(req.body);
  ChoicePretest.createChoicePre(new_ChoicePretest, function (err, quiz) {
    if (err) res.send(err);
    res.json({ error: "Invalid input", msg: res.message, quiz });
  }); 
};   