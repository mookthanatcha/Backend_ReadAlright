var sql = require("./db.js")

var VocabCard = function (vocabCard) {
    this.engWord  = vocabCard.engWord,
    this.thaiWord = vocabCard.thaiWord,
    this.sampleSentence = vocabCard.sampleSentence,
    this.vocabBox_id = vocabCard.vocabBox_id
};

VocabCard.createVocabCard = function (newVocabCard, result) {
  sql.query("INSERT INTO VocabCard set ?", newVocabCard, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      res.message = "Okay";
      console.log(res);
      console.log("eiei");
      console.log(res.message);
      console.log(res.insertId);
      result(null, res.insertId, res.message);
    }
  });
};

VocabCard.deleteVocabCard = function (vocabCard_id, result) {
  sql.query("DELETE FROM VocabCard WHERE vocabCard_id = ?", vocabCard_id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res.res);
    }
  });
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
VocabCard.getVocabCardByVocabBoxId = function (VocabId, result) {
    sql.query(
      "Select * from VocabCard c join VocabBox b on c.vocabBox_id = b.vocabBox_id where c.vocabBox_id = ?",
      VocabId,
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  };


module.exports = VocabCard;      