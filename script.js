// Const to take player's and computer's selection
//let playerSelection = prompt('Select Rock, Paper or Scissors.').toLowerCase();
const choices = ['rock', 'paper', 'scissors'];
let computerSelection = choices[Math.floor(Math.random() * 3)];

// Track score
let playerScore = 0;
let computerScore = 0;
const lose = "You Lose!";
const win = "You Win!";
const tie = "It's a tie";


//Play a single round

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return tie;
    } else if((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {    
        return win;
    } else {
        return lose;
    }
}

// Play game

function game(){
    for(let i = 0; i < 5; i++) {
        playerSelection = prompt('Select Rock, Paper or Scissors.').toLowerCase();
        computerSelection = choices[Math.floor(Math.random() * 3)];

        let result = playRound(playerSelection, computerSelection);

        if (result == win) {
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
        } else if (result == lose) {
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
        } else {
            console.log(tie);
        }
    }

}

game();