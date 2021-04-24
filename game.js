
class Game {
  constructor() {
    this.players = [];
    this.winner = "";
    this.gameType = "";
  }

  addPlayers() {
    var human = new Player({name: "Human", token: ""});
    this.players.push(human);
    var computer = new Player({name: "Computer", token: ""});
    this.players.push(computer);
  }

  setPlayerChoice(player, playerChoice) {
    this.players[player].takeTurn(playerChoice);
  }

  playMatch() {
    var humanChoice = this.players[0].choice;
    var computerChoice = this.players[1].choice;
    this.compareChoices(humanChoice, computerChoice);
  }

  compareChoices(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      this.winner = {name: "Draw"};
    } else if (humanChoice === "Rock") {
      this.evaluateChoices(computerChoice, "Scissors", "Lizard");
    } else if (humanChoice === "Scissors") {
      this.evaluateChoices(computerChoice, "Paper", "Lizard");
    } else if (humanChoice === "Paper") {
      this.evaluateChoices(computerChoice, "Rock", "Alien");
    } else if (humanChoice === "Lizard") {
      this.evaluateChoices(computerChoice, "Paper", "Alien");
    } else if (humanChoice === "Alien") {
      this.evaluateChoices(computerChoice, "Rock", "Scissors");
    }
  }

  evaluateChoices(computerChoice, winCondition1, winCondition2) {
    if (computerChoice === winCondition1 || computerChoice === winCondition2) {
      this.players[0].winGame();
      this.winner = this.players[0];
    } else {
      this.players[1].winGame();
      this.winner = this.players[1];
    }
  }

  decideWinner() {
    if (this.winner === "Draw") {
      return "Draw";
    } else if (this.winner === this.players[0]) {
      return "Human";
    } else {
      return "Computer";
    }
  }

  clearGame() {
    this.players = [];
    this.winner = "";
    this.gameType = "";
  }
}
