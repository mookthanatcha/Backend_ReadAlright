var sql = require("./db.js")

var VocabBox = function (vocabBox) {
    this.boxEngName  = vocabBox.boxEngName,
    this.boxThaiName = vocabBox.boxThaiName,
    this.category_id = vocabBox.category_id,
    this.image = vocabBox.image
};

VocabBox.createVocab = function (newVocab, result) {
  sql.query("INSERT INTO VocabBox set ?", newVocab, function (err, res) {
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
      "Select b.*,c.categoryName from VocabBox b join Category c on c.category_id = b.category_id where c.category_id = ?",
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

  VocabBox.getMaybeYouLikeVocab = function (category_id, result) {
    sql.query(
      "select * from VocabBox where category_id = (select category_id from Category where categoryName = (select connectType from Category  where category_id = ?));",
      category_id,
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