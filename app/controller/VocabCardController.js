"use strict";

const { createVocab } = require("../model/VocabCard");
var VocabCard = require("../model/VocabCard");

exports.create_a_vocabCard = function (req, res) {
    var new_vocab = new VocabCard(req.body);
    VocabCard.createVocabCard(new_vocab, function (err, quiz) {
      if (err) res.send(err);
      res.json({ error: "Invalid input", msg: res.message, quiz });
    }); 
  };

exports.list_all_vocabCard = function(req,res){
    VocabCard.getAllVocabCard(function(err, views){
        console.log("controller");
        if (err) res.send(err);
        console.log("res", views);
        res.send(views);
    })
}

exports.list_vocabCard_by_vocabBoxID = function(req,res){
    console.log("-------------")
    VocabCard.getVocabCardByVocabBoxId(req.params.vocabBoxId, function (err, reading) {
        if (err) res.send(err);
        res.json({ reading});
    });
}