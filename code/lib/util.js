var console = require("console");

function findItems(items, searchTerm) {
  var matches = []
  for (var i = 0; i < items.length; i++) {
    if (matchTag(items[i].tags, searchTerm)) {
      matches.push(items[i])
    }
  }
  return matches
}

//returns true if there is an element in a list of tags that matches a specific tag
function matchTag(tags, tag) {
  for (var i = 0; i < tags.length; i++) {
    if (tag.toLowerCase() == tags[i].toLowerCase()) {
      return true
    }
  }
  return false
}

function buildQuestionsFromJson(quizJson) {
  var questions = []
  for (var i = 0; i < quizJson.questions.length; i++) {
    questions.push(buildQuestionFromJson(quizJson.questions[i], i))
  }
  return questions
}

function buildCorrectAnswerText(question) {
  if (Array.isArray(question.answer)) {
    return question.answer[0];
  } else if (typeof question.answer === 'number') {
    return question.options[question.answer];
  } else if (typeof question.answer === 'string') {
    return question.answer;
  }
}

function buildQuestionFromJson(questionJson) {
  if (!questionJson) {
    return null
  }
  var options = []
  if (questionJson.options) {
    for (var i = 0; i < questionJson.options.length; i++) {
      options.push({
        text: questionJson.options[i],
        alias: String.fromCharCode('A'.charCodeAt(0) + i)
      })
    }
  }

  var acceptedAnswers = buildAcceptedAnswers(questionJson.answer, options);

  var question = {
    text: questionJson.question,
    options: options,
    correctAnswer: {
      acceptedAnswers: acceptedAnswers.answers,
      acceptedAlias: acceptedAnswers.alias,
      explanation: questionJson.explanation,
      text: buildCorrectAnswerText(questionJson)
    }
  }
  return question
}

// 
function buildQuestionToSpeak(question) {
  var options = question.options
  optionsString = ''
  for (var i = 0; i < options.length; i++) {
    optionsString += options[i].alias + '... ' + options[i].text + (i + 1 < options.length ? ', ... ' : '')
  }
  return optionsString;
}

function buildAcceptedAnswers(answer, options) {
  var acceptedAnswers = []
  var alias;

  if (Array.isArray(answer)) { //is answer an array?
    for (var i = 0; i < answer.length; i++) {
      var acceptedAnswer = buildAcceptedAnswer(answer[i], options)
      acceptedAnswers = acceptedAnswers.concat(acceptedAnswer.answer);
      if (acceptedAnswer.alias) {
        alias = acceptedAnswer.alias;
      }
    }
  } else {
    var acceptedAnswer = buildAcceptedAnswer(answer, options)
    acceptedAnswers = acceptedAnswer.answer;
    if (acceptedAnswer.alias) {
      alias = acceptedAnswer.alias;
    }
  }
  return {
    answers: acceptedAnswers,
    alias: alias
  }
}

function buildAcceptedAnswer(answer, options) {
  var acceptedAnswer
  var alias
  if (typeof answer === 'number' && options && answer < options.length) {
    alias = options[answer].alias
    acceptedAnswer = options[answer].text
  } else if (answer) {
    acceptedAnswer = answer
    //also find alias matching the answer
    if (options) {
      for (var i = 0; i < options.length; i++) {
        if (options[i].text == answer) {
          alias = options[i].alias;
        }
      }
    }
  }

  return {
    answer: acceptedAnswer,
    alias: alias
  }
}

function buildQuizzes(searchTerm) {
  var quizzes = require("../data/quizzes");
  if (searchTerm) {
    const foundQuiz = findItems(quizzes, searchTerm)
    if (foundQuiz.length > 0) {
      quizzes = foundQuiz;
    }
  }
  var formattedQuizzes = [];
  //read the questions in the quiz and initialize the state
  for (var i = 0; i < quizzes.length; i++) {
    var quiz = quizzes[i];
    quiz.completed = false;
    quiz.score = 0;
    quiz.index = 0;
    var questions = buildQuestionsFromJson(quiz);
    quiz.textToSpeak = buildQuestionToSpeak(questions[0]);
    //cannot start a quiz without any questions
    if (!questions || !questions.length) {
      console.log("Chosen quiz has no questions!");
    } else {
      quiz.questions = questions;
      formattedQuizzes.push(quiz);
    }
  }
  return formattedQuizzes;
}

function arrayToListForSpeech(input) {
  var output = input.join();
  output = output.replace(/,/g, '...');
  output = output.substring(0, output.lastIndexOf("...")) + "... or " + output.substring(output.lastIndexOf("...") + 3, output.length) + "..."
  output = output.toUpperCase();
  return output;
}

// ASR Aliases to handle ASR variations for "A", "B" "C" or "D" etc
// This is a temporary workaround for an in progress bug that will be fixed
const inputAliases = {
  "a": "a",
  "hey": "a",
  "b": "b",
  "be": "b",
  "bee": "b",
  "c": "c",
  "see": "c",
  "sea": "c",
  "si": "c",
  "d": "d",
  "t": "d",
  "de": "d",
}
// Regular expresion to find ASR alias - creatd by ASRaliases const
const aliasesRE = "^(" + String(Object.getOwnPropertyNames(inputAliases)).replace('/"/g', '').replace(/,/g, "|") + ")";

function checkAnswerMatch(correctAnswers, answer) {
  var correct = false;
  correctAnswers.forEach(o => {
    var lowerO = o.toLowerCase()
    var corrAnsRegExp = "^" + lowerO + "$|" + aliasesRE + " " + lowerO + "$"
    if (answer.match(corrAnsRegExp)) {
      correct = true;
    }
  });
  return correct;
}

function checkIncorrectOption(options, answer) {
  var answeredOption = false;
  var possOptionAlias = []
  options.forEach(o => {
    lowerO = o.text.toLowerCase();
    optionsRegExp = lowerO + "| " + lowerO + " |^" + lowerO + " | " + lowerO + "$";
    if (answer.match(optionsRegExp)) {
      answeredOption = true;
    }
    var x = o.alias.toLowerCase()
    possOptionAlias.push(x)
  })

  return {
    answeredOption: answeredOption,
    possOptionAlias: possOptionAlias
  }
}

function checkAliasMatch(answer, possOptionAlias, correctAlias) {
  var answeredOption = false;
  var correct = false;
  var aliasMatch = inputAliases[answer];
  if (aliasMatch) {
    if (possOptionAlias.indexOf(aliasMatch) > -1) {
      answeredOption = true;
      if (aliasMatch == correctAlias) {
        correct = true;
      }
    }
  }
  return {
    answeredOption: answeredOption,
    correct: correct
  }
}

module.exports = {
  buildQuizzes: buildQuizzes,
  buildQuestionToSpeak: buildQuestionToSpeak,
  arrayToListForSpeech: arrayToListForSpeech,
  checkAnswerMatch: checkAnswerMatch,
  checkIncorrectOption: checkIncorrectOption,
  checkAliasMatch: checkAliasMatch,
}
