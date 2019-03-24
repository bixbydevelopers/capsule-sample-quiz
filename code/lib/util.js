var console = require("console")

exports.findItems = findItems
exports.buildQuestionsFromJson = buildQuestionsFromJson

function findItems(items, searchTerm) {
   var matches = []
   //a lot can be improved here...
   for (var i=0; i<items.length; i++) {
      if (items[i].tags) {
        for (var j=0; j<items[i].tags.length; j++) {
          if (searchTerm.toLowerCase() == items[i].tags[j].toLowerCase()) {
             matches.push(items[i])
             break
          }
        }
      }
   }
   return matches
}

function buildQuestionsFromJson(quizJson) {
  var questions = []
  for (var i=0; i<quizJson.questions.length; i++) {
    questions.push(buildQuestionFromJson(quizJson.questions[i], i))
  }
  return questions
}

function buildQuestionFromJson(questionJson, index) {
    if (!questionJson) {
        return null
    }
    var options = []
    if (questionJson.options) {
      for (var i=0; i<questionJson.options.length; i++) {
        options.push({
          text: questionJson.options[i],
          alias: String.fromCharCode('A'.charCodeAt(0) + i)
        })
      }
    }
    var question = {
      textToDisplay: questionJson.question,
      textToSpeak: buildQuestionToSpeak(questionJson.question, options),
      options: options,
      index: index,
      correctAnswer: {
         acceptedAnswers: buildAcceptedAnswers(questionJson.answer, options),
         explanation: questionJson.explanation
      }
    }
    return question
}

function buildQuestionToSpeak(question, options) {
  optionsString = ''
  for (var i=0; i<options.length; i++) {
    optionsString += options[i].alias + '... ' + options[i].text + (i+1 < options.length ? ', ... ' : '')
  }
  return question + ' ' + optionsString
}

function buildAcceptedAnswers(answer, options) {
   var acceptedAnswers = []
   if (Array.isArray(answer)) { //is answer an array?
     for (var i=0; i<answer.length; i++) {
        acceptedAnswers = acceptedAnswers.concat(buildAcceptedAnswers(answer[i], options))
     }
   } else if (typeof answer === 'number' && options && answer < options.length) {
     acceptedAnswers.push(options[answer].alias)
     acceptedAnswers.push(options[answer].text)
   } else if (answer) {
     acceptedAnswers.push(answer)
     //also push all aliases matching the answer
     if (options) {
       for (var i=0; i<options.length; i++) {
         if (options[i].text == answer) {
           acceptedAnswers.push(options[i].alias)
         }
       }
     }
   }
   return acceptedAnswers
}