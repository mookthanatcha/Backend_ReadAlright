"use strict";

const User = require("../model/Users");
// const User = require("../model/Users");
var Users = require("../model/Users");

exports.create_a_user = function (req, res) {
  var new_user = new Users(req.body);

  //handles null error

  Users.createUser(new_user, function (err, user) {
    if (err) res.send(err);
    res.json({ user });
  });
};

exports.get_UserByUuid = function (req, res) {
  User.getUserByUuid(req.params.uuId, function (err, user) {
    if (err) res.send(err);
    res.json({ user });
  });
}
exports.update_a_user = function (req, res) {
  var new_user = new Users(req.body);
  User.updateUsere(new_user, req.params.uuId, function (err, user) {
    if (err) res.send(err);
    res.json({ error: "Invalid input", msg: res.message, user });
  });
};

