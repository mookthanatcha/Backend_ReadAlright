"use strict";

var Reading = require("../model/Reading.js");

exports.list_all_Reading = function (req, res) {
    Reading.getAllReading(function (err, answer) {
        console.log("controller");
        if (err) res.send(err);
        console.log("res", answer);
        res.send(answer);
    });
};

exports.read_a_reading_category_id = function (req, res) {
    Reading.getReadingByCategoryId(req.params.categoryId, function (err, reading) {
        if (err) res.send(err);
        res.json({ reading,"non":"mook"});
    });
};

exports.create_a_reading = function (req, res) {
    var new_reading = new Quiz(req.body);
    Reading.createReading(new_reading, function (err, quiz) {
      if (err) res.send(err);
      res.json({ error: "Invalid input", msg: res.message, quiz });
    });
  };

  

// categoryIdList= [5,7,20,5,5]

// for(int i = 0;i<categoryIdList.length;i++){

//     axios.get("http://localhost:3000/reading/categorys/"+categoryIdList[i]).then((response{
//         if(response.statusCode=200){
//             data
//         }
//     }))
// }

