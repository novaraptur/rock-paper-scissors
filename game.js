
class Game {
  constructor() {
    this.players = [];
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

  //add both human & computer players to the array [x]
  //get human to take turn [x]
  //randomly generate option for Computer []
  //compare the two []
  //declare winner []
}
