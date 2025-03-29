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

function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        console.log("Both human and computer played same move `${humanChoice}` and its a tie");
    }
    else{
        if(humanChoice === "rock" && computerChoice === "paper"){
            console.log("`${computerChoice}` Beats `${humanChoice}`. so, computer gains a point");
            computerScore++;
        }
        else if(humanChoice === "paper" && computerChoice === "scissors"){
            console.log("`${computerChoice}` Beats `${humanChoice}`. so, computer gains a point");
            computerScore++;           
        }
        else if(humanChoice === "scissors" && computerChoice === "rock"){
            console.log("`${computerChoice}` Beats `${humanChoice}`. so, computer gains a point");
            computerScore++;            
        }
        else{
            console.log("`${humanChoice}` Beats `${computerChoice}`. so, human gains a point");
            humanScore++;
        }
    }
}

function playGame(){

    let humanChoice = generateHumanChoice();
    let computerChoice = generateComputerChoice();

    playRound(humanChoice, computerChoice);
}


let rounds = 5;
let humanScore = 0;
let computerScore = 0;

if (rounds > 5){
    playGame();
    rounds--;
}