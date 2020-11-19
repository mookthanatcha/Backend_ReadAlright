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
  var todoTricks = require("../controller/TricksController");
  var todoWordCol = require("../controller/WordCollectionController");
  var todoReadingPre = require("../controller/ReadingPreTestController")
  var todoQuizPre = require("../controller/QuizPretestController")
  var todoSuggestion_User = require("../controller/Suggestion_UserController")
  var todoUser = require("../controller/UsersController");
  var todoChoicePretest = require("../controller/ChoicePreController");
  var todoQChoice = require("../controller/QuestionChoices");
  var todoQPre = require("../controller/QuizPretestController");
  var todoAdmin = require("../controller/adminController");


  app.route("/createAdmin").post(todoAdmin.create_a_admin).get(todoAdmin.list_all_admin);

  app.route("/QPre").post(todoQPre.create_a_QPre)

  app.route("/QChoice").post(todoQChoice.create_a_QChoice);
  app.route("/admin/deleteChoice/:choice_id").delete(todoQChoice.delete_a_choice);
  app.route("/admin/updateChoice/:choiceId").put(todoChoice.update_a_choice);



  app.route("/ChoicePretest").post(todoChoicePretest.create_a_ChoicePretest)
  app.route("/admin/deleteChoicePre/:choices_id").delete(todoChoicePretest.delete_a_choicePre);


  //User
  app.route("/user").post(todoUser.create_a_user);
  app.route("/user/:uuId").get(todoUser.get_UserByUuid);
  //Answer
  app
    .route("/answers")
    .get(todoAnswer.list_all_answers)
    .post(todoAnswer.create_a_answer);

  app.route("/answers/quizs/:quizId").get(todoAnswer.read_a_answer_quiz_id);
  app.route("/answer/suggestions/:userId").get(todoAnswer.get_suggestion_user_id);

  // Suggeston_User
  app.route("/suggestion_user").post(todoSuggestion_User.create_a_suggestion).get(todoSuggestion_User.list_all_suggestion)
  app.route("/suggestion_user/:suggestion").delete(todoSuggestion_User.delete_a_suggestion);



  //Quiz
  app.route("/quizs").get(todoQuiz.list_all_quizs).post(todoQuiz.create_a_quiz);
  app.route("/quiz/:quizId").get(todoQuiz.get_a_quiz_by_id);
  app.route("/quiz/type/:type/:reading_id").get(todoQuiz.get_a_quiz_by_type);
  app.route("/quizInContent/:reading_id").get(todoQuiz.listChalengeInContent)
  app.route("/admin/deleteQuiz/:question_id").delete(todoQuiz.delete_a_Quiz);
  app.route("/admin/updateQuiz/:quizId").put(todoQuiz.update_a_Quiz);



  //Choice 
  app.route("/choice/:quizId").get(todoChoice.get_a_choice_by_question_id);
  app.route("/choice").get(todoChoice.list_all_choice).post(todoChoice.create_a_QChoice);
  app.route("/correctChoices").get(todoChoice.list_correct_choice);


  //Reading

  app.route("/reading").get(todoReading.list_all_Reading).post(todoReading.create_a_reading);
  app.route("/reading/user/:userId").get(todoReading.read_a_reading_category_id);
  app.route("/reading/:readingId").put(todoReading.update_a_reading);
  app.route("/reading/readingId/:readingId").get(todoReading.read_a_reading_id);
  app.route("/newReading").get(todoReading.read_a_reading_new);
  app.route("/reading/interest/:categoryId").get(todoReading.read_a_reading_interest);
  app.route("/admin/deleteReading/:reading_id").delete(todoReading.delete_a_reading);

  app.route("/reading/last").get(todoReading.get_reading_last);

  //Category
  app.route("/categorys").get(todoCategory.list_all_category).post(todoCategory.create_a_cate);
  app.route("/categorys/reading").get(todoCategory.list_read_category);
  app.route("/categorys/vocab").get(todoCategory.list_vocab_category);
  app.route("/admin/deleteCate/:category_id").delete(todoCategory.delete_a_Cate);
  // app.route("/categorys/admin").get(todoCategory.get_Cate_InAdmin);

  //Vocab
  app.route("/vocabBox").get(todoVocabBox.list_all_vocabBox).post(todoVocabBox.create_a_vocab);
  app.route("/vocabBox/:vocabBoxId").put(todoVocabBox.update_a_vocab_box).get(todoVocabBox.vocabBox_a_vocabBox_id);
  app.route("/vocabBox/:cateId").get(todoVocabBox.list_vocabBox_by_cateID);
  app.route("/vocabBox/maybeYouLike/:category_id").get(todoVocabBox.list_MaybeYouLikeVocab);
  app.route("/admin/deleteVocabBox/:vocabBox_id").delete(todoVocabBox.delete_a_VocabBox);
  app.route("/vocabBoxAndCate").get(todoVocabBox.get_AllVocabBoxAndCate);
  app.route("/vocabBox/id/:vocabBoxId").get(todoVocabBox.list_vocabBox_by_vocabBoxId2);

  app.route("/newVocab").get(todoVocabBox.read_a_vocab_new);

  app.route("/vocabCard").get(todoVocabCard.list_all_vocabCard).post(todoVocabCard.create_a_vocabCard);
  app.route("/vocabCard/:vocabCardId").put(todoVocabCard.update_a_vocab_card);
  app.route("/vocabCard/:vocabBoxId").get(todoVocabCard.list_vocabCard_by_vocabBoxID)
  app.route("/admin/deleteVocabCard/:vocabCard_id").delete(todoVocabCard.delete_a_VocabCard);

  //others 
  app
    .route("/views")
    .get(todoViews.list_all_views)
    .post(todoViews.create_a_views);

  app.get("/score", function (req, res) {
    res.json("Your score");
  });

  // app.route("/pretest").get(todoQuiz.list_Pretest);
  app.route("/suggestion").get(todoQuiz.list_Suggestion);
  app.route("/tricks").get(todoTricks.list_all_tricks).post(todoTricks.create_a_trick);
  app.route("/getTricksByTrickID/:tricks_id").get(todoTricks.getTricks_by_TrickID);
  app.route("/admin/deleteTrick/:tricks_id").delete(todoTricks.delete_a_tricks);


  app.route("/wordCol").get(todoWordCol.list_all_word).post(todoWordCol.create_a_word);
  app.route("/wordCol/del/:wordEng").delete(todoWordCol.delete_a_words);
  app.route("/wordCol/:userId").get(todoWordCol.get_WordByUserId);

  app.route("/ReadingPre/:reading_Pretest_id").get(todoReadingPre.getReadingPretestById);

  app.route("/QuizPre/:reading_Pretest_id").get(todoQuizPre.list_QuizPre);
  app.route("/QuizPre/question/:quizId").get(todoQuizPre.get_a_quiz_by_id);
  app.route("/QuizPre/question/reading/:readingId").get(todoQuizPre.get_Quiz_Pretest_by_Id);
  app.route("/admin/deleteQPre/:question_pretest_id").delete(todoQPre.delete_a_QPre);


};
