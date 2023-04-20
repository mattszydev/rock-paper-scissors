const paperButton = document.querySelector('#paper');
const rockButton = document.querySelector('#rock');
const scissorButton = document.querySelector('#scissors');
const gameTitle = document.querySelector('#game-status')

const playerMove = document.querySelector('#player-move');
const computerMove = document.querySelector('#computer-move');

const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');

let computerScore = 0;
let playerScore = 0;



paperButton.addEventListener('click', (e) =>{
    const playerChoice = e.target.getAttribute('data-selection');
    const result = playRound(playerChoice, getComputerChoice());
    playerMove.textContent = playerChoice;
    decideWinner(result);
    game(playerScore, computerScore);
   
})

rockButton.addEventListener('click', (e) =>{
    const playerChoice = e.target.getAttribute('data-selection');
    const result = playRound(playerChoice, getComputerChoice());
    playerMove.textContent = playerChoice;
    decideWinner(result);
    game(playerScore, computerScore);
})

scissorButton.addEventListener('click', (e) => {
    const playerChoice = e.target.getAttribute('data-selection');
    const result = playRound(playerChoice, getComputerChoice());
    playerMove.textContent = playerChoice;
    //console.log(result);
    decideWinner(result);
    game(playerScore, computerScore);
})

    

//uses playRound() as argument
function decideWinner(result) {
    switch (result){
        case 1:
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case 2:
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        default:
            break;
    }
}



function game(globalPlayerScore, globalComputerScore){
    if(globalComputerScore === 5 && globalPlayerScore < 5){
        gameTitle.textContent = 'Computer Wins!'
    }
    else if(globalComputerScore < 5 && globalPlayerScore === 5){
        gameTitle.textContent = 'Player Wins!'
    }
    else{
    }
  
}



function getComputerChoice() {
    const moveOptions = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    const move = moveOptions[randomNumber];
    computerMove.textContent = move;
    return move
}








function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
   
    //No one wins
    if(playerSelection == computerSelection){
        console.log(computerSelection);
        console.log('Tie')
        return 0;
    }
    
    else if(playerSelection === 'rock'){

        if(computerSelection == 'scissors'){
             
            console.log(computerSelection);
            console.log('You Win');
            //Player win
            return 1;
        }
        else{
            console.log(computerSelection);
            console.log('You Lose');
            //Computer win
            return 2;
        }
    }

    else if(playerSelection === 'paper'){
        if(computerSelection == 'rock'){
            console.log(computerSelection);
            console.log('You Win');
            //Player win
            return 1;
        }
        else{
            console.log(computerSelection);
            console.log('You Lose');
            //Computer win
            return 2;
        }
    }

    else if(playerSelection === 'scissors'){
        if(computerSelection == 'paper'){
            console.log(computerSelection);
            console.log('You win');
            //Player win
            return 1;
        }
        else{
            console.log(computerSelection);
            console.log('You Lose');
            //Computer win
            return 2;
        }
    }
}










