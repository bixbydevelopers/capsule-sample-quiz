var console = require ("console")

// DoQuiz
exports.function = function(quiz, answer, option) {
  var state = quiz.state
  if (state.currentQuestionNumber >= quiz.questions.length) {
    console.log("Unexpected state!")
    return quiz
  }
  state.started = true
  if (!state.completed) {    
    if (answer || option) {
      if (checkAnswer(state.currentQuestion, answer ? answer: option.alias)) {
        state.correctAnswerCount = state.correctAnswerCount + 1
        state.lastAnswerCorrect = true
      } else {
        state.lastAnswerCorrect = false    
      }
      state.currentQuestionNumber = state.currentQuestionNumber+1
      if (state.currentQuestionNumber < quiz.questions.length) {
        state.currentQuestion = quiz.questions[state.currentQuestionNumber]
        state.questionsLeftCount = quiz.questions.length - state.currentQuestionNumber
      } else {
        quiz.state.completed = true
      }
    }
  }
  return quiz
}

// Check if the answer is correct
function checkAnswer(question, answer) {
   return question.answer >= 0 && answer && question.options && (question.answer < question.options.length) &&
            ((answer.toLowerCase() == question.options[question.answer].text.toLowerCase()) || (answer.toLowerCase() == question.options[question.answer].alias.toLowerCase()))
}
