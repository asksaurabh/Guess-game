'use script';

// Attach an event listener to the check button to output the value of the input field with class 'guess'.

// document.querySelector('.check').addEventListener('click', function () {
//   console.log("Button Clicked!");
//   console.log(document.querySelector('.guess').value);
// });


// Task
// Add an event listener to the the check button. 
// If user provides no value then show the message "Enter some number"

document.querySelector('.check').addEventListener('click', () => {
  const guessedNumber = document.querySelector('.guess').value;
  console.log(guessedNumber, typeof guessedNumber);

  if (guessedNumber === '') {
    document.querySelector('.message').textContent = "Enter some Number!";
  }
  else {
    document.querySelector('.message').textContent = "Keep on Guessing";
  }
});