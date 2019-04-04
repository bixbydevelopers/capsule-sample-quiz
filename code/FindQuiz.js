var console = require("console")
var lib = require("./lib/util");

const QUIZZES = require("./data/quizzes");

// FindQuiz
exports.function = function(searchTerm) {
  //You can replace with a call to a web api - make sure you map api response to Quiz model
  var quizzesJson = QUIZZES

  //filter based on searchTerm (note that if you use a web api then filtering can be done in the web API itself)
  if (searchTerm) {
    quizzesJson = lib.findItems(QUIZZES, searchTerm)
  }
  var quizzes = []
  //read the questions in the quiz and initialize the state
  for (var i=0; i<quizzesJson.length; i++) {
    var quiz = quizzesJson[i]
    var questions = lib.buildQuestionsFromJson(quiz)
    
    //cannot strt a quiz without any questions
    if (!questions || !questions.length) {
      console.log("Chosen quiz has no questions!")
    } else {
      quiz.questions = questions
      quizzes.push(quiz)
    }
  }
  return quizzes
}
