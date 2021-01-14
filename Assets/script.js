
    var quizContainer = document.getElementById("quiz");
    var startButton = document.getElementById("startButton");
    

function showQuiz(){
    // variable to store the HTML output
    const output = [];
    // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // This ariable will store the list of possible answers for each question:
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}
myQuestions.forEach( (currentQuestion, questionNumber) => {
  // the code we want to run for each question goes here
});
function showResults(){}

showQuiz();
startButton.addEventListener('click', showResults);

    const myQuestions = [
      {
        question: "Commonly used data types DO NOT include:",
        answers: {
          a: "strings",
          b: "booleans",
          c: "alerts",
          d: "numbers",
        },
        correctAnswer: "c"
      },
      {
        question: "The condition in an if / else statement is enclosed within ________.",
        answers: {
          a: "quotes",
          b: "curly brackets",
          c: "parentheses",
          d: "square brackets"
        }, 
        correctAnswer: "c"
      },
      {
        question: "Arrays in Javascript can be used to store ________.",
        answers: {
          a: "Numbers and strings",
          b: "other arrays",
          c: "booleans",
          d: "All of the above"
        },
        correctAnswer: "d"
      },
      {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answers: {
          a: "commas",
          b: "curly brackets",
          c: "quotes",
          d: "parantheses",
        },
        correctAnswer: "c"
      },
      {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      answers: {
        a: "JavaScript",
        b: "terminal / bash",
        c: "for loops",
        d: "console.log",
      },
      correctAnswer: "c"
    },
    ];
    quizContainer.innerHTML = output.join('');