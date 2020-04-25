"use strict";
module.exports = function (app) {
  var todoAnswer = require("../controller/AnswerController");
  var todoCategory = require("../controller/CategoryController");
  var todoReading = require("../controller/ReadingController");
  var todoQuiz = require("../controller/QuizController");
  var todoViews = require("../controller/ViewsController");
  var todoVocabBox = require("../controller/VocabBoxController")
  var todoChoice = require("../controller/QuestionChoices")
  var todoVocabCard = require("../controller/VocabCardController")



  // todoList Routes
  app
    .route("/answers")
    .get(todoAnswer.list_all_answers)
    .post(todoAnswer.create_a_answer);

  // app.route("/news")
  //   .get(todoNews.list_all_news);

  // app
  //   .route("/tasks/:taskId")
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);

  app.route("/answers/quizs/:quizId")
    .get(todoAnswer.read_a_answer_quiz_id);



  // todoList Routes
  app
    .route("/quizs")
    .get(todoQuiz.list_all_quizs)
    .post(todoQuiz.create_a_quiz); 

  // app
  //   .route("/plans/:planId")
  //   .get(todoPlan.read_a_plan)
  //   .put(todoPlan.update_a_plan)
  //   .delete(todoPlan.delete_a_plan);

  app.get("/score", function (req, res) {
    res.json("Your score") 
  });

  app.route("/categorys")
    .get(todoCategory.list_all_category);

  app.route("/reading")
    .get(todoReading.list_all_Reading)
    .post(todoReading.create_a_reading);

  app.route("/reading/user/:userId")
    .get(todoReading.read_a_reading_category_id);

  app.route("/views")
    .get(todoViews.list_all_views)
    .post(todoViews.create_a_views);
 
  app.route("/categorys/reading")
  .get(todoCategory.list_read_category);

  app.route("/reading/readingId/:readingId")
  .get(todoReading.read_a_reading_id);

  app.route("/newReading")
  .get(todoReading.read_a_reading_new);

  app.route("/reading/interest/:categoryId")
  .get(todoReading.read_a_reading_interest);

  app.route("/vocabBox")
  .get(todoVocabBox.list_all_vocabBox);

  app.route("/choice")
  .get(todoChoice.list_all_choice);

  app.route("/vocabCard")
  .get(todoVocabCard.list_all_vocabCard);

};  
   