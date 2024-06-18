# Guess My Number

***"Guess My Number" game is an interactive web-based application where the player tries to guess a randomly generated number between 1 and 20. The game provides feedback on whether the player's guess is too high, too low, or correct. The player can also reset the game to start over. The game keeps track of the player's current score and high score.***

**index.html**
This is the main HTML file that structures the web page for the "Guess My Number" game.

**style.css**
This file contains the CSS styles for the "Guess My Number" game.

    Imports and Resets
    - Imports the "Press Start 2P" font from Google Fonts.
    - Browser default styles are reset for margin, padding and box sizing.
    - The base font size is set along with enabling border box sizing.

    Variables
    - A linear gradient variable is defined for the background.

    Body Styles
    - Assigns the font family, text color and background gradient.
    - Includes animation for the background gradient.

    Layout
    - Layout specifications are provided for the header, content area well as sections within that main area.

    Element Styles
    - Various elements such as headings, numbers, buttons, inputs and messages are styled.
    - Hover effects and transitions are added.

**script.js**

This file contains the JavaScript code that powers the "Guess My Number" game. Here's a breakdown of the different sections:

    DOM Manipulation
    - Demonstrates how to access and modify HTML elements using DOM.
    - Modifies the text content of elements and displays values in the console.

    Game Logic
    - Generates a number, between 1 and 20 for the game.
    - Sets up variables for tracking the score and current score.

    Event Handlers
    - Attaches a click event listener to the "Check!" button.
    - Verifies if the users guess matches the number.
    - Updates game messages, scores and background colors based on guesses.
    - Manages the score when necessary.
    - Attaches a click event listener to the "Again!" button.
    - Resets the game by generating a number resetting scores and clearing messages and numbers, on display.

The structure of the code is organized effectively ensuring a separation of responsibilities, among HTML, CSS and JavaScript. The JavaScript code adheres, to standards. Employs DOM manipulation to modify the games status and offer an engaging user interaction.
