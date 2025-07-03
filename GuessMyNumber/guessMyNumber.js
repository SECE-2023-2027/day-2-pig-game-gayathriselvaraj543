
// 1. Get all nodes from HTML
const againButton = document.querySelector(".again");
const num = document.querySelector(".number");
const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

// 2. Generate a random number and score
let random = Math.trunc(Math.random() * 20) + 1;
let scores = 20;
let maxScore = 0;
console.log(random);

// 3. Check Button Functionality
const checkFunc = () => {
  const guessValue = Number(guess.value);  

  // 3.1 Check if a number is entered
  if (!guessValue) {
    message.textContent = "Not entered";
  } 
  // 3.2 Correct guess
  else if (guessValue === random) {
    message.textContent = "Correct! 🎉";
    highscore.textContent = scores;
    document.querySelector("body").style.backgroundColor = "green";
    num.textContent = random;

    // Update high score if needed
    if (scores > maxScore) {
      maxScore = scores;
      highscore.textContent = maxScore;
    }
  } 
  // 3.3 Guess too high or low
  else {
    if (scores > 1) {
      message.textContent = guessValue > random ? "Too high 📈" : "Too low 📉";
      scores--; 
      score.textContent = scores;
    } else {
      message.textContent = "You lost the game!";
      score.textContent = 0;
    }
  }
};
checkBtn.addEventListener("click", checkFunc);


