
// Global Variables
var currentGame = new Game();

// Query Selectors
var changeGameBtn = document.querySelector("#changeGameBtn");
var chooseGameDifficulty = document.querySelector("#chooseGameDifficulty");
var difficultGameCard = document.querySelector("#difficultGameCard");
var difficultPlayerSelect  = document.querySelector("#difficultPlayerSelect");
var mainGame = document.querySelector("#mainGame");
var playerOneWins = document.querySelector("#playerOneWins");
var playerTwoWins = document.querySelector("#playerTwoWins");
var regularGameCard = document.querySelector("#regularGameCard");
var regularPlayerSelect = document.querySelector("#regularPlayerSelect");
var winGameBoard = document.querySelector("#winGameBoard");
var winMessage = document.querySelector("#winMessage");

// Event Listeners

regularGameCard.addEventListener("click", function() {
  currentGame.gameType = "Regular";
  currentGame.addPlayers();
  switchView(regularPlayerSelect, chooseGameDifficulty);
});

difficultGameCard.addEventListener("click", function() {
  currentGame.gameType = "Difficult";
  currentGame.addPlayers();
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

// Functions

function switchView(viewTo, viewFrom) {
  viewFrom.classList.add("hidden");
  viewTo.classList.remove("hidden");
}

function selectPlayerChoice(event, currentView) {
  if (event.target.id === "rock") {
    currentGame.setPlayerChoice(0, "Rock");
  } else if (event.target.id === "scissors") {
    currentGame.setPlayerChoice(0, "Scissors");
  } else if (event.target.id === "paper") {
    currentGame.setPlayerChoice(0, "Paper");
  } else if (event.target.id === "lizard") {
    currentGame.setPlayerChoice(0, "Lizard");
  } else if (event.target.id === "alien") {
    currentGame.setPlayerChoice(0, "Alien");
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
  } else if (randomChoice === 2) {
    currentGame.setPlayerChoice(1, "Scissors");
  } else if (randomChoice === 3) {
    currentGame.setPlayerChoice(1, "Paper");
  } else if (randomChoice === 4) {
    currentGame.setPlayerChoice(1, "Lizard");
  } else if (randomChoice === 5) {
    currentGame.setPlayerChoice(1, "Alien");
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
    <h3>It's a draw!</h3>
    `);
  } else {
    winMessage.insertAdjacentHTML("afterbegin", `
    <h3>${currentGame.winner.name} wins!</h3>
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
