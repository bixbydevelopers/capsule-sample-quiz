//Start the quiz. Initialize the quiz state.
exports.function = function(quiz) {
  state = {
    quiz: quiz,
    started: true,
    completed: quiz.questions.length == 0,
    currentQuestion: quiz.questions[0],
    lastScore: null,
    scoreBook: {
      scores: [],
      correctAnswerCount: 0,
      questionsAnsweredCount: 0,
      questionsLeftCount: quiz.questions.length,
    }
  }

  return state
}
