// Generates random choice for computer opponent
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 2) {
        return 'Rock'
    } else if (choice === 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

// Plays a round of RPS using passed player and computer choices
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie'
    }

    // Array of possible combinations, the 2nd item in each array is the winner of that combination
    const combinations = [['Rock', 'Paper'], ['Paper', 'Scissors'], ['Scissors', 'Rock']];

    for (const [loser, winner] of combinations) {
        if (playerSelection === loser && computerSelection === winner) {
            return 'lose'
        } else if (playerSelection === winner && computerSelection === loser) {
            return 'win'
        }
    }
}

// Helper function that checks user input
function isValid(input) {
    input = input.toLowerCase();
    if (input === 'rock' || input === 'paper' || input === 'scissors') {
        return true
    } else {
        return false
    }
}

// Plays a round of RPS using the clicked button as the user selection, results are displayed in the console
function buttonClick() {
    let playerSelection = this.id;
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    let resultDisplay = document.getElementById('results');
    let playerScore = document.getElementById('player-score');
    let computerScore = document.getElementById('computer-score');

    if (result === 'tie') {
        resultDisplay.textContent = "It's a Tie! You both chose " + playerSelection;
    } else if (result === 'lose') {
        resultDisplay.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    } else if (result === 'win') {
        resultDisplay.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }

    if (playerScore.textContent === '5') {
        resultDisplay.textContent = 'Congratulations! You beat the computer best of 5! Play again?';
        playerScore.textContent = '0';
        computerScore.textContent = '0';
    } else if (computerScore.textContent === '5') {
        resultDisplay.textContent = 'Sorry, you lost the best of 5. Try again?';
        playerScore.textContent = '0';
        computerScore.textContent = '0';
    }
}

function mouseOff() {
    this.classList.remove('mouseover');
}

function mouseOver() {
    this.classList.add('mouseover');
    this.addEventListener('mouseout', mouseOff, {once : true});
}

let buttons = document.querySelectorAll('input');
buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
    button.addEventListener('mouseover', mouseOver);
});

/* function fiveRounds() {
    let playerSelection = '';
    let score = 0;
    for (let i = 0; i < 5; i++) {
        while (!isValid(playerSelection)) {
            playerSelection = prompt('Choose your weapon: Rock, Paper or Scissors')
        }
        // Fix case for user input
        playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();

        computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result === 'win') {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            score++;
        } else if (result === 'lose') {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        } else if (result === 'tie') {
            console.log("It's a Tie! You both chose " + playerSelection)
        }
        playerSelection = '';
    }
    console.log("You scored " + score + " out of 5 rounds!");
} */