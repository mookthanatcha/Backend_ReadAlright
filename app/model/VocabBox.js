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


VocabBox.updateVocabBox = function (newVocab, vocabBoxId, result) {
  sql.query("UPDATE VocabBox set ? where vocabBox_id = " + vocabBoxId, newVocab, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      res.message = "Okay";
      console.log(res);
      result(null, res);
    }
  });
};

VocabBox.deleteVocabBox = function (vocabBox_id, result) {
  sql.query("DELETE FROM VocabBox WHERE vocabBox_id = ?", vocabBox_id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res.res);
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

VocabBox.getAllVocabBoxAndCate = function(result) {
  sql.query("Select distinct * from VocabBox b join Category c on b.category_id = c.category_id join VocabCard vc where b.vocabBox_id = vc.vocabBox_id GROUP BY b.boxEngName;", function(err,res){
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

  VocabBox.getVocabBoxByVocabBoxId2 = function (vocabBoxId, result) {
    sql.query(
      "SELECT * FROM VocabBox b join VocabCard c on b.vocabBox_id = c.vocabBox_id where b.vocabBox_id = ?",
      vocabBoxId,
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

  VocabBox.getVocabByVocabBoxId = function (vocabBoxId, result) {
    sql.query(
      "Select VocabBox.*,Category.* from VocabBox join Category on VocabBox.category_id = Category.category_id where VocabBox.vocabBox_id = ?",
      vocabBoxId,
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