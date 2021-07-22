function game () {
const  rockPaperScissors = ["rock", "paper", "scissors"];

var playerScore = 0;
var computerScore = 0;

function computerPlay (){

  const random = Math.floor(Math.random() * rockPaperScissors.length);
  return random, rockPaperScissors[random];
  
}


function playRound(playerSelection, computerSelection) {
          // your code here!


  if (playerSelection == 'rock' && computerSelection == 'scissors'){
      playerScore++;
      return `You Win! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`;
  }
  else if (playerSelection === 'paper' && computerSelection === 'rock'){
      playerScore++; 
      return `Paper beats rock, Nice win! Score: ${playerScore} to ${computerScore}`;
  }
  else if (playerSelection === 'scissors' && computerSelection === 'paper'){
      playerScore++;  
      return `Scissors beats paper, Nice win! Score: ${playerScore} to ${computerScore}`;
  }         
  else if (computerSelection === 'rock' && playerSelection === 'scissors'){
      computerScore++;
      return `Rock beats scissors, You lose! Score: ${playerScore} to ${computerScore}`;
  }
  else if (computerSelection === 'paper' && playerSelection === 'rock'){
      computerScore++;  
      return `Paper beats rock, You lose! Score: ${playerScore} to ${computerScore}`;
  }
  else if (computerSelection === 'scissors' && playerSelection === 'paper'){
      computerScore++;  
      return `Scissors beats paper, You lose! Score: ${playerScore} to ${computerScore}`;
  }
  else if (playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors") {
    return "This is not a valid entry. Try again.";
  }
  else return `Try again, draw! Score: ${playerScore} to ${computerScore}`;

}


  for (let i = 0; i < 11; i++) {
    const pickYourChoice = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();
    playerSelection = pickYourChoice.toLowerCase();
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
}


if (playerScore > computerScore) {
    console.log(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
} else if (computerScore > playerScore) {
    console.log(`You're the loser. Final Score: ${playerScore} to ${computerScore}`);
} else
    console.log(`You tied. Final Score: ${playerScore} to ${computerScore}`);

}

game();


