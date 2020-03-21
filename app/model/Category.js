"use strict";

var sql = require("./db.js")

var Category = function (category) {
    this.categoryName = category.categoryName,
    this.image = category.image
};

Category.getAllCategory = function (result) {
    sql.query("Select * from category", function (err, res) {
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
