
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

  //add both human & computer players to the array
  //get human to take turn
  //randomly generate option for Computer
  //compare the two
  //declare winner
}
