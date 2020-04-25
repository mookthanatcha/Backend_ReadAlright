"use strict";

var VocabCard = require("../model/VocabCard");

exports.list_all_vocabCard = function(req,res){
    VocabCard.getAllVocabCard(function(err, views){
        console.log("controller");
        if (err) res.send(err);
        console.log("res", views);
        res.send(views);
    })
}