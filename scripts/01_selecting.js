'use strict';

// // 1. DOM INTRODUCTION

// // Select an element and display its content
// let statusMessage = document.querySelector('.message');

// console.log(statusMessage);
// console.log(statusMessage.textContent);
// // console.log(document.body.textContent);


// 2. Selecting Elements

// Change the textContent of an element with class 'message' to something else:

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "Correct Answer";

console.log(document.querySelector('.message').textContent);

// Change the highscore to 100

console.log(document.querySelector('.highscore').textContent);
document.querySelector('.highscore').textContent = 150;
console.log(document.querySelector('.highscore').textContent);

// Set input field's content to 150
// value property

console.log(document.querySelector('.guess'));
console.log(document.querySelector('.guess').value);
console.log(typeof document.querySelector('.guess').value);

document.querySelector('.guess').value = 100;

console.log(document.querySelector('.guess').value);