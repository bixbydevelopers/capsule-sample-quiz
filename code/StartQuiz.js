var console = require("console")
var lib = require("./lib/util");

const QUIZZES = require("./lib/quizzes");

// FindQuiz
exports.function = function(searchTerm) {
  //You can replace with a call to a web api - make sure you map api response to Quiz model
  var quizzes = QUIZZES

  //filter based on searchTerm (note that if you use a web api then filtering can be done in the web API itself)
  if (searchTerm) {
    quizzes = lib.findItems(QUIZZES, searchTerm)
  }
  //pick a random item
  var item = null
  if (quizzes.length) {
    var index = Math.floor(quizzes.length * Math.random())
    var quiz = quizzes[index]
    var questions = lib.buildQuestionsFromJson(quiz)
    var questionIndex = 0
    var question = questions.length ? questions[questionIndex] : null

    quiz.state = {
      currentQuestion: question,
      currentQuestionNumber: questionIndex,
      correctAnswerCount: 0,
      questionsLeftCount: questions.length,
      started: false,
      completed: false,
      lastAnswerCorrect: false
    }
    
    console.log(quiz.state)
    return quiz
  }
  return null
}
