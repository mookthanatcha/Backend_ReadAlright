"use strict";

var Category = require("../model/Category");

exports.list_all_category = function (req, res) {
    Category.getAllCategory(function (err, category) {
        console.log("controller");
        if (err) res.send(err);
        console.log("res", category);
        res.send(category);
    });
};

exports.list_read_category = function (req, res) {
    Category.getReadCategory(function (err, category) {
        console.log("controller");
        if (err) res.send(err);
        console.log("res", category);
        res.send(category);
    });
};

exports.list_vocab_category = function (req, res) {
    Category.getvocabCategory(function (err, category) {
        console.log("controller");
        if (err) res.send(err);
        console.log("res", category);
        res.send(category);
    });
};