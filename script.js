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

// Function to play entire game

function playGame() {
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
  }

  // Round 1
  playRound(getHumanChoice(), getComputerChoice());
  // Round 2
  playRound(getHumanChoice(), getComputerChoice());
  // Round 3
  playRound(getHumanChoice(), getComputerChoice());
  // Round 4
  playRound(getHumanChoice(), getComputerChoice());
  // Round 5
  playRound(getHumanChoice(), getComputerChoice());

  console.log("your score: " + humanScore);
  console.log("computers score: " + computerScore);

  // Final words declaring the winner
  if (humanScore > computerScore) {
    console.log("Congrats! You won the game!");
  } else if (humanScore === computerScore) {
    console.log("It's a tie! Try again!");
  } else {
    console.log("Damn! Computer won the game! Better luck next time...");
  }
}

playGame();
