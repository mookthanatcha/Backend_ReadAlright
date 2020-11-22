"use strict";

var Reading = require("../model/Reading.js");

exports.list_all_Reading = function (req, res) {
  Reading.getAllReading(function (err, answer) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", answer);
    res.send(answer);
  });
};

exports.delete_a_reading = function (req, res) {
  Reading.deleteReading(req.params.reading_id, function (err, wordCol) {
    if (err) res.send(err);
    res.json({ wordCol });
  });
}

exports.read_a_reading_category_id = function (req, res) {
  Reading.getReadingByCategoryId(req.params.userId, function (err, reading) {
    if (err) res.send(err);
    res.json({ reading });
  });
};

exports.get_reading_last = function (req, res) {
  Reading.getReadingLast(function (err, reading) {
    if (err) res.send(err);
    res.json({ reading });
  });
};

exports.read_a_reading_interest = function (req, res) {
  Reading.getReadingInterest(req.params.categoryId, function (err, reading) {
    if (err) res.send(err);
    res.json({ reading });
  });
};

exports.create_a_reading = function (req, res) {
  var new_reading = new Reading(req.body);
  Reading.createReading(new_reading, function (err, quiz) {
    if (err) res.send(err);
    res.json({ error: "Invalid input", msg: res.message, quiz });
  });
};
exports.update_a_reading = function (req, res) {
  var new_reading = new Reading(req.body);
  Reading.updateReading(new_reading, req.params.readingId, function (err, quiz) {
    if (err) res.send(err);
    res.json({ error: "Invalid input", msg: res.message, quiz });
  });
};

exports.read_a_reading_id = function (req, res) {
  Reading.getReadingByReadingId(req.params.readingId, function (err, reading) {
    if (err) res.send(err);
    res.json({ reading });
  });
};


exports.read_a_reading_new = function (req, res) {
  Reading.getNewReading(function (err, answer) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", answer);
    res.send(answer);
  });
};




// categoryIdList= [5,7,20,5,5]

// for(int i = 0;i<categoryIdList.length;i++){

//     axios.get("http://localhost:3000/reading/categorys/"+categoryIdList[i]).then((response{
//         if(response.statusCode=200){
//             data
//         }
//     }))
// }

