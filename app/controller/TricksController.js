"use strict";

var Tricks = require("../model/Tricks");

exports.create_a_trick = function (req, res) {
  var new_trick = new Tricks(req.body);
  Tricks.createTrick(new_trick, function (err, quiz) {
    if (err) res.send(err);
    res.json({ error: "Invalid input", msg: res.message, quiz });
  }); 
};   

exports.list_all_tricks = function (req, res) {
  Tricks.getAllTricks(function (err, quiz) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", quiz);
    res.status(200).json({ quiz });
  });
};
