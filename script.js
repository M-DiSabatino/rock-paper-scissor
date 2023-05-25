// Make a rock/paper/scissor game against computer

// Prompt user for his choice
let playerSelection = prompt('Choose your weapon: rock, paper, scissors.');

// Get the computer choice
function getComputerChoice()
{
    const compChoice = ['rock', 'paper', 'scissors'];
    // Use object to obtain random number up to 3, round it down, and get the string attached
    let computerSelection = compChoice[Math.floor(Math.random() * 3)];
    return computerSelection;
}
let computerSelection = getComputerChoice();

// Compare two choices
function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    
    // If values are equal it's a draw
    if (playerSelection === computerSelection)
    {
        let draw = 'It\'s a draw!';
        return draw;
    }

    // If player selects rock
    else if (playerSelection === 'rock')
    {
        if (computerSelection === 'paper')
        {
            let lose = 'You lose! Paper beats rock!';
            return lose;
        }
        else (computerSelection === 'scissors')
        {
            let win = 'You win! Rock beats scissors!';
            return win;
        }
    }

    // If player selects paper
    else if (playerSelection === 'paper')
    {
        if (computerSelection === 'scissors')
        {
            let lose = 'You lose! Scissors beats paper!';
            return lose;
        }
        else (computerSelection === 'rock')
        {
            let win = 'You win! Paper beats rock!';
            return win;
        }
    }

    // If player selects scissors
    else if (playerSelection === 'scissors')
    {
        if (computerSelection === 'rock')
        {
            let lose = 'You lose! Rock beats scissors!';
            return lose;
        }
        else (computerSelection === 'paper')
        {
            let win = 'You win! Scissors beats paper!';
            return win;
        }
    }
}

// Print winner in console
console.log(playRound(playerSelection, computerSelection));
