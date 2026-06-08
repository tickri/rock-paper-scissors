// Random Computer Choice

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// User Choice all lower case

function getHumanChoice() {
  return prompt("Enter Rock, Paper or Scissors").toLowerCase();
}

// Declaring Value 0 to humanScore and computerScore

let humanScore = 0;
let computerScore = 0;

// Function to play one single round

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie! Both chose " + humanChoice);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win! " + humanChoice + " beats " + computerChoice);
    humanScore++;
  } else {
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
    computerScore++;
  }
  console.log("your score: " + humanScore);
  console.log("computers score: " + computerScore);
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
