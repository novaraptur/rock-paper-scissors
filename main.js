
// Global Variables
var currentGame = new Game();

// Query Selectors
var changeGameBtn = document.querySelector("#changeGameBtn");
var chooseGameDifficulty = document.querySelector("#chooseGameDifficulty");
var difficultGameCard = document.querySelector("#difficultGameCard");
var difficultPlayerSelect  = document.querySelector("#difficultPlayerSelect");
var mainGame = document.querySelector("#mainGame");
var playerOneSection = document.querySelector("#playerOneSection");
var playerOneWins = document.querySelector("#playerOneWins");
var playerTwoSection = document.querySelector("#playerTwoSection");
var playerTwoWins = document.querySelector("#playerTwoWins");
var regularGameCard = document.querySelector("#regularGameCard");
var regularPlayerSelect = document.querySelector("#regularPlayerSelect");
var resetWinsBtn = document.querySelector("#resetWinsBtn");
var winGameBoard = document.querySelector("#winGameBoard");
var winMessage = document.querySelector("#winMessage");

// Event Listeners

window.addEventListener("load", function() {
  currentGame.addPlayers();
  loadStorage();
});

regularGameCard.addEventListener("click", function() {
  currentGame.gameType = "Regular";
  switchView(regularPlayerSelect, chooseGameDifficulty);
});

difficultGameCard.addEventListener("click", function() {
  currentGame.gameType = "Difficult";
  switchView(difficultPlayerSelect, chooseGameDifficulty);
});

regularPlayerSelect.addEventListener("click", function(event) {
  selectPlayerChoice(event, regularPlayerSelect);
});

difficultPlayerSelect.addEventListener("click", function(event) {
  selectPlayerChoice(event, difficultPlayerSelect);
});

playAgainBtn.addEventListener("click", startNewGame);

changeGameBtn.addEventListener("click", resetGame);

resetWinsBtn.addEventListener("click", function() {
  localStorage.clear();
  currentGame.clearGame();
  resetGame();
  location.reload();
});

// Functions

function loadStorage() {
  playerOneSection.insertAdjacentHTML("afterbegin", `
  <h3>${currentGame.players[0].token}</h3>
  `);
  playerTwoSection.insertAdjacentHTML("afterbegin", `
  <h3>${currentGame.players[1].token}</h3>
  `);
  currentGame.players[0].retrieveWinsFromStorage();
  currentGame.players[1].retrieveWinsFromStorage();
  if (isNaN(currentGame.players[0].wins)) {
    currentGame.players[0].wins = 0;
    currentGame.players[1].wins = 0;
  }
  playerOneWins.innerText = `Wins: ${currentGame.players[0].wins}`;
  playerTwoWins.innerText = `Wins: ${currentGame.players[1].wins}`;
}

function switchView(viewTo, viewFrom) {
  viewFrom.classList.add("hidden");
  viewTo.classList.remove("hidden");
}

function selectPlayerChoice(event, currentView) {
  if (event.target.id === "rock") {
    currentGame.setPlayerChoice(0, "Rock");
    currentGame.players[0].choiceImage = "assets/happy-rocks.png";
  } else if (event.target.id === "scissors") {
    currentGame.setPlayerChoice(0, "Scissors");
    currentGame.players[0].choiceImage = "assets/happy-scissors.png";
  } else if (event.target.id === "paper") {
    currentGame.setPlayerChoice(0, "Paper");
    currentGame.players[0].choiceImage = "assets/happy-paper.png";
  } else if (event.target.id === "lizard") {
    currentGame.setPlayerChoice(0, "Lizard");
    currentGame.players[0].choiceImage = "assets/iguana.png";
  } else if (event.target.id === "alien") {
    currentGame.setPlayerChoice(0, "Alien");
    currentGame.players[0].choiceImage = "assets/ufo.png";
  }
  runGame();
  switchView(mainGame, currentView);
}

function determineGameDifficulty() {
  var gameDifficulty;
  if (currentGame.gameType === "Regular") {
    gameDifficulty = regularPlayerSelect;
  } else {
    gameDifficulty = difficultPlayerSelect;
  }
  return gameDifficulty;
}

function runGame() {
  computerChoice();
  currentGame.playMatch();
  updateWins();
  toggleChangeGameBtn();
  var gameDifficulty = determineGameDifficulty();
  switchView(winGameBoard, gameDifficulty);
  displayWinMessage();
  currentGame.players[0].saveWinsToStorage();
  currentGame.players[1].saveWinsToStorage();
}

function computerChoice() {
  var optionNumber;
  if (currentGame.gameType === "Difficult") {
    optionNumber = 5;
  } else {
    optionNumber = 3;
  }
  var randomChoice = Math.floor(Math.random() * optionNumber) + 1;
  evaluateComputerChoice(randomChoice);
}

function evaluateComputerChoice(randomChoice) {
  if (randomChoice === 1) {
    currentGame.setPlayerChoice(1, "Rock");
    currentGame.players[1].choiceImage = "assets/happy-rocks.png";
  } else if (randomChoice === 2) {
    currentGame.setPlayerChoice(1, "Scissors");
    currentGame.players[1].choiceImage = "assets/happy-scissors.png";
  } else if (randomChoice === 3) {
    currentGame.setPlayerChoice(1, "Paper");
    currentGame.players[1].choiceImage = "assets/happy-paper.png";
  } else if (randomChoice === 4) {
    currentGame.setPlayerChoice(1, "Lizard");
    currentGame.players[1].choiceImage = "assets/iguana.png";
  } else if (randomChoice === 5) {
    currentGame.setPlayerChoice(1, "Alien");
    currentGame.players[1].choiceImage = "assets/ufo.png";
  }
}

function toggleChangeGameBtn() {
  changeGameBtn.classList.toggle("hidden");
}

function updateWins() {
  if (currentGame.winner === currentGame.players[0]) {
    playerOneWins.innerText = `Wins: ${currentGame.players[0].wins}`;
  } else if (currentGame.winner === currentGame.players[1]) {
    playerTwoWins.innerText = `Wins: ${currentGame.players[1].wins}`;
  }
}

function displayWinMessage() {
  winMessage.innerHTML = ``;
  if (currentGame.winner.name === "Draw") {
    winMessage.insertAdjacentHTML("afterbegin", `
    <h2>It's a draw!</h2>
    <img src="${currentGame.players[0].choiceImage}">
    <img src="${currentGame.players[1].choiceImage}">
    `);
  } else {
    winMessage.insertAdjacentHTML("afterbegin", `
    <h3>${currentGame.winner.name} wins!</h3>
    <img src="${currentGame.players[0].choiceImage}">
    <img src="${currentGame.players[1].choiceImage}">
    `);
  }
}

function startNewGame() {
  toggleChangeGameBtn();
  var gameDifficulty = determineGameDifficulty();
  switchView(gameDifficulty, winGameBoard);
}

function resetGame() {
  toggleChangeGameBtn();
  switchView(chooseGameDifficulty, winGameBoard);
}
