"use strict";

var Views = require("../model/Views.js");

exports.list_all_views = function(req,res){
    Views.getAllViews(function(err, views){
        console.log("controller");
        if (err) res.send(err);
        console.log("res", views);
        res.send(views);
    })
}

exports.create_a_views = function (req, res) {
    var new_views = new Views(req.body);


    Views.createViews(new_views, function (err, views) {
        if (err) res.send(err);
        res.json(views);
    });
}  
  
exports.delete_a_views = function (req, res) { 
    var new_views = new Views(req.body);


    Views.createViews(new_views, function (err, views) {
        if (err) res.send(err);
        res.json(views);
    });
}