/** computerPlay provides random response of Rock, Paper, or Scissors */

let score = 0;

let computerPlay = () => {
    let num = Math.floor(Math.random()* 3) +1 ;
    switch (num) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        default:
            console.log('How did you get here?');
            break;
    }
}

let playerChoice = () =>{
    return prompt('Please choose: Rock, Paper, Scissors').toLowerCase();
}

let playRound = (compChoice, playerInput) => {
    if(compChoice == 'rock' && playerInput == 'paper'){
        score+= 1;
        return 'You win! Paper beats rock!';
    }
    else if(compChoice == 'paper' && playerInput == 'scissors'){
        score++;
        return 'You win! Scissors beats paper!';
    }
    else if(compChoice == 'scissors' && playerInput == 'rock'){
        score++;
        return 'You win! Rock beats scissors!';
    }
    else if(compChoice == 'paper' && playerInput == 'rock'){
        return 'You lose! Paper beats rock!';
    }
    else if(compChoice == 'scissors' && playerInput == 'paper'){
        return 'You lose! Scissors beats paper!';
    }
    else if(compChoice == 'rock' && playerInput == 'scissors'){
        return 'You lose! Rock beats scissors!';
    }
    else if (compChoice == playerInput){
        return 'You tied!'
    }
    else{
        return 'Why did you ruin the game?'
    }
}


/** game() runs multiple rounds */
let game = () => {
    for(let i = 0; i < 5; i++){
        console.log(i+1);
        const compChoice = computerPlay();
        const choice = playerChoice();
        
        console.log(`Computer: ${compChoice}`);
        console.log(`Player: ${choice}`)
        
        console.log(playRound(compChoice, choice));
        console.log(`Current Score: ${score}`);
    }
}

game();