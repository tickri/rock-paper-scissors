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
console.log(getComputerChoice());

// User Choice all lower case

function getHumanchoice() {
  return prompt("Enter Rock, Paper or Scissors").toLowerCase();
}
console.log(getHumanchoice());
