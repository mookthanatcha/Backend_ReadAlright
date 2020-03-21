var sql = require("./db.js")

var Reading = function (reading) {
    this.title = reading.title,
        this.content = reading.content,
        this.image = reading.image,
        this.category_id = reading.category_id,
        this.isActive = reading.isActive
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

Reading.getReadingByCategoryId = function(categoryId, result) {
    sql.query("Select * from reading join category on reading.category_id = category.category_id where reading.category_id = ?", categoryId, function(
      err,
      res
    ) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    });
  };

module.exports = Reading;