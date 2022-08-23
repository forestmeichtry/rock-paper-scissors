// Generates random choice for computer opponent
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 2) {
        return 'Rock';
    } else if (choice === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

// Plays a round of RPS using passed player and computer choices
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a Tie! You both chose " + playerSelection;
    }

    // Array of possible combinations, the 2nd item in each array is the winner of that combination
    const combinations = [['Rock', 'Paper'], ['Paper', 'Scissors'], ['Scissors', 'Rock']];
    for (const [loser, winner] of combinations) {
        if (playerSelection === loser && computerSelection === winner) {
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        } else if (playerSelection === winner && computerSelection === loser) {
            return "You Win! " + playerSelection + " beats " + computerSelection;
        }
    }
    return "Something unexpected happened"
    
}