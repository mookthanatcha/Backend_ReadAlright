"use strict";

var sql = require("./db.js")

var Category = function (category) {
    this.categoryName = category.categoryName,
    this.typeName = category.typeName,
    this.image = category.image
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
    sql.query("SELECT * FROM Category where typeName = 'Vocab'", function (err, res) {
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
