function generateHumanChoice(){
    let HC = prompt("Enter your choice \"rock\"-\"paper\"-\"scissors\"");
    return HC.toLowerCase(); 
}

function generateComputerChoice(){

    let ran = Math.floor(Math.random() * 10);

    if (1 <= ran <= 3){
        return "rock";
    } 
    else if(4 <= ran <= 6){
        return "paper";
    }
    else{
        return "scissors";
    }

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