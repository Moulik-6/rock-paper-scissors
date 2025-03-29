function generateHumanChoice(){
    let HC = prompt("Enter your choice \"rock\"-\"paper\"-\"scissors\"");
    return HC.toLowerCase(); 
}

function generateComputerChoice(){

    let ran = Math.floor(Math.random() * 10);
// javascript evalutes operators from left to right so instead of following expression
// it will evalute it as (1 <= ran) it could return true-1 or false-0 
// next it checks 1<=3 or 0<=3 which always returns true and excutes only if block
// so we could write it as (1<=ran ) && (ran<=3)
    if ((1 <= ran) && (ran <= 3)){
        return "rock";
    } 
    else if((4 <=  ran) && (ran <= 6)){
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