// Make a rock/paper/scissor game against computer


// Prompt user for his choice
function getPlayerChoice()
{
    let playerSelection = prompt('Choose your weapon: rock, paper, scissors.');

    // Lowercase prompted string for comparison
    playerSelection = playerSelection.toLowerCase();

    // Compare if string is one of the options
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')
    {
        return playerSelection;
    }

    // Else ask again for prompt
    else
    {
        prompt('Your weapon is invalid, please choose between rock, paper or scissors.')
    }
}

// Get the computer choice
function getComputerChoice()
{
    const compChoice = ['rock', 'paper', 'scissors'];
    // Use object to obtain random number up to 3, round it down, and get the string attached
    let computerSelection = compChoice[Math.floor(Math.random() * 3)];
    return computerSelection;
}

// Compare two choices
function playRound(playerSelection, computerSelection)
{
    let itsDraw = 'It\'s a draw.',
        rockL = 'Rock loses to paper.',
        rockW = 'Rock wins against scissor.',
        paperL = 'Paper loses to scissors.',
        paperW = 'Paper wins against rock.',
        scissorL = 'Scissors lose against rock.',
        scissorW = 'Scissors wins against paper.';

    if (playerSelection === computerSelection)
    {
        console.log(itsDraw);
        return 'draw';
    }
    
    // If player selects rock
    else if (playerSelection === 'rock')
    { 
        switch (computerSelection)
        {
            case 'paper' :
                console.log(rockL);
                return 'lose';
            default :
                console.log(rockW);
                return 'win';
        }
    }
        
    // If player selects paper
    else if (playerSelection === 'paper')
    {
        switch (computerSelection)
        { 
            case 'scissors':
                console.log(paperL);
                return 'lose';
             default :
                console.log(paperW);
                return 'win';
        }
    }

    // If player selects scissors
    else
    {
        switch (computerSelection)
        {
            case 'rock' :
                console.log(scissorL);
                return 'lose';
            default :
                console.log(scissorW);
                return 'win';
        }
    }
}

// Print winner in console
function reportWinner(scorePlayer, scoreComputer)
{
    if (scorePlayer > scoreComputer)
    {
        console.log(`Player wins ${scorePlayer} to ${scoreComputer}`);
    }
    else if (scorePlayer < scoreComputer)
    {
        console.log(`Computer wins ${scoreComputer} to ${scorePlayer}`);
    }
    else 
    {
        console.log('The scores are equal, it\'s a draw!');
    }
}

// Add function for best out of 5
function game()
{
    // Get score for two players
    let scorePlayer = 0, 
        scoreComputer = 0;
    const maxScore = 5;

    // Repeat for 5 rounds
    for (let i = 0; i < maxScore; i++)
    {
        let playerSelection = getPlayerChoice(),
            computerSelection = getComputerChoice();
        
        switch (playRound(playerSelection, computerSelection))
        {
            // If player wins score player + 1
            case 'win':
            {
                ++scorePlayer;
                console.log(`Round ${i + 1} out of ${maxScore}. Player score: ${scorePlayer} - Computer score: ${scoreComputer}.`);
                break;
            }
            
            // If player loses score computer + 1
            case 'lose':
            {
                ++scoreComputer;
                console.log(`Round ${i + 1} out of ${maxScore}. Player score: ${scorePlayer} - Computer score: ${scoreComputer}.`);
                break;
            }
            
            // If draw add nothing
            default :
            {
                ++scorePlayer;
                ++scoreComputer;
                console.log(`Round ${i + 1} out of ${maxScore}. Player score: ${scorePlayer} - Computer score: ${scoreComputer}.`);
            }
        }
    }

    // Report winner
    reportWinner(scorePlayer, scoreComputer);
}


game();
