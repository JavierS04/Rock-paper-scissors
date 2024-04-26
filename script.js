let choose = ["rock", "paper", "scissors"]
let humanScore =0;
let computerScore =0;

const rock = document.querySelector(".Rock")
const paper = document.querySelector(".Paper")
const scissors = document.querySelector(".Scissors")
const score = document.createElement("p")
const holder = document.querySelector(".holder");
const div = document.createElement("div");
div.style.border = ("black solid 3px");
div.appendChild(score)
holder.appendChild(div);


rock.addEventListener("click", () => {
    playRound("rock",computerChoice())
})
paper.addEventListener("click", () => {
    playRound("paper",computerChoice())
})
scissors.addEventListener("click", () => {
    playRound("scissors",computerChoice())
})



function playRound (user,computer){
    if(user == "scissors" && computer == "paper"){
        console.log("user wins")
        console.log("scissors beats paper")
        humanScore++;
        score.innerText = ("human score " + humanScore + "\ncomputer score " + computerScore)
    }
    else if(user == "scissors" && computer == "rock"){
        console.log("computer wins")
        console.log("rock beats scissors")
        computerScore++;
        score.innerText = ("human score " + humanScore + "\ncomputer score " + computerScore)
    }
    else if(user == "rock" && computer == "scissors"){
        console.log("user wins")
        console.log("rock beats scissors")
        humanScore++;
        score.innerText = ("human score " + humanScore + "\ncomputer score " + computerScore)
    }
    else if(user == "rock" && computer == "paper"){
        console.log("computer wins")
        console.log("paper beats rock")
        computerScore++;
        score.innerText = ("human score " + humanScore + "\ncomputer score " + computerScore)
    }
    else if(user == "paper" && computer == "scissors"){
        console.log("computer wins")
        console.log("scissors beats paper")
        computerScore++;
        score.innerText = ("human score " + humanScore + "\ncomputer score " + computerScore)
    }
    else if(user == "paper" && computer == "rock"){
        console.log("user wins")
        console.log("paper beats rock")
        humanScore++;
        score.innerText = ("human score " + humanScore + "\ncomputer score " + computerScore)
    }
    else {
        console.log("tie");
    }
}

const computerChoice = function (){
    return choose[Math.floor(Math.random() * 3)];
}
