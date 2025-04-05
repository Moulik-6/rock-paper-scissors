function generateHumanChoice(){
    //let HC = prompt("Enter your choice \"rock\"-\"paper\"-\"scissors\"");
    //return HC.toLowerCase(); 
}

function generateComputerChoice(){

    let ran = Math.floor(Math.random() * 10);

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
        console.log(`Both human and computer played same move ${humanChoice} and its a tie`);
    }
    else{
        if(humanChoice === "rock" && computerChoice === "paper"){
            console.log(`${computerChoice} Beats ${humanChoice}. so, computer gains a point`);
            computerScore++;
        }
        else if(humanChoice === "paper" && computerChoice === "scissors"){
            console.log(`${computerChoice} Beats ${humanChoice}. so, computer gains a point`);
            computerScore++;           
        }
        else if(humanChoice === "scissors" && computerChoice === "rock"){
            console.log(`${computerChoice} Beats ${humanChoice}. so, computer gains a point`);
            computerScore++;            
        }
        else{
            console.log(`${humanChoice} Beats ${computerChoice}. so, human gains a point`);
            humanScore++;
        }
    }
}

function compareScores(humanScore, computerScore){
    if (humanScore === computerScore){
        console.log("well, well, well too bad its a tie ");
    }
    else if(humanScore > computerScore){
        console.log("Human");
        console.log("i knew it. human's are superior");
    }
    else{
        console.log("computer");
        console.log("Congrats, you are stupid than a mindless machine");
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


playGame();



console.log("the game has been finished and the winner is: ")
compareScores(humanScore, computerScore);
