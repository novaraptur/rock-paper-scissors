
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
  switchView(mainGame, currentView);
}

function resetGame() {

}
