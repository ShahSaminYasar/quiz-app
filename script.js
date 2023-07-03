var questionSets = [
  {
    subject: "Chemistry",
    topic: "Chapter 2",
    questions: [
      {
        question: "This is question 01 of question set 01!",
        options: ["01-O01", "01-O02", "01-O03", "01-O04"],
        answer: 0,
      },
      {
        question: "This is question 02 of question set 01!",
        options: ["02-O01", "02-O02", "02-O03", "02-O04"],
        answer: 1,
      },
      {
        question: "This is question 03 of question set 01!",
        options: ["03-O01", "03-O02", "03-O03", "03-O04"],
        answer: 2,
      },
      {
        question: "This is question 04 of question set 01!",
        options: ["04-O01", "04-O02", "04-O03", "04-O04"],
        answer: 3,
      },
      {
        question: "This is question 05 of question set 01!",
        options: ["05-O01", "05-O02", "05-O03", "05-O04"],
        answer: 0,
      },
    ],
  },
  {
    subject: "Physics",
    topic: "Chapter 4",
    questions: [
      {
        question: "This is question 01 of question set 02!",
        options: ["01-O01", "01-O02", "01-O03", "01-O04"],
        answer: 3,
      },
      {
        question: "This is question 02 of question set 02!",
        options: ["02-O01", "02-O02", "02-O03", "02-O04"],
        answer: 2,
      },
      {
        question: "This is question 03 of question set 02!",
        options: ["03-O01", "03-O02", "03-O03", "03-O04"],
        answer: 1,
      },
      {
        question: "This is question 04 of question set 02!",
        options: ["04-O01", "04-O02", "04-O03", "04-O04"],
        answer: 0,
      },
      {
        question: "This is question 05 of question set 02!",
        options: ["05-O01", "05-O02", "05-O03", "05-O04"],
        answer: 0,
      },
    ],
  },
  {
    subject: "Biology",
    topic: "Chapter 1",
    questions: [
      {
        question: "This is question 01 of question set 03!",
        options: ["01-O01", "01-O02", "01-O03", "01-O04"],
        answer: 2,
      },
      {
        question: "This is question 02 of question set 03!",
        options: ["02-O01", "02-O02", "02-O03", "02-O04"],
        answer: 3,
      },
      {
        question: "This is question 03 of question set 03!",
        options: ["03-O01", "03-O02", "03-O03", "03-O04"],
        answer: 0,
      },
      {
        question: "This is question 04 of question set 03!",
        options: ["04-O01", "04-O02", "04-O03", "04-O04"],
        answer: 1,
      },
      {
        question: "This is question 05 of question set 03!",
        options: ["05-O01", "05-O02", "05-O03", "05-O04"],
        answer: 1,
      },
    ],
  },
  {
    subject: "Mathematics",
    topic: "Chapter 9",
    questions: [
      {
        question: "This is question 01 of question set 04!",
        options: ["04-01-O01", "01-O02", "01-O03", "01-O04"],
        answer: 1,
      },
      {
        question: "This is question 02 of question set 04!",
        options: ["02-O01", "02-O02", "02-O03", "02-O04"],
        answer: 2,
      },
      {
        question: "This is question 03 of question set 04!",
        options: ["03-O01", "03-O02", "03-O03", "03-O04"],
        answer: 3,
      },
      {
        question: "This is question 04 of question set 04!",
        options: ["04-O01", "04-O02", "04-O03", "04-O04"],
        answer: 0,
      },
      {
        question: "This is question 05 of question set 04!",
        options: ["05-O01", "05-O02", "05-O03", "05-O04"],
        answer: 3,
      },
    ],
  },
];

// Import elements
const quizTopics = document.querySelector(".quiz_topics");
const quizScreen = document.querySelector(".quiz_screen");
const quizScreenTitle = document.querySelector(".quiz_screen__quiz_title");
const quizQuestions = document.querySelector(".quiz_questions");
const quitQuizButton = document.querySelector(".quit_quiz_button");
const completeQuizButton = document.querySelector(".complete_quiz_button");

var questionSet;
var score = 0;

// Variables

// Load topics
loadTopics();
function loadTopics() {
  questionSets.forEach((questionSet) => {
    var quizTopic = document.createElement("div");
    quizTopic.classList.add("quiz_topic");
    quizTopic.innerHTML = `<h3 class="quiz_topic__subject">${
      questionSet.subject
    }</h3>
                          <h4 class="quiz_topic__topic">${
                            questionSet.topic
                          }</h4>
                          <button class="quiz_topic__start_button" onclick="startQuiz(${questionSets.indexOf(
                            questionSet
                          )})">Start Quiz</button>`;
    quizTopics.append(quizTopic);
  });
}

