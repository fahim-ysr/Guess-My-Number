'use strict';

// v2.0 (Refactored)
//DOM: Document Object Model is a connection between HTML documents and JavaScript code. It allows JavaScript to access and manipulate HTML elements and styles.

console.log(document.querySelector('.message').textContent);

// Editing the '.message' for a different output.
document.querySelector('.score').textContent = '20';

// It assigns '20' in the 'check' box by default.
document.querySelector('.guess').value = '20';
// Outputs the value above in the console.
console.log(document.querySelector('.guess').value);

// Generates a random number between 1 and 20. Then stores it in 'guess_num' variable.
let guess_num = Math.floor(Math.random() * 20 + 1);
// Initialization of highscore to 0.
let highscore = 0;
let score = 20;

// This function updates messages.
const updateMessage = function (destination, message) {
  document.querySelector(destination).textContent = message;
}

// This function updates the background.
const updateBackground = function (destination, color) {
  document.querySelector(destination).style.backgroundImage = color;
}

// This function updates width of the 'guess_num' container
const updateWidth = function (destination, inputwidth) {
  document.querySelector(destination).style.width = inputwidth;
}

// Handling click events.
// Adding an eventListener to the 'check' box.
document.querySelector('.check').addEventListener('click', function () {
  // Converting guess to number since it is a string by default
  const player_guess = Number(document.querySelector('.guess').value);
  // console.log(player_guess, typeof player_guess);
  
//   If player does not enter their guess number.
  if (!player_guess) {
    updateMessage('.message', '🚫 No number!');
    // Changes the background.
    updateBackground('body', 'linear-gradient(to right, #870000, #190a05)');

    // If player guess is right.
  } else if (player_guess === guess_num) {
    // Updates the message.
    updateMessage('.message', '🎉 Correct Number!');
    // Changes the background.
    updateBackground('body', 'linear-gradient(to right, #6a9113, #141517)');
    // Reveals the number that was to be guessed.
    updateMessage('.number', guess_num);
    // Makes the container of revealed number bigger.
    updateWidth('.number', '25rem');
    //Manages the highscore in game.
    if (score > highscore) {
      highscore = score;
      // Updates the highscore
      updateMessage('.highscore', highscore);
  }

  // When player guess is incorrect
  } else if (player_guess !== guess_num) {
    if (score > 0) {
      document.querySelector('.message').textContent = player_guess > guess_num ? '⬆️ Too high!' : '⬇️ Too low!';
      document.querySelector('body').style.backgroundImage = player_guess > guess_num ? 'linear-gradient(to right, #ba8b02, #181818)' : 'linear-gradient(to right, #8e0e00, #1f1c18)';
      // Decrements the score by 1.
      score--;
      // Updates the score.
      updateMessage('.score', score);
    } else {
      // Updates the message.
      updateMessage('.message', '😢 You lost the game!');
      // Updates the score.
      document.querySelector('.score') = '0';
      // Changes the background.
      updateBackground('body', 'linear-gradient(to right, #870000, #190a05)');
    }
  }
});

// Resetting the game.
document.querySelector('.again').addEventListener('click', function () {
  // Changes the background.
  updateBackground('body', 'linear-gradient(90deg, #2c5364, #203a43, #0f2027)');
  // Generates another random number between 1 and 20. Then stores it in 'guess_num' variable.
  guess_num = Math.floor(Math.random() * 20 + 1);
  // Resets the score.
  score = 20;
  // Resets the number box from previous game.
  updateMessage('.number', '?');
  // Resets the container width
  updateWidth('.number', '15rem');
  // Resets the score output.
  updateMessage('.score', score);
  // Resets the message.
  updateMessage('.message', 'Start guessing...');
  // Resets the input box value.
  document.querySelector('.number').value = ' ';
});
