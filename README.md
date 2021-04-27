# Rock, Paper, Scissors

[Project Spec](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html)

Rock, Paper, Scissors was our Mod 1 final project for Turing School-- the site would allow the user to play rock, paper, scissors against their computer. We were allowed creative control with our HTML / CSS, and aside from the requirements of having `Game` and `Player` classes for our data model, we were allowed freedom with how our Javascript was structured as well. Other requirements included having two different versions of the game possible (a regular and difficult version, the difficult version having more options), having player wins persist across page load using `localStorage`, etc. Overall, the emphasis was on having good, clean, Javascript, with full functionality and no bugs. I chose to add an extra feature, the Reset Wins button, which would allow the user to reset their `localStorage` and wipe all wins.

[Project Images](https://gist.github.com/novaraptur/d931349d334bb64adf08a36883723096)

## Learning Goals

1. Solidify and demonstrate your understanding of:
  1. DRY JavaScript
  2. localStorage to persist data
  3. event delegation to handle similar event listeners
2. Understand the difference between the data model and how the data is displayed on the DOM
3. Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

## Languages & Technologies

HTML 5

CSS 3

Vanilla JavaScript

## Suggested Progression

This workflow is not required, but will help you meet the overall requirements of the project.

1. Plan out the HTML layout (colors and icons do not need to match, but overall layout should closely match the demo video)
2. Create the Player class
3. Create the Game class
4. Make game fully playable without the DOM (manually updating the Game data, etc, from your console) to force yourself to think data-model-first
5. Create central game board on the DOM
6. Connect Game data model to the DOM
7. Display the Player data in the sidebars
8. Automatically reset the game board to allow for a new game to be played after the previous game is won
9. Persist Player data using local storage (number of wins should persist across page refreshes)
