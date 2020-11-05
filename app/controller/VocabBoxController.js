"use strict";

var VocabBox = require("../model/VocabBox");

exports.create_a_vocab = function (req, res) {
    var new_vocab = new VocabBox(req.body);
    VocabBox.createVocab(new_vocab, function (err, quiz) {
        if (err) res.send(err);
        res.json({ error: "Invalid input", msg: res.message, quiz });
    });
};

exports.delete_a_VocabBox = function (req, res) {
    VocabBox.deleteVocabBox(req.params.vocabBox_id, function (err, wordCol) {
        if (err) res.send(err);
        res.json({ wordCol });
    });
}

exports.list_all_vocabBox = function (req, res) {
    VocabBox.getAllVocabBox(function (err, views) {
        console.log("controller");
        if (err) res.send(err);
        console.log("res", views);
        res.send(views);
    })
}

exports.get_AllVocabBoxAndCate= function (req, res) {
    VocabBox.getAllVocabBoxAndCate(function (err, views) {
        console.log("controller");
        if (err) res.send(err);
        console.log("res", views);
        res.send(views);
    })
}

exports.read_a_vocab_new = function (req, res) {
    VocabBox.getNewVocab(function (err, answer) {
        console.log("controller");
        if (err) res.send(err);
        console.log("res", answer);
        res.send(answer);
    });
};

exports.list_vocabBox_by_cateID = function (req, res) {
    VocabBox.getVocabBoxByCateId(req.params.cateId, function (err, reading) {
        if (err) res.send(err);
        res.json({ reading });
    });
}

exports.list_MaybeYouLikeVocab = function (req, res) {
    VocabBox.getMaybeYouLikeVocab(req.params.category_id, function (err, reading) {
        if (err) res.send(err);
        res.json({ reading });
    });
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