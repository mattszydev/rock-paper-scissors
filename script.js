function getComputerChoice() {
    const move = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return move[randomNumber];
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


function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 1; i<=5; i++){
        let userAnswer = prompt("enter move");
        switch (playRound(userAnswer, getComputerChoice())){
            case 1:
                playerScore++;
                break;
            case 2:
                computerScore++;
                break;
            default:
                break;
        }
        console.log(`End round ${i}`)
    }

    if(playerScore > computerScore){
        console.log('You Win entire game!');
    }
    else if(playerScore < computerScore){
        console.log('Computer Wins entire game!');
    }
    else{
        console.log('Tie!');
    }
}

game();



