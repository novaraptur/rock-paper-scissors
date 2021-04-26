
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
    localStorage.setItem(`${this.name}`, this.wins);
  }

  retrieveWinsFromStorage() {
    this.wins = parseInt(localStorage.getItem(`${this.name}`));
  }
}
