/*function generateHumanChoice(e){
    console.log(this.id);
    if(this.id === "r"){
        return "rock";
    }
    else if(this.id === "p"){
        return "paper";
    }
    else if(this.id === "s"){
        return "scissors";
    }

}*/

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
    
    compareScores(humanScore, computerScore);
}

function compareScores(humanScore, computerScore){

        if (humanScore === 5){
            console.log("human wins");
        }
        else if(computerScore === 5){
            console.log("computer wins");
        }

}

function playGame(){
    const round_no = document.querySelector(".round");
    round_no.textContent = round++;
    let humanChoice = "";
    
    if(this.id === "r"){
        humanChoice = "rock";
    }
    else if(this.id === "p"){
        humanChoice = "paper";
    }
    else if(this.id === "s"){
        humanChoice = "scissors";
    }


    let computerChoice = generateComputerChoice();
    playRound(humanChoice, computerChoice,);

}

let round = 1
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelectorAll("#r");
const paper = document.querySelectorAll("#p");
const scissors = document.querySelectorAll("#s");


for(let i = 0; i < rock.length; i++){
    rock[i].addEventListener("click", playGame);
    paper[i].addEventListener("click", playGame);
    scissors[i].addEventListener("click", playGame);
}