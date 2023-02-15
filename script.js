function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3);
  switch (rand) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissor";
  }
}

// for (let i = 0; i < 10; i++) {
//   console.log(getComputerChoice());
// }

function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toLowerCase();
  if (playerChoice === "rock") {
    if (computerSelection === "rock") {
      return "draw.";
    } else if (computerSelection === "paper") {
      return "computer wins";
    } else if (computerSelection === "scissor") {
      return "player wins";
    }
  } else if (playerChoice === "paper") {
    if (computerSelection === "rock") {
      return "player wins";
    } else if (computerSelection === "paper") {
      return "draw.";
    } else if (computerSelection === "scissor") {
      return "computer wins";
    }
  } else if (playerChoice === "scissor") {
    if (computerSelection === "rock") {
      return "computer wins";
    } else if (computerSelection === "paper") {
      return "player wins";
    } else if (computerSelection === "scissor") {
      return "draw.";
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Input please");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

console.log("===GAME BEGIN===");
game();
