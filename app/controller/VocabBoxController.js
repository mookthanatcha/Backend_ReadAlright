"use strict";

var VocabBox = require("../model/VocabBox");

exports.list_all_vocabBox = function(req,res){
    VocabBox.getAllVocabBox(function(err, views){
        console.log("controller");
        if (err) res.send(err);
        console.log("res", views);
        res.send(views);
    })
}

// exports.create_a_views = function (req, res) {
//     var new_views = new Views(req.body);


//     Views.createViews(new_views, function (err, views) {
//         if (err) res.send(err);
//         res.json(views);
//     });
// }  
  
// exports.delete_a_views = function (req, res) { 
//     var new_views = new Views(req.body);


//     Views.createViews(new_views, function (err, views) {
//         if (err) res.send(err);
//         res.json(views);
//     });
// }