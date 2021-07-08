let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// set the target number when a new round starts
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

// get absolute distance from the target number
const getAbsoluteDistance = (input, target) => {
  let distance = Math.abs(input - target);
  return distance;
};

// compare the guesses and return 'true' if the user's guess
// is less than or equal to the computer's guess
const compareGuesses = (humanGuessInput, computerGuess, generateTarget) => {
  if (
    getAbsoluteDistance(humanGuessInput, generateTarget) <=
    getAbsoluteDistance(computerGuess, generateTarget)
  ) {
    return true;
  }
  return false;
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else computerScore++;
};

const advanceRound = () => {
  currentRoundNumber++;
};
