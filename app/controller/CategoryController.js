"use strict";

var Category = require("../model/Category");

exports.create_a_cate = function (req, res) {
    var new_cate = new Category(req.body);
  
    //handles null error
  
    Category.createCate(new_cate, function (err, word) {
      if (err) res.send(err);
      res.json({ word });
    });
  };

  exports.delete_a_Cate = function (req, res) {
    Category.deleteCate(req.params.category_id, function (err, wordCol) {
      if (err) res.send(err);
      res.json({ wordCol });
    });
  }

exports.list_all_category = function (req, res) {
    Category.getAllCategory(function (err, category) {
        console.log("controller");
        if (err) res.send(err);
        console.log("res", category);
        res.send(category);
    });
};

// exports.get_Cate_InAdmin= function (req, res) {
//   Category.getCateInAdmin(function (err, category) {
//       console.log("controller");
//       if (err) res.send(err);
//       console.log("res", category);
//       res.send(category);
//   });
// };

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