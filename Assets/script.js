let codeQuizContainer = document.getElementById('codeQuizContainer');
let resultsContainer = document.getElementById('userResults');

// A $( document ).ready() block.
$( document ).ready(function() {
  console.log( "ready!" );
});
document.getElementById('startButton').onclick = function startQuiz() 
 {
  // Rudimentary countdown timer
var timeleft = 10; 
var downloadTimer = setInterval(function(){ 
  if(timeleft <= 0){ 
    clearInterval(downloadTimer); 
  } 
  // adding progress bar so user can see time going by
  document.getElementById("progressBar").value = 10 - timeleft; 
  timeleft -= 1; }, 1000); 
// Hiding the start button once it's clicked
$('#startButton').hide();
//hiding the current question
$("#theCurrentQuestion").css('display', 'block');
// adding variable to store output of the html
let output = [];
// so we will run through each question 
questionsAndAnswers.forEach(
  (currentQuestion, questionNumber) => {
    // variable to store the list of possible answers to the question
    let answers = [];
    // this is for each possible answer
    for(letter in currentQuestion.answers) {
      // adding the radio buttons here vs on index.html
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}"></input>
            ${letter} :
            ${currentQuestion.answers[letter]}
        </label>`
      );
    }
    output.push(
      `<div class="question"> ${currentQuestion.question}</div>
      <div class ="answers"> ${answers.join('')} </div>`
    );
  }
);
  // finally combine our output list into one string of HTML and put it on the page
  codeQuizContainer.innerHTML = output.join('');
}
var questionsAndAnswers = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: {
      A: "strings",
      B: "booleans",
      C: "alerts",
      D: "numbers",
    },
    correctAnswer: "C"
  },
  {
    question: "The condition in an if / else statement is enclosed within ________.",
    answers: {
      A: "quotes",
      B: "curly brackets",
      C: "parentheses",
      D: "square brackets"
    }, 
    correctAnswer: "C"
  },
  {
    question: "Arrays in Javascript can be used to store ________.",
    answers: {
      A: "Numbers and strings",
      B: "other arrays",
      C: "booleans",
      D: "All of the above"
    },
    correctAnswer: "D"
  },
  {
    question: "String values must be enclosed within ________ when being assigned to variables.",
    answers: {
      A: "commas",
      B: "curly brackets",
      C: "quotes",
      D: "parantheses",
    },
    correctAnswer: "C"
  },
  {
  question: "A very useful tool used during development and debugging for printing content to the debugger is:",
  answers: {
    A: "JavaScript",
    B: "terminal / bash",
    C: "for loops",
    D: "console.log",
  },
  correctAnswer: "C"
},
];
function showResults(){

  // make a variable to "hold" the answers from our quiz
  let answerContainers = codeQuizContainer.querySelectorAll('.answers');
  // keep track of user's answers - user of course starts off with 0 correct
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {
    // find the selected answer
    let answerContainer = answerContainers[questionNumber];
    let selector = `input[name=question${questionNumber}]:checked`;
    let userAnswer = (answerContainer.querySelector(selector) || {}).value;
    // if the user's answer is correct
    if(userAnswer === currentQuestion.correctAnswer)
    {
      // add 1 to the number of correct answers
      numCorrect++;
    }
  });
  // show number of correct answers out of total number possible
  resultsContainer.innerHTML = `${numCorrect} out of ${questionsAndAnswers.length}`;
};
    