var console = require ("console")

// DoQuiz
exports.function = function(quiz, answer) {

  if (quiz.state.currentQuestion.index >= quiz.questions.length) {
    console.log("Unexpected state!")
    return quiz
  }

  //quiz is completed. nothing to update
  if (quiz.state.completed) {
    return quiz
  }

  if (!answer) {
    //we require an answer, but none was given. throw error and prompt.
    throw fail.checkedError("Throw an error to prompt for answer", "MissingAnswer");
  }

  var state = quiz.state
  var scoreBook = quiz.scoreBook
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
    state.started = true
    state.lastScore = score
    state.currentQuestion.index += 1

    if (state.currentQuestion.index < quiz.questions.length) {
      state.currentQuestion = quiz.questions[state.currentQuestion.index]
    } else {
      state.completed = true
    }
  }
  return quiz
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
