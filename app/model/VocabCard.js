var sql = require("./db.js")

var VocabCard = function (vocabCard) {
    this.engWord  = vocabCard.engWord,
    this.thaiWord = vocabCard.thaiWord,
    this.sampleSentence = vocabCard.sampleSentence,
    this.vocabBox_id = vocabCard.vocabBox_id
};

VocabCard.getAllVocabCard = function(result) {
    sql.query("Select * from VocabCard", function(err,res){
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log("Reading : ", res);
            result(null, res);
        }
    });
}
module.exports = VocabCard;     