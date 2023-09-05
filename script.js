// Const to take player's and computer's selection
//const playerSelection = prompt('Select Rock, Paper or Scissors.').toLowerCase();
const playerSelection = 'scissors';
const choices = ['rock', 'paper', 'scissors'];
const computerSelection = choices[Math.floor(Math.random() * 3)];


//Play a single round

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return `It's a tie!`;
    } else if((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`
    }
}

console.log(playRound(playerSelection, computerSelection));