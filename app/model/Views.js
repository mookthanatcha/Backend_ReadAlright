var sql = require("./db.js")

var Views = function (views) {
    this.numOfView  = views.numOfView,
    this.category_id = views.category_id,
    this.user_id  = views.user_id,
    this.reading_id = views.reading_id,
    this.vocabBox_id = views.vocabBox_id,
    this.is_Active = views.is_Active
};

Views.getAllViews = function (result) {
    sql.query("Select * from Views", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log("Reading : ", res);
            result(null, res);
        } 
    }); 
};
 
Views.createViews = function(newViews, result) {
    sql.query("INSERT INTO Views set ?", newViews, function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });
  };

  Views.deleteViews = function(newViews, result) {
    sql.query("DELETE FROM Views WHERE category_id = ?';", newViews, function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });
  };
  
 
module.exports = Views;    