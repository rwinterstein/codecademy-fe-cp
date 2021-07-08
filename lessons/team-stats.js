const team = {
  _players: [
    {
      firstName: "Jonathan",
      lastName: "Huberdeau",
      age: 27,
    },
    {
      firstName: "Sasha",
      lastName: "Barkov",
      age: 25,
    },
    {
      firstName: "Spencer",
      lastName: "Knight",
      age: 20,
    },
  ],

  _games: [
    {
      opponent: "Lightning",
      teamPoints: 79,
      opponentPoints: 75,
    },
    {
      opponent: "Hurricanes",
      teamPoints: 79,
      opponentPoints: 80,
    },
    {
      opponent: "Predators",
      teamPoints: 79,
      opponentPoints: 64,
    },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let newPlayer = {
      firstName,
      lastName,
      age,
    };
    this.players.push(newPlayer);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let newGame = {
      opponent,
      teamPoints,
      opponentPoints,
    };
    this.games.push(newGame);
  },
};

// Checks getter methods
console.log(team.players);
console.log(team.games);

// Adds more players and games
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("Lightning", 79, 75);
team.addGame("Hurricanes", 79, 80);
team.addGame("Predators", 79, 64);

// Logs updated array of players and games
console.log(team.players);
console.log(team.games);
