var console = require("console")
var lib = require("./lib/util");

const QUIZZES = require("./lib/quizzes");

// FindQuiz
exports.function = function(searchTerm) {
  //You can replace with a call to a web api - make sure you map api response to Quiz model
  var quizzesJson = QUIZZES

  //filter based on searchTerm (note that if you use a web api then filtering can be done in the web API itself)
  if (searchTerm) {
    quizzesJson = lib.findItems(QUIZZES, searchTerm)
  }
  //pick a random item
  var item = null
  if (quizzesJson.length) {
    var index = Math.floor(quizzesJson.length * Math.random())
    var quiz = quizzesJson[index]
    var questions = lib.buildQuestionsFromJson(quiz)
    var questionIndex = 0
    var question = questions.length ? questions[questionIndex] : null

    quiz.questions = questions

    quiz.state = {
      started: false,
      completed: false,
      currentQuestion: question,
      lastScore: null
    }

    quiz.scoreBook = {
      scores: [],
      correctAnswerCount: 0,
      questionsAnsweredCount: 0,
      questionsLeftCount: questions.length,
    }

    console.log(quiz)
    return quiz
  }
  return null
}
