
// Global Variables
var currentGame = new Game();

// Query Selectors
var changeGameBtn = document.querySelector("#changeGameBtn");
var chooseGameDifficulty = document.querySelector("#chooseGameDifficulty");
var difficultGameCard = document.querySelector("#difficultGameCard");
var difficultPlayerSelect  = document.querySelector("#difficultPlayerSelect");
var mainGame = document.querySelector("#mainGame");
var regularGameCard = document.querySelector("#regularGameCard");
var regularPlayerSelect = document.querySelector("#regularPlayerSelect");

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

function runGame() {
  computerChoice();
  currentGame.playMatch();
  alert(currentGame.winner.name);
}

function computerChoice() {
  var optionNumber;
  if (currentGame.gameType === "Difficult") {
    optionNumber = 5;
  } else {
    optionNumber = 3;
  }
  var randomChoice = Math.floor(Math.random() * optionNumber);
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

function resetGame() {

}
