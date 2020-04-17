// This function generates rock, scissor or paper randomly from the computer

function computerPlay() {
  num = Math.floor(Math.random() * 3);

  if (num === 0) {
    return 'rock'
  }

  else if (num === 1) {
    return 'paper'
  }

  else if (num === 2) {
    return 'scissor'
  }

}


let playerSelection = 'rock'
let computerSelection = computerPlay()



function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return 'The game is a tie';
  }


  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return 'You lose, Computers paper beats your rock.'
    } else {
      return 'You win, your rock bears computer paper!'
    }
  }

  if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      return 'You lose, Computers scissor bears your paper.'
    } else {
      return 'You win! Your paper bears Computers rock!'
    }

    if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
        return 'You lose, Computers rock beats your scissor'
      } else {
        return 'You win! Your rock beats Computers scissor!'
      }
    }
  }
};

console.log(playRound(playerSelection, computerSelection));