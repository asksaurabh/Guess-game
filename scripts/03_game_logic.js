'use strict';

// Implement the game logic.
// Secret number lies between 0..20
// If the number entered by user is equal to, less tha or more than the secret number, change messages accordingly.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guessedNumber = document.querySelector('.guess').value;

  if (guessedNumber === '') {
    document.querySelector('.message').textContent = "No number Entered...";
  }

  else if (currentScore > 0) {
    if (Number(guessedNumber) === secretNumber) {
      document.querySelector('.message').textContent = "Correct Answer...";
      document.querySelector('.number').textContent = secretNumber;

      if (currentScore > highScore) {
        highScore = currentScore;
        document.querySelector('.highscore').textContent = highScore;
      }

      document.querySelector('body').style.backgroundColor = "#60b347";
      document.querySelector('.number').style.width = "30rem";
    }

    else {
      document.querySelector('.message').textContent = guessedNumber > secretNumber ? "Too High..." : "Too Low...";

      currentScore--;
      document.querySelector('.score').textContent = currentScore;

      if (currentScore === 0) {
        document.querySelector('.message').textContent = "You lost...";
      }
    }
  }
});


// Implement the game reset functionality

document.querySelector('.again').addEventListener('click', () => {
  currentScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = currentScore;
  document.querySelector('.number').style.width = "15rem";
  document.querySelector('.number').textContent = "?";
  document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.guess').value = "";
});