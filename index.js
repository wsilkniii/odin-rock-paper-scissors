/** computerPlay provides random response of Rock, Paper, or Scissors */
let compChoice = "";
let pScore = 0;
let cScore = 0;
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

// Runs through round and completes results of match
let playRound = (compChoice, playerInput) => {
    if(compChoice == 'rock' && playerInput == 'paper'){
        pScore++;
        document.getElementById("pScore").textContent = `Your Score: ${pScore}`;
        document.getElementById("result").textContent = "You win! Paper beats rock!";
        colorScore(pScore, cScore);
    }
    else if(compChoice == 'paper' && playerInput == 'scissors'){
        pScore++;
        document.getElementById("pScore").textContent = `Your Score: ${pScore}`;
        document.getElementById("result").textContent = 'You win! Scissors beats paper!';
        colorScore(pScore, cScore);
    }
    else if(compChoice == 'scissors' && playerInput == 'rock'){
        pScore++;
        document.getElementById("pScore").textContent = `Your Score: ${pScore}`;
        document.getElementById("result").textContent = 'You win! Rock beats scissors!';
        colorScore(pScore, cScore);
    }
    else if(compChoice == 'paper' && playerInput == 'rock'){
        cScore++;
        document.getElementById("cScore").textContent = `Comp Score: ${cScore}`;
        document.getElementById("result").textContent = 'You lose! Paper beats rock!';
        colorScore(pScore, cScore);
    }
    else if(compChoice == 'scissors' && playerInput == 'paper'){
        cScore++;
        document.getElementById("cScore").textContent = `Comp Score: ${cScore}`;
        document.getElementById("result").textContent = 'You lose! Scissors beats paper!';
        colorScore(pScore, cScore);
    }
    else if(compChoice == 'rock' && playerInput == 'scissors'){
        cScore++;
        document.getElementById("cScore").textContent = `Comp Score: ${cScore}`;
        document.getElementById("result").textContent = 'You lose! Rock beats scissors!';
        colorScore(pScore, cScore);
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

// Creating array of buttons with class "Choice"
let btns = document.getElementsByClassName("choice")

// Looping through array of buttons adding an event listener which will set player and comp choices on click
// then run the game with those choices

for(btn of btns){
    btn.addEventListener("click", (e) => {
        playerChoice = e.target.value;
        compChoice = computerPlay();
        game()

    })
}

function colorScore(pScore, cScore){
    let playerScore = document.getElementById("pScore");
    let compScore = document.getElementById("cScore");

    playerScore.classList.remove(...playerScore.classList);
    compScore.classList.remove(...compScore.classList);

    if(cScore == pScore){
        compScore.classList.add('tied');
        playerScore.classList.add('tied');

    }
    else if(pScore > cScore){
        playerScore.classList.add('winning');
        compScore.classList.add('losing');
    }
    else if(cScore > pScore){
        compScore.classList.add('winning');
        playerScore.classList.add('losing');
    }
    
}

document.getElementById("result").textContent = 'Will you win?';
document.getElementById("score").textContent = `Player Score: ${pScore}`;
document.getElementById("score").textContent = `Comnp Score: ${cScore}`;