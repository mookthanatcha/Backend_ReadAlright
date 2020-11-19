"use strict";

const Admin = require("../model/admin");
// const User = require("../model/Users");
// var Users = require("../model/Users");

exports.create_a_admin = function (req, res) {
  var new_admin = new Admin(req.body);

  //handles null error

  Admin.createAdmin(new_admin, function (err, user) {
    if (err) res.send(err);
    res.json({ user });
  });
};

exports.list_all_admin = function (req, res) {
    Admin.getAllAdmin(function (err, quiz) {
      console.log("controller");
      if (err) res.send(err);
      console.log("res", quiz);
      res.status(200).json({ quiz });
    });
  };