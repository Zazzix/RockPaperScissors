// Const to take player's and computer's selection
//let playerSelection = prompt('Select Rock, Paper or Scissors.').toLowerCase();
const choices = ['rock', 'paper', 'scissors'];
//let computerSelection = choices[Math.floor(Math.random() * 3)];

function computerSelection(choices) {
    return choices[Math.floor(Math.random() * 3)];
}

// Track score
let playerScore = 0;
let computerScore = 0;
const lose = "You Lose!";
const win = "You Win!";
const tie = "It's a tie";

// Interface const
const displayPlayerScore = document.querySelector('.player_scroe');
const displayComputerScore = document.querySelector('.computer_score');
const displayWinner = document.querySelector('.status');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const restartButton = document.querySelector('#restart');

// Event Listeners

rockButton.addEventListener('click', () => {
    playRound(choices[0], computerSelection(choices));
});

paperButton.addEventListener('click', () => {
    playRound(choices[1], computerSelection(choices));
});

scissorsButton.addEventListener('click', () => {
    playRound(choices[2], computerSelection(choices));
});

restartButton.addEventListener('click', () => {
    displayWinner.textContent = '';
    displayPlayerScore.textContent = `Player: 0`;
    displayComputerScore.textContent = `Computer: 0`;
    playerScore = 0;
    computerScore = 0;
    rockButton.classList.remove('disabled');
    paperButton.classList.remove('disabled');
    scissorsButton.classList.remove('disabled');
})


//Play a single round

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        displayWinner.textContent = tie;

        checkWinner(playerScore, computerScore)
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        displayWinner.textContent = win;
        playerScore++;
        displayPlayerScore.textContent = `Player: ${playerScore}`;

        checkWinner(playerScore, computerScore)
    } else {
        displayWinner.textContent = lose;
        computerScore++;
        displayComputerScore.textContent = `Computer: ${computerScore}`;

        checkWinner(playerScore, computerScore)
    }
};

function checkWinner(playerScore, computerScore) {
    if (playerScore == 5) {
        rockButton.classList.add('disabled');
        paperButton.classList.add('disabled');
        scissorsButton.classList.add('disabled');
        displayWinner.textContent = 'You are the winner!';
    } else if (computerScore == 5) {
        rockButton.classList.add('disabled');
        paperButton.classList.add('disabled');
        scissorsButton.classList.add('disabled');
        displayWinner.textContent = 'Computer wins!';
    }
};