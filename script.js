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

function fiveRounds() {
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
}