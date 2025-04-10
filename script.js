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
    compChoice.innerText = "";
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

function resetGame(){
    const round_no = document.querySelector(".round");
    const playerChoice = document.querySelector(".player");
    const winner = document.querySelector(".win");
    const compChoice = document.querySelector(".comp");
    const p = document.querySelector("#op");

    humanScore = 0;
    computerScore = 0;
    round = 1;

    round_no.textContent = "";
    playerChoice.textContent = "";
    winner.textContent = "";
    compChoice.textContent = "";
    p.textContent = "";
}

function displayWinner(humanScore, computerScore){
    const p = document.querySelector("#op");
    
    if (humanScore === 5){
        p.textContent = "Player Won The Game!";
    }
    else{
        p.textContent = "Computer Won The Game!";
    }

    setTimeout(function(){
            resetGame();
        },2000);
}

function playRound(humanChoice, computerChoice){
    const winner = document.querySelector(".win");
    winner.innerText = "";
    const display_winner = document.createElement("p");
    display_winner.style.cssText = "height: 41.03px; width: 41.03px; padding: 2px; margin: 0px; display: flex; align-items: center; justify-content; space-around;";

    if(humanChoice === computerChoice){
        display_winner.textContent = "TIE";
        winner.appendChild(display_winner);
    }
    else{
        if(humanChoice === "rock" && computerChoice === "paper"){
            display_winner.textContent = "Computer";
            winner.appendChild(display_winner);
            computerScore++;
        }
        else if(humanChoice === "paper" && computerChoice === "scissors"){
            display_winner.textContent = "Computer";
            winner.appendChild(display_winner);
            computerScore++;           
        }
        else if(humanChoice === "scissors" && computerChoice === "rock"){
            display_winner.textContent = "Computer";
            winner.appendChild(display_winner);
            computerScore++;            
        }
        else{
            display_winner.textContent = "Player";
            winner.appendChild(display_winner);
            humanScore++;
        }
    }
    
    if(humanScore === 5 || computerScore === 5){
        displayWinner(humanScore, computerScore);
    }
}


function playGame(){
    const round_no = document.querySelector(".round");
    const playerChoice = document.querySelector(".player");
    const img = document.createElement("img");
    const para = document.createElement("p");
    
    round_no.textContent = "";
    playerChoice.innerText = "";    

    img.style = "height: 45px; width:45px";
    para.style.cssText = "height: 41.03px; width: 41.03px; padding: 2px; margin: 0px; display: flex; align-items: center; justify-content; space-around;";

    para.textContent = round++;
    round_no.appendChild(para);

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
    playRound(humanChoice, computerChoice);

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


const reset = document.querySelector("#reset");

reset.addEventListener("click", resetGame);