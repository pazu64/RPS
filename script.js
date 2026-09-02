function getComputerChoice () {
    let rps = ["rock", "papper", "scissors"];
    let randomInt = Math.floor(Math.random() * 3);
    return rps[randomInt]
}

function getHumanChoice () {
    let humanChoice = prompt("enter your choice of rock, paper, or scissors");
    return humanChoice
}

