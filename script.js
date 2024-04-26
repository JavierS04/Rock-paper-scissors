let choose = ["rock", "paper", "scissors"]

const computerChoice = function (){
    return choose[Math.floor(Math.random() * 3)];
}

let userChoice = window.prompt("enter rock paper or scissors")

if(userChoice == "scissors" && computerChoice() == "paper"){
    console.log("user wins")
    console.log()
}
else if(userChoice == "scissors" && computerChoice() == "rock"){
    console.log("computer wins")
}
else if(userChoice == "rock" && computerChoice() == "scissors"){
    console.log("user wins")
}
else if(userChoice == "rock" && computerChoice() == "paper"){
    console.log("computer wins")
}
else if(userChoice == "paper" && computerChoice() == "scissors"){
    console.log("computer wins")
}
else if(userChoice == "paper" && computerChoice() == "rock"){
    console.log("user wins")
}
else {
    console.log("tie");
}
