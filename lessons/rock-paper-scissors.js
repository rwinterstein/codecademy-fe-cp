// get the users choice based on their input
const getUserChoice = (userInput) => {
  // convert the users input to lowercase
  userInput = userInput.toLowerCase();

  // check if the users input is a valid selection
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log(
      "Please choose one of the following: rock, paper, (or) scissors.\nEnsure there are no spelling errors and your string only consists of letters."
    );
  }
};

// randomly set the computers choice
const getComputerChoice = () => {
  // get a number between 0 and 2
  let result = Math.floor(Math.random() * 3);

  // set the computers choice based on the result
  switch (result) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "Error: Invalid choice";
      break;
  }
};

// determine the winner based on the user's and computer's choices
const determineWinner = (userChoice, computerChoice) => {
  // check if the game results in a tie
  if (userChoice === computerChoice) {
    return "Game result: Tie";
  }

  // did the user cheat?
  if (userChoice === "bomb") {
    return "User choice: BOMB!\nAny computer choice automatically loses!\nSucks to suck!";
  }

  // result if the user chooses 'rock'
  if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      return "User choice: rock\nComputer choice: scissors\nYou won!";
    } else {
      return "User choice: rock\nComputer choice: paper\nYou lost.";
    }
  }

  // result if the user chooses 'paper'
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "User choice: paper\nComputer choice: rock\nYou won!";
    } else {
      return "User choice: paper\nComputer choice: scissors\nYou lost.";
    }
  }

  // result if the user chooses 'scissors'
  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "User choice: scissors\nComputer choice: paper\nYou won!";
    } else {
      return "User choice: scissors\nComputer choice: rock\nYou lost.";
    }
  }
};

// pass the user's and computer's choice and log the game result
const playGame = (userInput) => {
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();

  let gameResult = determineWinner(userChoice, computerChoice);
  console.log(gameResult);
};

// let's play the dang thing!
playGame("rock");
