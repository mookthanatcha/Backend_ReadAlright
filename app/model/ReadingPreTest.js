"user strict";
var sql = require("./db.js");

var ReadingPre = function (readingPre) {
  this.reading_Pretest_id = readingPre.reading_Pretest_id;
  this.title = readingPre.title;
  this.content = readingPre.content;
  this.image = readingPre.image;
  this.level_reading = readingPre.level_reading;
};

ReadingPre.getAllReadingPre = function (result) {
    sql.query("SELECT * FROM Reading_Pretest", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("tasks : ", res);
  
        result(null, res);
      }
    });
  };


module.exports = ReadingPre;
