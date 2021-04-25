
class Player {
  constructor(player) {
    this.name = player.name;
    this.token = player.token;
    this.wins = 0;
    this.choice = "";
    this.choiceImage = "";
  }

  takeTurn(playerChoice) {
    this.choice = playerChoice;
  }

  winGame() {
    this.wins++;
  }

  saveWinsToStorage() {

  }

  retrieveWinsFromStorage() {

  }
}