// Start Quiz
function startQuiz(questionSetID) {
  document.body.classList.add("quizMode");
  questionSet = questionSets[questionSetID];
  quizScreenTitle.textContent = `${questionSet.subject} | ${questionSet.topic}`;
  quizQuestions.textContent = "";
  var questionCount = 1;
  questionSet.questions.forEach((question) => {
    const quizQuestion = document.createElement("div");
    quizQuestion.classList.add("quiz_question");
    quizQuestion.innerHTML = `<h4>Q${questionCount} ${question.question}</h4>
                              <ul class="quiz_options">
                                <li class="quiz_option"><button onclick="selectOption(this, 0, ${questionSet.questions.indexOf(
                                  question
                                )}, ${questionSets.indexOf(questionSet)})">a) ${
      question.options[0]
    }</button></li>
                                <li class="quiz_option"><button onclick="selectOption(this, 1, ${questionSet.questions.indexOf(
                                  question
                                )}, ${questionSets.indexOf(questionSet)})">b) ${
      question.options[1]
    }</button></li>
                                <li class="quiz_option"><button onclick="selectOption(this, 2, ${questionSet.questions.indexOf(
                                  question
                                )}, ${questionSets.indexOf(questionSet)})">c) ${
      question.options[2]
    }</button></li>
                                <li class="quiz_option"><button onclick="selectOption(this, 3, ${questionSet.questions.indexOf(
                                  question
                                )}, ${questionSets.indexOf(questionSet)})">d) ${
      question.options[3]
    }</button></li>
                              </ul>`;
    quizQuestions.appendChild(quizQuestion);
    questionCount++;
  });
}

// Check Answer
var questionsAnswers = [];

function selectOption(
  clickedButton,
  selectedOption,
  questionNumber,
  questionSetNumber
) {
  var clickedButton = clickedButton;
  var selectedOption = selectedOption;
  var questionNumber = questionNumber;
  var questionSetNumber = questionSetNumber;
  var correctOption =
    questionSets[questionSetNumber].questions[questionNumber].answer;
  var optionsDiv = clickedButton.parentNode.parentNode;
  var optionButtons = optionsDiv.getElementsByTagName("li");
  var selectedButton = optionButtons[selectedOption].querySelector("button");
  var correctButton = optionButtons[correctOption].querySelector("button");
  // console.log(correctOption, selectedOption);
  optionsDiv.classList.add("disable");
  selectedButton.classList.add("selected");
  // if (selectedOption === correctOption) {
  //   selectedButton.classList.add("correct");
  // } else {
  //   selectedButton.classList.add("incorrect");
  //   correctButton.classList.add("correct");
  // }
  var questionDetails = {
    questionSetNumber: questionSetNumber,
    questionNumber: questionNumber,
    selectedOption: selectedOption,
    correctOption: correctOption,
  };
  // console.log(questionDetails);
  questionsAnswers.push(questionDetails);
  // console.log(questionsAnswers);
}

// var questionsAnswers = [
//     {
//         "questionSetNumber": 2,
//         "questionNumber": 0,
//         "selectedOption": 3,
//         "correctOption": 2
//     },
//     {
//         "questionSetNumber": 2,
//         "questionNumber": 4,
//         "selectedOption": 3,
//         "correctOption": 1
//     }
// ]

completeQuizButton.onclick = function () {
  completeQuizButton.style.display = "none";

  quizQuestions.innerHTML = "";
  // Variables
  let quizQuestionSet = questionSets[questionsAnswers[0].questionSetNumber];
  let quizSetQuestions = quizQuestionSet.questions;

  quizSetQuestions.forEach((question) => {
    const quizQuestion = document.createElement("div");
    quizQuestion.classList.add("quiz_question");
    quizQuestion.innerHTML = `<h4>${question.question}</h4>
                              <ul class="quiz_options disable">
                                <li class="quiz_option"><button>${question.options[0]}</button></li>
                                <li class="quiz_option"><button>${question.options[1]}</button></li>
                                <li class="quiz_option"><button>${question.options[2]}</button></li>
                                <li class="quiz_option"><button>${question.options[3]}</button></li>
                              </ul>`;
    quizQuestions.append(quizQuestion);
  });

  questionsAnswers.forEach((questionAnswer) => {
    let questionNumber = questionAnswer.questionNumber;
    let selectedOption = questionAnswer.selectedOption;
    let correctOption = questionAnswer.correctOption;

    // console.log(questionNumber, selectedOption, correctOption);

    const getSelectedButton = document.querySelector(
      `.quiz_questions .quiz_question:nth-child(${
        questionNumber + 1
      }) .quiz_options .quiz_option:nth-child(${selectedOption + 1}) button`
    );

    const getCorrectButton = document.querySelector(
      `.quiz_questions .quiz_question:nth-child(${
        questionNumber + 1
      }) .quiz_options .quiz_option:nth-child(${correctOption + 1}) button`
    );

    if (selectedOption === correctOption) {
      getCorrectButton.classList.add("correct");
      score++;
    } else {
      getSelectedButton.classList.add("incorrect");
      getCorrectButton.classList.add("correct");
    }
  });

  quizScreenTitle.innerHTML = `${questionSet.subject} | ${
    questionSet.topic
  } <span style="color: green">Correct: ${score}</span><span style="color: red">Incorrect: ${
    questionsAnswers.length - score
  }</span><span style="color: #707070">Skipped: ${
    questionSet.questions.length - questionsAnswers.length
  }</span><span style="color: royalblue">Total Marks Obtained: ${score} out of ${
    questionSet.questions.length
  }</span>`;

  // console.log(score);
};

quitQuizButton.onclick = () => {
  questionsAnswers = [];
  completeQuizButton.style.display = "block";
  document.body.classList.remove("quizMode");
};
