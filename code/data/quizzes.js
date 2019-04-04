module.exports = [
  {
    title: "Funny Quiz",
    tags: ["funny", "animal"], //used to find this quiz
    image: {url: '/images/Dogs.jpg'}, //optional
    questions: [
      {
        question: "What do cats like to eat on a hot day?",
        options: ["Mice cream", "Ice Cream", "Hot Cream"],
        answer: 0
      },
      {
        question: "What do you call a cold dog?",
        options: ["Frozen", "Hot dog", "Chilli Dog"],
        //you can enter the answer string instead of using index
        answer: "Chilli Dog",
        //you can optionally provide an explanation
        explanation: "Because it's cold. Get it?",
      }
    ]
  },
  {
    title: "President names",
    tags: ["president", "presidents", "quote", "quotes", "historical", "history"], //used to find this quiz
    image:{url: '/images/President.jpg'}, //optional
    questions: [
      {
        question: "Which president said 'Efforts and courage are not enough without purpose and direction.'?",
        options: ["Kennedy", "Obama"],
        answer: 0
      },
      {
        question: "Which president said 'Men are not prisoners of fate, but only prisoners of their own minds'?",
        options: ["Hoover", "Roosevelt", "Truman"],
        //you can provide a list of accepted answers instead of giving an index to the options
        answer: ["Roosevelt", "FDR", , "Franklin Roosevelt", "Franklin D Roosevelt"],
      },
      {
        question: "Which president said 'A leadership is someone who brings people together'?",
        //options are optional!
        //options: ["Obama", "Bush", "Lincoln"],

        //you have to provide a list of accepted answers if there are no options
        answer: ["Bush", "George W Bush", "George W" , "George Bush"],

        //you can optionally provide an explanation
        explanation: "Bush used to say things like that!"
      }
    ]
  },
]