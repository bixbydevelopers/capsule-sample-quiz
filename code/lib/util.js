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
    questions.push(buildQuestionFromJson(quizJson.questions[i]))
  }
  return questions
}

function buildQuestionFromJson(questionJson) {
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
    var question = questionJson
    question.options = options
    question.questionToSpeak = buildQuestionToSpeak(questionJson.question, options)
    console.log("question", question)
    return question
}

function buildQuestionToSpeak(question, options) {
  optionsString = ''
  for (var i=0; i<options.length; i++) {
    optionsString += options[i].alias + '... ' + options[i].text + (i+1 < options.length ? ', ' : '')
  }
  return question + ' ' + optionsString
}