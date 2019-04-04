module.exports = [
 /* 
 Replace content below to customize the quiz
 title is the quiz title and required 
 tags are optional and used find the quiz e.g. "Take a [tag] quiz"
 image is optional and shows up when you start the quiz
 autoAdvance is optional - this is the time (in seconds) after Bixby tells you the result of your answer and asks the next questions. It is also the time between the start of the quiz and Bixby asking the first question
 questions are required
    - Question: (required) Question to ask
    - Options: (optional) If present Bixby will show these on the screen and read them out. If not present, you will need to type or say the answer
    - Answer: (required) The answer to the question. This can either be a single word, the index to the options or multiple values if there are multiple ways to say the correct answer
    - Image: (optional) This image is shown when Bixby shows the answer
    - explanation: (optional) This is shown when Bixby shows the answer 
  */
  
  /* Paste data from the spreadsheet below here. If there are multiple quizzes, each will begin with
  {
     title . . .
  and ends with
  },
  */
  {
    title: "Funny Quiz",
    tags: ["funny", "animal"], //used to find this quiz
    image: {
      url: '/images/Dogs.jpg'
    }, //optional
    autoAdvance: 5, //auto advance after 5 seconds
    questions: [{
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
    title: "Presidents",
    tags: ["president", "presidents", "quote", "quotes", "historical", "history"], //used to find this quiz
    image: {
      url: '/images/President.jpg'
    }, //optional
    //autoAdvance: 7,
    questions: [{
        question: "Which president said 'Efforts and courage are not enough without purpose and direction.'?",
        options: ["Kennedy", "Obama"],
        answer: 0,
        image: "/images/kennedy.jpg" // images for the answer are optional
      },
      {
        question: "Which president said 'Men are not prisoners of fate, but only prisoners of their own minds'?",
        options: ["Hoover", "Roosevelt", "Truman"],
        //you can provide a list of accepted answers instead of giving an index to the options
        answer: ["Roosevelt", "FDR", , "Franklin Roosevelt", "Franklin D Roosevelt"],
        image: "/images/fdr.jpg"
      },
      {
        question: "Which president said 'Speak softly, and carry a big stick'?",
        //options are optional!
        //options: ["Obama", "Bush", "Lincoln"],

        //you have to provide a list of accepted answers if there are no options
        answer:["Teddy Roosevelt", "Roosevelt", "Theodore Roosevelt"],
        image: "/images/roosevelt.jpg",

        //you can optionally provide an explanation
        explanation: "That famous quote describes Teddy Roosevelt's foreign policy"
      }
    ]
  },
  // This is the quiz from the sample data in the spreadsheet
  {
    title: "States Quiz",
    tags: ["states", "united states", "state"],
    image: {
      url: '/images/us_map.png'
    },
    autoAdvance: 7,
    questions: [{
        question: "Which state has the nickname 'Spud State'?",
        options: ["Idaho", "Wyoming", "Florida"],
        answer: "Idaho",
        image: "/images/idaho.png",
        explanation: "Idaho is well known for growing potatoes and thus the nickname, Spud State"
      },
      {
        question: "Which state has the nickname 'Peach State'?",
        options: ["Hawaii", "California", "Georgia"],
        answer: 2,
        image: "/images/georgia.png"
      },
      {
        question: "Which state has the nickname 'Silver State'?",
        options: ["New York", "Montana", "Nevada"],
        answer: "Nevada",
        image: "/images/nevada.png",
        explanation: "Nevada had a silver rush in the mid 1800's and thus has the nickname, Silver State"
      },
      {
        question: "What state is known as the Land of 10,000 lakes?",
        options: ["Wisconsin", "Louisiana", "Minnesota"],
        answer: "Minnesota",
        image: "/images/minnesota.png",
        explanation: "Minnesota has over 11,000 lakes, so the land of 10,000 lakes is under counting!"
      },
      {
        question: "What state is the largest in area?",
        options: ["California", "Alaska", "Texas"],
        answer: 1,
        image: "/images/alaska.png",
        explanation: "Alaska is the largest state by far with 665,384 square miles. Second place Texas has 268,596 square miles and third place California has 163,694 square miles"
      },
      {
        question: "What state is the largest agricultural producer?",
        options: ["Iowa", "Kansas", "California"],
        answer: "California",
        image: "/images/california.png",
        explanation: "Caifornia produces over 11% of the nation's agricultural output followed by #2 Iowa which produces over 8%."
      },
      {
        question: "Which of the following states does not have a panhandle?",
        options: ["Idaho", "Florida", "New Mexico"],
        answer: "New Mexico",
        image: "/images/new_mexico.png"
      },
      {
        question: "Which state does not border the Great Lakes?",
        options: ["Ohio", "Michigan", "Iowa"],
        answer: "Iowa",
        image: "/images/iowa.png"
      },
      {
        question: "What is the smallest US state?",
        options: ["Delaware", "Rhode Island", "Connecticut"],
        answer: "Rhode Island",
        image: "/images/rhode_island.png",
        explanation: "Rhode Island is the smallest US state at 1,045 square miles. The next smallest is Delaware which at 1,954 square miles is almost twice the size of Rhode Island"
      },
      {
        question: "How many states are prefixed with the word 'New'?",
        answer: ["four", "4"],
        explanation: "There are four states prefixed by 'New': New Hampshire, New Jersey, New Mexico and New York"
      },
    ]
  },  // End of quiz from spreadsheet sample data
// Ensure this is always here - paste data from spreadsheet above this
]
