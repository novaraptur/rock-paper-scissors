
// Global Variables
var currentGame = new Game();

// Query Selectors
var changeGameBtn = document.querySelector("#changeGameBtn");
var chooseGameDifficulty = document.querySelector("#chooseGameDifficulty");
var difficultGameCard = document.querySelector("#difficultGameCard");
var difficultPlayerSelect  = document.querySelector("#difficultPlayerSelect");
var regularGameCard = document.querySelector("#regularGameCard");
var regularPlayerSelect = document.querySelector("#regularPlayerSelect");

// Event Listeners

regularGameCard.addEventListener("click", function() {
  currentGame.gameType = "Regular";
  switchView(regularPlayerSelect);
});

difficultGameCard.addEventListener("click", function() {
  currentGame.gameType = "Difficult";
  switchView(difficultPlayerSelect);
})

changeGameBtn.addEventListener("click", resetGame);

// Functions

function switchView(view) {
  chooseGameDifficulty.classList.add("hidden");
  view.classList.remove("hidden");
}

function resetGame() {

}
