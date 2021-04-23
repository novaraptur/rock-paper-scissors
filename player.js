
class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.choice = "";
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

module.exports = Player;
