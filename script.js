
// I need a start button


// I need a High Score keeper/function
// This is just a simple scorekeeper/placeholder which I will modify for the quiz 
// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("lastname", "Smith");
  // Retrieve
  document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

//I will need a function to rank the scores and show them highest to lowest (maybe top 3 or 4)




// I need questions and multiple possible answers to the questions
"1. Commonly used data types DO NOT include:" 
"2. The condition in an if / else statement is enclosed within ________."
"3. Arrays in Javascript can be used to store ________."
"4. String values must be enclosed within ________ when being assigned to variables."
"5. A very useful tool used during development and debugging for printing content to the debugger is:"
// answers:
"1. strings, booleans, alerts, numbers"
"2. quotes, curly brackets, parentheses, square brackets"
"3. numbers and strings, other arrays, booleans, all of the above"
"4. commas, curly brackets, quotes, parantheses"
"5. JavaScript, terminal / bash, for loops, console.log"

//a timer that counts down


//a function that keeps track of the timer and whether all of the questions have been answered
//When the user has finished, give a notice: "All done! Your score is ________.
// Enter initials: blocktotypeinuserinitials and a submit button for the initials"
//function that keeps track of the winners' initials








// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```

// ## User Story

// ```
// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// ```

// ## Acceptance Criteria

// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```
