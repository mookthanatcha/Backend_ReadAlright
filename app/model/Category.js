"use strict";

var sql = require("./db.js")

var Category = function (category) {
    this.categoryName = category.categoryName,
    this.typeName = category.typeName,
    this.image = category.image
};

Category.createCate = function (newCate, result) {
    sql.query("INSERT INTO Category set ?", newCate, function (err, res) {
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

Category.getAllCategory = function (result) {
    sql.query("Select * from Category", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            console.log("answer: ", res);
            result(null, res) 
        }
    }) 
}; 

Category.deleteCate = function (category_id, result) {
    sql.query("DELETE FROM Category WHERE category_id = ?", category_id, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res.res);
      }
    });
  };

Category.getReadCategory = function (result) {
    sql.query("SELECT * FROM Category where typeName = 'Reading'", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            console.log("answer: ", res);
            result(null, res)
        }
    })
};

Category.getvocabCategory = function (result) {
    sql.query("SELECT * FROM Category where typeName = 'vocab'", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err)
        } else {
            console.log("answer: ", res);
            result(null, res)
        }
    })
};


module.exports = Category;
