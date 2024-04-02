/* const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYERS_WINS = "PLAYERS_WIN";
const RESULT_COMPUTER_WINS = "COMPUTER_WIN";

let isGameRunning = false;

const startGameBtn = document.getElementById("start-game-btn");

startGameBtn.addEventListener("click", startGame);

function startGame() {
  if (isGameRunning) {
    return;
  }
  isGameRunning = true;

  const playerSelection = getPlayerSelection();
  const computerSelection = getComputerSelection();
  const winner = getWinner(playerSelection, computerSelection);
  let message = `you picked ${playerSelection} and computer picked ${computerSelection},therefore`;
  if(winner === RESULT_DRAW){
    message = message + 'you had a draw.'
  }else if(winner === RESULT_PLAYERS_WINS){
    message = message + 'you have won the match.'
  }else{
    message = message + 'you lost the match.'
  }
  alert(message);
  isGameRunning = false;
}

const getPlayerSelection = () => {
  const selection = prompt(`${ROCK},${PAPER},${SCISSORS}?`, "").toUpperCase();

  if (
    selection !== "ROCK" &&
    selection !== "PAPER" &&
    selection !== "SCISSORS"
  ) {
    alert(`Invalid Choice! We choose ${DEFAULT_USER_CHOICE} for you.`);
  }
  return selection;
};

const getComputerSelection = () => {
  const randomValues = Math.random();
  if (randomValues < 0.34) {
    return ROCK;
  } else if (randomValues < 0.64) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (pChoice, cChoice) => {
  return pChoice === cChoice
    ? RESULT_DRAW
    : (pChoice === PAPER && cChoice === ROCK) ||
      (pChoice === SCISSORS && cChoice === PAPER) ||
      (pChoice === ROCK && cChoice === SCISSORS)
    ? RESULT_PLAYERS_WINS
    : RESULT_COMPUTER_WINS;
};
 */

//Alternative approach 

const playerDisplay = document.getElementById('playerSelection');
const computerDisplay = document.getElementById('computerSelection');
const winnerResult = document.getElementById('result');
let playerScoreDisplay = document.getElementById('playerScore');
let computerScoreDisplay = document.getElementById('computerScore');

const choices = ["rock", "paper", "scissors"];
let playerScores = 0;
let computerScores = 0;

playGame = (playerChoice) => {
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  let resultDisplay = "";

  if (playerChoice === computerChoice) {
    resultDisplay = "It's a TIE!"
  }
  else {
    switch (playerChoice) {
      case "rock":
        resultDisplay = (computerChoice === "scissors") ? 'YOU WON!' : 'YOU LOST!';
        break;
      case "paper":
        resultDisplay = (computerChoice === "rock") ? 'YOU WON!' : 'YOU LOST!';
        break;
      case "scissors":
        resultDisplay = (computerChoice === "paper") ? 'YOU WON!' : 'YOU LOST!';
        break;
    }
  }

  playerDisplay.textContent =`Player : ${playerChoice}`;
  computerDisplay.textContent =`Computer : ${computerChoice}`;
  winnerResult.textContent = resultDisplay;

  winnerResult.classList.remove("greenText", "redText");

  switch(resultDisplay){
    case 'YOU WON!':
      winnerResult.classList.add("greenText");
      playerScores++;
      playerScoreDisplay.textContent = playerScores;
      break;
      case 'YOU LOST!':
        winnerResult.classList.add("redText");
        computerScores++;
        computerScoreDisplay.textContent = computerScores;
        break;
  }
}