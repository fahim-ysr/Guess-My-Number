'use strict';

// v1.0
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

// Handling click events.
// Adding an eventListener to the 'check' box.
document.querySelector('.check').addEventListener('click', function () {
  // Converting guess to number since it is a string by default
  const player_guess = Number(document.querySelector('.guess').value);
  // console.log(player_guess, typeof player_guess);
  
//   If player does not enter their guess number.
  if (!player_guess) {
    document.querySelector('.message').textContent = '🚫 No number!';
    // Changes the background.
    document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, #870000, #190a05)';

    // If player guess is right.
  } else if (player_guess === guess_num) {
    // Updates the message.
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    // Changes the background.
    document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, #6a9113, #141517)';
    // Reveals the number that was to be guessed.
    document.querySelector('.number').textContent = guess_num;
    // Makes the container of revealed number bigger.
    document.querySelector('.number').style.width = '25rem';
    //Manages the highscore in game.
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
  }

    // When player guess is too high.
  } else if (player_guess > guess_num) {
    // Checks if player lost the game or not.
    if (score > 0) {
      // Updates the message.
      document.querySelector('.message').textContent = '⬆️ Too high!';
      // Decrements the score by 1.
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, #ba8b02, #181818)';
      
    //   If score is 0 then player lost the game.
    } else {
      // Updates the message.
      document.querySelector('.message').textContent = '😢 You lost the game!';
      // Updates the score.
      document.querySelector('.score') = '0';
      // Changes the background.
      document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, #870000, #190a05)';
    }
    // When player guess too low
  } else if (player_guess < guess_num) {
    // Checks if player lost the game or not
    if (score > 0) {
      // Updates the message.
      document.querySelector('.message').textContent = '⬇️ Too low!';
      // Decrements the score by 1.
      score--;
      // Updates the score output.
      document.querySelector('.score').textContent = score;
      // Changes the background.
      document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, #8e0e00, #1f1c18)';

    //   If score reaches 0.
    } else {
      // Updates the message.
      document.querySelector('.message').textContent = '😢 You lost the game!';
      // Updates the score.
      document.querySelector('.score') = '0';
      // Changes the background.
      document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, #870000, #190a05)';
    }
  }
});

// Resetting the game.
document.querySelector('.again').addEventListener('click', function () {
  // Changes the background.
  document.querySelector('body').style.backgroundImage = 'linear-gradient(90deg, #2c5364, #203a43, #0f2027)';
  // Generates another random number as the new guess.
  guess_num = Math.floor(Math.random() * 20 + 1);
  // Resets the score.
  score = 20;
  // Resets the number box from previous game.
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  // Resets the score output.
  document.querySelector('.score').textContent = score;
  // Resets the message.
  document.querySelector('.message').textContent = 'Start guessing...';
  // Resets the input box value.
  document.querySelector('.number').value = ' ';
});
