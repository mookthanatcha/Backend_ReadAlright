var sql = require("./db.js")

var VocabBox = function (vocabBox) {
    this.boxEngName  = vocabBox.boxEngName,
    this.boxThaiName = vocabBox.boxThaiName,
    this.image  = vocabBox.image,
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

// Views.getAllViews = function (result) {
//     sql.query("Select * from Views", function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         } else {
//             console.log("Reading : ", res); 
//             result(null, res);
//         }
//     });
// };
 
// Views.createViews = function(newViews, result) {
//     sql.query("INSERT INTO Views set ?", newViews, function(err, res) {
//       if (err) {
//         console.log("error: ", err);
//         result(err, null);
//       } else {
//         console.log(res.insertId);
//         result(null, res.insertId);
//       }
//     });
//   };

//   Views.deleteViews = function(newViews, result) {
//     sql.query("DELETE FROM Views WHERE category_id = ?';", newViews, function(err, res) {
//       if (err) {
//         console.log("error: ", err);
//         result(err, null);
//       } else {
//         console.log(res.insertId);
//         result(null, res.insertId);
//       }
//     });
//   };
  
 
module.exports = VocabBox;    