var console = require ("console")
var fail = require ("fail")

// UpdateQuiz - Evaluate user's answer and update the quiz state.
exports.function = function(state, answer) {

  if (state.currentQuestion.index >= state.quiz.questions.length) {
    console.log("Unexpected state!")
    return state
  }

  //quiz is completed. nothing to update
  if (state.completed) {
    return state
  }

  var scoreBook = state.scoreBook
  if (!state.completed) {
    //update scoreBook
    var score = buildScore(state.currentQuestion, answer)
    if (score.evaluation) {
      scoreBook.correctAnswerCount += 1
    }
    scoreBook.questionsAnsweredCount += 1
    scoreBook.questionsLeftCount -= 1
    if (!scoreBook.scores) {
      scoreBook.scores = [score]
    } else {
      scoreBook.scores.push(score)
    }

    //update state
    state.lastScore = score
    state.currentQuestion.index += 1

    if (state.currentQuestion.index < state.quiz.questions.length) {
      state.currentQuestion = state.quiz.questions[state.currentQuestion.index]
    } else {
      state.completed = true
    }
  }
  return state
}

function buildScore(currentQuestion, answer) {
  return {
    question: currentQuestion,
    answer: unAliasedAnswer(currentQuestion.options, answer),
    expectedAnswer: getExpectedAnswer(currentQuestion.correctAnswer.acceptedAnswers),
    evaluation: checkAnswer(currentQuestion.correctAnswer.acceptedAnswers, answer)
  }
}

// Check if the answer is correct
function checkAnswer(acceptedAnswers, answer) {
   for (var i=0; i<acceptedAnswers.length; i++) {
     if (acceptedAnswers[i].toLowerCase() == answer.toLowerCase()) {
       return true
     }
   }
   return false
}

//return the answer from alias
function unAliasedAnswer(options, answer) {
  for (var i=0; i<options.length; i++) {
    if (answer.toLowerCase() == options[i].alias.toLowerCase()) {
      return options[i].text
    }
  }
  return answer
}

//picks the longest answer from the acceptedAnswers list as the expected answer
function getExpectedAnswer(acceptedAnswers) {
  var expectedAnswer = ""
  if (acceptedAnswers) {
   for (var i=0; i<acceptedAnswers.length; i++) {
     if (acceptedAnswers[i].length > expectedAnswer.length) {
       expectedAnswer = acceptedAnswers[i]
     }
   }
  }
  return expectedAnswer
}
