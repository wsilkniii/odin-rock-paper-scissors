/** computerPlay provides random response of Rock, Paper, or Scissors */
let compChoice = "";
let score = 0;
let playerChoice = "";
let verdict;

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

let playRound = (compChoice, playerInput) => {
    if(compChoice == 'rock' && playerInput == 'paper'){
        score+= 1;
        document.getElementById("score").textContent = `Current Score: ${score}`;
        document.getElementById("result").textContent = "You win! Paper beats rock!";
    }
    else if(compChoice == 'paper' && playerInput == 'scissors'){
        score++;
        document.getElementById("score").textContent = `Current Score: ${score}`;
        document.getElementById("result").textContent = 'You win! Scissors beats paper!';
    }
    else if(compChoice == 'scissors' && playerInput == 'rock'){
        score++;
        document.getElementById("score").textContent = `Current Score: ${score}`;
        document.getElementById("result").textContent = 'You win! Rock beats scissors!';
    }
    else if(compChoice == 'paper' && playerInput == 'rock'){
        document.getElementById("result").textContent = 'You lose! Paper beats rock!';
    }
    else if(compChoice == 'scissors' && playerInput == 'paper'){
        document.getElementById("result").textContent = 'You lose! Scissors beats paper!';
    }
    else if(compChoice == 'rock' && playerInput == 'scissors'){
        document.getElementById("result").textContent = 'You lose! Rock beats scissors!';
    }
    else if (compChoice == playerInput){
        document.getElementById("result").textContent = 'You tied!'
    }
    else{
        document.getElementById("result").textContent = 'Why did you ruin the game?'
    }
}

let game = () => {
    verdict = playRound(compChoice, playerChoice);
    return verdict;
}

let btns = document.getElementsByClassName("choice")

for(btn of btns){
    btn.addEventListener("click", (e) => {
        playerChoice = e.target.value;
        compChoice = computerPlay();
        game()

    })
}

document.getElementById("result").textContent = 'Will you win?';
document.getElementById("score").textContent = `Current Score: ${score}`;