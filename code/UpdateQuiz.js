const { buildQuestionToSpeak } = require("./lib/util");

module.exports.function = function updateQuiz (quiz, answer) {
  const i = quiz.index;
  const correctAnswers = quiz.questions[i].correctAnswer.acceptedAnswers;
  const currentQuestion = quiz.questions[quiz.index];
  
  currentQuestion.options.forEach(o=>{
    if(answer.toLowerCase() == o.alias.toLowerCase()){
      answer = o.text;
    }
  });
  
  quiz.questions[i].answer = answer;
  var correct = false;
  correctAnswers.forEach(o=>{
    if(o.toLowerCase() == answer.toLowerCase()){
      correct = true;
    }
  });
  
  if(correct){
    quiz.questions[quiz.index].correct = true;
    quiz.score++;
  }
  
  if(quiz.index < quiz.questions.length - 1){
    quiz.index++;
  } else {
    quiz.completed = true;
  }
  
  return quiz;
}
