"use strict";

var Tricks = require("../model/Tricks");

exports.list_all_tricks = function (req, res) {
  Tricks.getAllTricks(function (err, quiz) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", quiz);
    res.status(200).json({ quiz });
  });
};
