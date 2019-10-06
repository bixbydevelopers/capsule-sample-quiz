const util = require("./lib/util");

// Will repromt if the user does not give a valid input. Set to false to not reprompt
// Futue enhancement would be to reprompt only n times and then give up (suggest n = 1 or 2)
const reprompt = true;

var console = require('console')

module.exports.function = function updateQuiz(quiz, answer) {

  answer = answer.toLowerCase();
  const i = quiz.index;
  const options = quiz.questions[i].options;
  const hasOptions = !(options === undefined || options.length == 0)
  const correctAnswers = quiz.questions[i].correctAnswer.acceptedAnswers;
  const correctAlias = String(quiz.questions[i].correctAnswer.acceptedAlias).toLowerCase();
  const currentQuestion = quiz.questions[i];
  quiz.questions[i].answer = answer;
  quiz.questions[quiz.index].invalidAnswer = false;
  var correct = false;
  var answeredOption = false;

  // Check for match with answer option e.g. "California" or "B Calfornia" assuming B was the option letter
  // Matches answer only and answer in sentence 
  correct = util.checkAnswerMatch(correctAnswers, answer)

  var possOptionAlias = []
  if (!correct && hasOptions) { // Check if user answered an incorrect option text, also contruct possible aliases
    ret = util.checkIncorrectOption(options, answer)
    answeredOption = ret.answeredOption;
    possOptionAlias = ret.possOptionAlias

    if (!answeredOption) { // Did user answer with an alias and was the alias correct
      ret = util.checkAliasMatch(answer, possOptionAlias, correctAlias)
      answeredOption = ret.answeredOption;
      correct = ret.correct
    }
  }

  if (correct) {
    quiz.questions[quiz.index].correct = true;
    quiz.score++;
  }

  if (!correct && !answeredOption && hasOptions && reprompt) {
    // Answered with an invalid option. Reprompt
    quiz.questions[quiz.index].invalidAnswer = true;
    var validOptionsText = util.arrayToListForSpeech(possOptionAlias)
    quiz.textToSpeak = util.buildQuestionToSpeak(quiz.questions[quiz.index]) + ". Please answer with a letter: " + validOptionsText || " ";
  } else if (quiz.index < quiz.questions.length - 1) {
    quiz.index++;
    quiz.textToSpeak = util.buildQuestionToSpeak(quiz.questions[quiz.index]) || " ";
  } else {
    quiz.completed = true;
  }
  return quiz;
}
