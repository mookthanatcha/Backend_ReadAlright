"user strict";
var sql = require("./db.js");

var WordCollection = function (wordCollection) {
  this.wordCol_Eng = wordCollection.wordCol_Eng;
  this.wordCol_Thai = wordCollection.wordCol_Thai;
  this.vocabCard_id = wordCollection.vocabCard_id;
  this.user_id = wordCollection.user_id;
};

WordCollection.createWord = function (newWord, result) {
  sql.query("INSERT INTO WordCollection set ?", newWord, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      res.message = "Okay";
      console.log(res);
      // console.log("eiei");
      console.log(res.message);
      console.log(res.insertId);
      result(null, res.insertId, res.message);
    }
  });
};

WordCollection.deleteWord = function (wordEng, result) {
  sql.query("DELETE FROM WordCollection WHERE wordCol_Eng = ?", wordEng, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res.res);
    }
  });
};

WordCollection.getAllWord = function (result) {
  sql.query("Select * from WordCollection", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("tasks : ", res);

      result(null, res);
    }
  });
};

module.exports = WordCollection;