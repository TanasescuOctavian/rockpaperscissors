let userScore = 0;
let compScore = 0;
let buttons = document.querySelectorAll('button');
game();
function game(){
    buttons.forEach(button => button.addEventListener('click', displayRound));
}
function displayRound(e){
    let compChoice = computerPlay();
    let signComp = document.querySelector('#ChoiceComp');
    let signUser = document.querySelector('#ChoiceUser');
    signUser.textContent = 'You chose: ' + e.target.id;
    signComp.textContent = 'The computer chose: ' + compChoice;

    console.log(playRound(e.target.id, compChoice));
    const score = document.querySelector('#currScore');
    if(userScore === 5 || compScore === 5){
        buttons.forEach(button => button.removeEventListener('click', displayRound));
        let h3 = document.querySelector('h3');
        h3.textContent = 'Final Score';
        if(userScore > compScore){
            score.textContent = `Computer:  ${compScore}  You:  ${userScore}    YOU WIN!`;
        }
        else{
            score.textContent = `Computer:   ${compScore}  You:  ${userScore}     COMPUTER WINS!`;
        }
        return;
    }
    score.textContent = 'Computer: ' + compScore + ' You: ' + userScore;
}
function computerPlay(){
    let rand = Math.random();
    if(rand <= 1/3){
        return "Rock";
    }
    else if(rand <= 2/3){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
function playRound(playerSelection, computerSelection){
    if(playerSelection.match(/rock/i)){
        if(computerSelection == "Rock"){
            return "Draw!";
        }
        else if(computerSelection == "Paper"){
            compScore++;
            return "You lose! Paper beats Rock.";
        }
        else if(computerSelection == "Scissors"){
            userScore++;
            return "You win! Rock beats Scissors.";
        }
    }
    else if(playerSelection.match(/paper/i)){
        if(computerSelection == "Paper"){
            return "Draw!";
        }
        else if(computerSelection == "Rock"){
            userScore++;
            return "You win! Paper beats Rock.";
        }
        else if(computerSelection == "Scissors"){
            compScore++;
            return "You lose! Scissors beat Paper.";
        }
    }
    else if(playerSelection.match(/scissors/i)){
        if(computerSelection == "Scissors"){
            return "Draw!";
        }
        else if(computerSelection == "Paper"){
            userScore++;
            return "You win! Scissors beat Paper.";
        }
        else if(computerSelection == "Rock"){
            compScore++;
            return "You lose! Rock beats Scissors.";
        }
    }
    else{
        return "The Input was invalid.";
    }
}