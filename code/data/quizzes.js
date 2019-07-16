module.exports = [
  // Start of funny quiz
  {
    title: "Funny Quiz",
    tags: ["funny", "animal"], //used to find this quiz
    image: {
      url: "/images/Animals.jpeg",
    },
    questions: [
      {
        question: "What do cats like to eat on a hot day?",
        options: ["Mice cream", "Ice Cream", "Hot Cream"],
        answer: 0, // Corresponds to "Mice cream"
      },
      {
        question: "What do you call a cold dog?",
        options: ["Frozen", "Hot dog", "Chilli Dog"],
        answer: "Chilli Dog",
        explanation: "Because it's cold. Get it?",
      },
    ],
  },
  // End of funny quiz

  // Start of president quiz
  {
    title: "President Quiz",
    tags: ["president", "presidents"], //used to find this quiz
    image: {
      url: "/images/Presidents.jpeg",
    },
    questions: [
      {
        question:
          "Which president said 'Efforts and courage are not enough without purpose and direction.'?",
        options: ["Kennedy", "Obama"],
        answer: 0,
      },
      {
        question:
          "Which president said 'Men are not prisoners of fate, but only prisoners of their own minds'?",
        options: ["Hoover", "Roosevelt", "Truman"],
        answer: [
          "Roosevelt",
          "FDR",
          "Franklin Roosevelt",
          "Franklin D Roosevelt",
        ],
      },
      {
        question: "Which president said 'Speak softly, and carry a big stick'?",
        answer: ["Teddy Roosevelt", "Roosevelt", "Theodore Roosevelt"],
        explanation:
          "That famous quote describes Teddy Roosevelt's foreign policy",
      },
    ],
  },
  // End of presidents quiz

  // Start of states quiz generated from the spreadsheet
  {
    title: "States Quiz",
    tags: ["states", "state", "united states"],
    image: { url: "/images/us_map.png" },
    questions: [
      {
        question: "Which state has the nickname 'Spud State'?",
        options: ["Idaho", "Wyoming", "Florida"],
        answer: "Idaho",
        explanation:
          "Idaho is well known for growing potatoes and thus the nickname, Spud State",
      },
      {
        question: "Which state has the nickname 'Peach State'?",
        options: ["Hawaii", "California", "Georgia"],
        answer: 2,
      },
      {
        question: "Which state has the nickname 'Silver State'?",
        options: ["New York", "Montana", "Nevada"],
        answer: "Nevada",
        explanation:
          "Nevada had a silver rush in the mid 1800's and thus has the nickname, Silver State",
      },
      {
        question: "What state is known as the Land of 10,000 lakes?",
        options: ["Wisconsin", "Louisiana", "Minnesota"],
        answer: "Minnesota",
        explanation:
          "Minnesota has over 11,000 lakes, so the land of 10,000 lakes is under counting!",
      },
      {
        question: "What state is the largest in area?",
        options: ["California", "Alaska", "Texas"],
        answer: 1,
        explanation:
          "Alaska is the largest state by far with 665,384 square miles. Second place Texas has 268,596 square miles and third place California has 163,694 square miles",
      },
      {
        question: "What state is the largest agricultural producer?",
        options: ["Iowa", "Kansas", "California"],
        answer: "California",
        explanation:
          "Caifornia produces over 11% of the nation's agricultural output followed by #2 Iowa which produces over 8%.",
      },
      {
        question: "Which of the following states does not have a panhandle?",
        options: ["Idaho", "Florida", "New Mexico"],
        answer: "New Mexico",
      },
      {
        question: "Which state does not border the Great Lakes?",
        options: ["Ohio", "Michigan", "Iowa"],
        answer: "Iowa",
      },
      {
        question: "What is the smallest US state?",
        options: ["Delaware", "Rhode Island", "Connecticut"],
        answer: "Rhode Island",
        explanation:
          "Rhode Island is the smallest US state at 1,045 square miles. The next smallest is Delaware which at 1,954 square miles is almost twice the size of Rhode Island",
      },
      {
        question: "How many states are prefixed with 'New'?",
        answer: ["four", "4"],
        explanation:
          "There are four states prefixed by 'New': New Hampshire, New Jersey, New Mexico and New York",
      },
    ],
  },
  // End of States quiz
];