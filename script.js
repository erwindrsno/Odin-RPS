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

console.log("===GAME BEGIN===");
let playerScore = 0;
let computerScore = 0;
let roundCounter = 1;

const btnList = document.querySelectorAll('.btn');
if(btnList != null){
  console.log("not null sans");

  const pPlayer = document.querySelector(".pScore");
  const pComputer = document.querySelector(".cScore");
  const round = document.getElementById("round");
  const winner = document.querySelector(".winner");
  const pResult = document.querySelector(".result");

  for (let i = 0; i < 3; i++){
    btnList[i].addEventListener('click', () => {
      const playerSelection = btnList[i].value;

      let computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      if(result === "player wins"){
        playerScore++;
        pPlayer.textContent = playerScore;
        winner.textContent = "<=";
      }
      else if(result === "computer wins"){
        computerScore++;
        pComputer.textContent = computerScore;
        winner.textContent = "=>"
      }
      else{
        winner.textContent = "<=>";
      }

      if(playerScore == 5 || computerScore == 5){
        console.log("winner declared");
        if(playerScore > computerScore){
          console.log("if entered");
          pResult.textContent = "Congrats! you win.";
        }
        else{
          pResult.textContent = "Better luck next time.";
        }
      }
      roundCounter++;
      round.textContent = "Round " + roundCounter;
      console.log(result);

      // const div = document.getElementById('output');
      // const p = document.createElement('p');
      // p.textContent = result;
      
      // div.appendChild(p);
    });
  }
}