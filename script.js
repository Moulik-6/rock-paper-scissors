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
    const compChoice = document.querySelector(".comp");
    const img = document.createElement("img");
    img.style = "height: 45px; width:45px";


    let ran = Math.floor(Math.random() * 10);

    if ((1 <= ran) && (ran <= 3)){
        img.src = "./img/rock-icon.png";
        compChoice.appendChild(img);
        return "rock";
    } 
    else if((4 <=  ran) && (ran <= 6)){
        img.src = "./img/paper-icon.png";
        compChoice.appendChild(img);
        return "paper";
    }
    else{
        img.src = "./img/scissors-icon.png";
        compChoice.appendChild(img);
        return "scissors";
    }

}

function playRound(humanChoice, computerChoice){
    const winner = document.querySelector()

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
    const playerChoice = document.querySelector(".player");
    const img = document.createElement("img");
    img.style = "height: 45px; width:45px";

    round_no.textContent = round++;
    let humanChoice = "";

    if(this.id === "r"){
        img.src = "./img/rock-icon.png";
        playerChoice.appendChild(img);
        humanChoice = "rock";
    }
    else if(this.id === "p"){
        img.src = "./img/paper-icon.png";
        playerChoice.appendChild(img);
        humanChoice = "paper";
    }
    else if(this.id === "s"){
        img.src = "./img/scissors-icon.png";
        playerChoice.appendChild(img);
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