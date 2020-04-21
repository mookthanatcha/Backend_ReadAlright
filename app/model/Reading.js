var sql = require("./db.js");

var Reading = function (reading) {
  (this.title = reading.title),
    (this.content = reading.content),
    (this.image = reading.image),
    (this.category_id = reading.category_id),
    (this.isActive = reading.isActive);
};

Reading.getAllReading = function (result) {
  sql.query("Select * from reading", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Reading : ", res);
      result(null, res);
    }
  });
};

Reading.createReading = function (newRead, result) {
  sql.query("INSERT INTO reading set ?", newRead, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      res.message = "Okay";
      console.log(res);
      console.log("eiei");
      console.log(res.message);
      console.log(res.insertId);
      result(null, res.insertId, res.message);
    }
  });
};

// Reading.getReadingByCategoryId = function (categoryId, result) {
//     sql.query("Select * from reading where category_id = ?", categoryId, function (
//         err,
//         res
//     ) {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         } else {
//             result(null, res);
//         }
//     });
// };

Reading.getReadingByCategoryId = function (categoryId, result) {
  sql.query(
    "Select * from reading join Category on reading.category_id = Category.category_id join Views on reading.reading_id = Views.reading_id where reading.category_id = ? AND Views.is_Active = '0'",
    categoryId,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Reading.getReadingByReadingId = function (readingId, result) {
  sql.query(
    "Select * from reading join Category on reading.category_id = Category.category_id where reading.reading_id = ?",
    readingId,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Reading.getNewReading = function (result) {
  sql.query(
    "SELECT * FROM reading ORDER BY reading_id DESC LIMIT 5;",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Reading;
