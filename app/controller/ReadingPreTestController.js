"use strict";

var ReadingPre = require("../model/ReadingPreTest");

exports.list_all_PreRead = function (req, res) {
  ReadingPre.getAllReadingPre(function (err, quiz) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", quiz);
    res.status(200).json({ quiz });
  });
};

exports.getReadingPretestById = function (req, res) {
  ReadingPre.getReadingPreById(req.params.reading_Pretest_id, function (err, quiz) {
    res.json({ quiz });

  });
};