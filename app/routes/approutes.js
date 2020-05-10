"use strict";
module.exports = function (app) {
  var todoAnswer = require("../controller/AnswerController");
  var todoCategory = require("../controller/CategoryController");
  var todoReading = require("../controller/ReadingController");
  var todoQuiz = require("../controller/QuizController");
  var todoViews = require("../controller/ViewsController");
  var todoVocabBox = require("../controller/VocabBoxController");
  var todoChoice = require("../controller/QuestionChoices");
  var todoVocabCard = require("../controller/VocabCardController");

  //Answer
  app
    .route("/answers")
    .get(todoAnswer.list_all_answers)
    .post(todoAnswer.create_a_answer);

  app.route("/answers/quizs/:quizId").get(todoAnswer.read_a_answer_quiz_id);

  //Quiz
  app.route("/quizs").get(todoQuiz.list_all_quizs).post(todoQuiz.create_a_quiz);
  app.route("/quiz/:quizId").get(todoQuiz.get_a_quiz_by_id);

  //Choice 
  app.route("/choice/:quizId").get(todoChoice.get_a_choice_by_question_id);
  app.route("/choice").get(todoChoice.list_all_choice);
  //Reading

  app
    .route("/reading")
    .get(todoReading.list_all_Reading)
    .post(todoReading.create_a_reading);
  app
    .route("/reading/user/:userId")
    .get(todoReading.read_a_reading_category_id);
  app.route("/reading/readingId/:readingId").get(todoReading.read_a_reading_id);
  app.route("/newReading").get(todoReading.read_a_reading_new);
  app
    .route("/reading/interest/:categoryId")
    .get(todoReading.read_a_reading_interest);
  //Category
  app.route("/categorys").get(todoCategory.list_all_category);
  app.route("/categorys/reading").get(todoCategory.list_read_category);
  app.route("/categorys/vocab").get(todoCategory.list_vocab_category);

  //Vocab
  app.route("/vocabBox").get(todoVocabBox.list_all_vocabBox);
  app.route("/vocabCard").get(todoVocabCard.list_all_vocabCard);
  app.route("/newVocab").get(todoVocabBox.read_a_vocab_new);

  //others
  app
    .route("/views")
    .get(todoViews.list_all_views)
    .post(todoViews.create_a_views);

  app.get("/score", function (req, res) {
    res.json("Your score");
  });
};
