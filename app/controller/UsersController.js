"use strict";

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