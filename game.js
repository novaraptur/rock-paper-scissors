
class Game {
  constructor() {
    this.players = [];
    this.winner = "";
  }

  addPlayers() {
    var human = new Player({name: "Human", token: ""});
    this.players.push(human);
    var computer = new Player({name: "Computer", token: ""});
    this.players.push(computer);
  }

  takeTurn(player, playerChoice) {
    this.players[player].takeTurn(playerChoice);
  }

  decideWinner() {
    var humanChoice = this.players[0].choice;
    this.compareChoices(humanChoice);
  }

  compareChoices(humanChoice) {
    var computerChoice = this.players[1].choice;
    if (humanChoice === "Rock") {
      if (computerChoice === "Scissors" || computerChoice === "Lizard") {
        this.players[0].winGame();
        this.winner = this.players[0];
      } else {
        this.players[1].winGame();
        this.winner = this.players[1];
      }
    } else if (humanChoice === "Scissors") {

    } else if (humanChoice === "Paper") {

    } else if (humanChoice === "Lizard") {

    } else if (humanChoice === "Alien") {

    }
  }

  //add both human & computer players to the array [x]
  //get human to take turn [x]
  //get Computer to take turn [x]
  //compare the two []
  //declare winner []
}
