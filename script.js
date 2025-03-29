function generateHumanChoice(){
    let HC = prompt("Enter your choice \"rock\"-\"paper\"-\"scissors\"");
    return HC.toLowerCase(); 
}


function playGame(){
    let humanChoice = generateHumanChoice();
    let computerChoice = generateComputerChoice();
}


let rounds = 5;
let humanScore = 0;
let computerScore = 0;

if (rounds > 5){
    playGame();
    rounds--;
}