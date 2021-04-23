
// Global Variables
var currentGame = new Game();

// Query Selectors
var changeGameBtn = document.querySelector("#changeGameBtn");
var regularGameCard = document.querySelector("#regularGameCard");
var difficultGameCard = document.querySelector("#difficultGameCard");

// Event Listeners

window.addEventListener("load", function () {
  currentGame.addPlayers();
})

// Functions
