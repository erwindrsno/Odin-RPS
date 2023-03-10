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
  } else if (playerChoice === "papera") {
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

console.log("===GAME BEGIN===");
const btnList = document.querySelectorAll('.btn');
if(btnList != null){
  console.log("not null sans");
  for (let i = 0; i < 3; i++){
    btnList[i].addEventListener('click', () => {
      const playerSelection = btnList[i].value;

      let computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      console.log(result);

      const div = document.getElementById('output');
      const p = document.createElement('p');
      p.textContent = result;
      
      div.appendChild(p);
    });
  }
}