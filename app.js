function game() {
    let rounds = 0;
    let playerScore = 0;
    let computerScore = 0;

    while (rounds < 5) {
        playRound(playerPlay(), computerPlay());
        rounds++;
    }

    score();

    function playerPlay() {
        let playerSelection = prompt(' rock | paper | scissors ');
        if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
            console.log(`Your choice is ${playerSelection}.`)
            return playerSelection;
        }
    }

    function computerPlay() {
        const options = ['rock', 'paper', 'scissors'];
        computerSelection = options[Math.floor(Math.random() * options.length)];
        return computerSelection;
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection == 'rock' && computerSelection == 'scissors') {
            playerScore++;
            console.log(`Computer's choice is ${computerSelection}`);
            console.log(`You won, because ${playerSelection} beats ${computerSelection}`);
            console.log(`Your score is ${playerScore} | Computer's score is ${computerScore}`);
            return playerScore;
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            playerScore++;
            console.log(`Computer's choice is ${computerSelection}`);
            console.log(`You won, because ${playerSelection} beats ${computerSelection}`);
            console.log(`Your score is ${playerScore} | Computer's score is ${computerScore}`);
            return playerScore;
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            playerScore++;
            console.log(`Computer's choice is ${computerSelection}`);
            console.log(`You won, because ${playerSelection} beats ${computerSelection}`);
            console.log(`Your score is ${playerScore} | Computer's score is ${computerScore}`);
            return playerScore;
        } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
            computerScore++;
            console.log(`Computer's choice is ${computerSelection}`);
            console.log(`You lost, because ${computerSelection} beats ${playerSelection}`);
            console.log(`Your score is ${playerScore} | Computer's score is ${computerScore}`);
            return computerScore;
        } else if (computerSelection == 'paper' && playerSelection == 'rock') {
            computerScore++;
            console.log(`Computer's choice is ${computerSelection}`);
            console.log(`You lost, because ${computerSelection} beats ${playerSelection}`);
            console.log(`Your score is ${playerScore} | Computer's score is ${computerScore}`);
            return computerScore;
        } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
            computerScore++;
            console.log(`Computer's choice is ${computerSelection}`);
            console.log(`You lost, because ${computerSelection} beats ${playerSelection}`);
            console.log(`Your score is ${playerScore} | Computer's score is ${computerScore}`);
            return computerScore;
        }
        else {
            playerScore = playerScore;
            console.log(`Computer's choice is ${computerSelection}.`)
            console.log(`Tie, because both chose ${playerSelection}`);
            console.log(`Scores remain the same: ${playerScore} | ${computerScore}`);
        }
    }

    function score() {
        let result;
        console.log(`FINAL SCORE: ${playerScore} | ${computerScore}`);
        if (playerScore > computerScore) {
            result = console.log('YOU WON!');
        } else if (playerScore < computerScore) {
            result = console.log('YOU LOST!');
        } else {
            result = console.log('TIE!');
        }
        return result;
    }
}