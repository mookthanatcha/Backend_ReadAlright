var sql = require("./db.js")

var VocabBox = function (vocabBox) {
    this.boxEngName  = vocabBox.boxEngName,
    this.boxThaiName = vocabBox.boxThaiName,
    this.category_id = vocabBox.category_id
};

VocabBox.getAllVocabBox = function(result) {
    sql.query("Select * from VocabBox", function(err,res){
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log("Reading : ", res);
            result(null, res);
        }
    });
}

VocabBox.getNewVocab = function (result) {
    sql.query(
      "SELECT * FROM VocabBox b join VocabCard c on b.vocabBox_id = c.vocabBox_id GROUP BY b.boxEngName order by c.vocabBox_id DESC LIMIT 5;",
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

  VocabBox.getVocabBoxByCateId = function (CateId, result) {
    sql.query(
      "Select * from VocabBox b join Category c on c.category_id = b.category_id where c.category_id = ?",
      CateId,
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
  
 
module.exports = VocabBox;    