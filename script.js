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
    let win = 'win';
    let lose = 'lose';
    let draw = 'draw';

    // If values are equal it's a draw
    switch (playerSelection)
    {
        case computerSelection : 
            console.log('It\'s a draw.');
            return draw;

    // If player selects rock
        case 'rock' : 
        {    
            switch (computerSelection)
            {
                case 'paper' :
                    console.log('Rock loses to paper.');
                    return lose;
                case 'scissors' :
                    console.log('Rock wins against scissors.');
                    return win;
            }
        }
    // If player selects paper
        case 'paper' :
        {
            switch (computerSelection)
            { 
                case 'scissors':
                    console.log('Paper loses to scissors.');
                    return lose;
                case 'rock' :
                    console.log('Paper wins against rock.');
                    return win;
            }
        }

    // If player selects scissors
        case 'scissors' :
        {
            switch (computerSelection)
            {
                case 'rock' :
                    console.log('Scissors lose against rock.');
                    return lose;
                case 'paper' :
                    console.log('Scissors wins against paper.');
                    return win;
            }
        }
    }
}

// Print winner in console
//console.log(playRound(playerSelection, computerSelection));

// Add function for best out of 5
function game()
{
    // Get score for two players
    let scorePlayer = 0; 
    let scoreComputer = 0;
    let maxScore = 5;

    // Repeat for 5 rounds
    for (let i = 0; i < maxScore; i++)
    {
        let playerSelection = getPlayerChoice();

        let computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);

        // If player wins score player + 1
        switch (playRound(playerSelection, computerSelection))
        {
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
            case 'draw':
            {
                scorePlayer += 1;
                scoreComputer += 1;
                console.log(`Round ${i + 1} out of ${maxScore}. Player score: ${scorePlayer} - Computer score: ${scoreComputer}.`);
            }
        }
    }
    // Report winner
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

game();
