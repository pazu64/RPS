function getComputerChoice () {
    let rps = ["rock", "paper", "scissors"];
    let randomInt = Math.floor(Math.random() * 3);
    return rps[randomInt];
}

function getHumanChoice () {
    let humanChoice = prompt("enter your choice of rock, paper, or scissors");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    let fixHumanChoice = humanChoice.toLowerCase();
    if (fixHumanChoice ===  computerChoice) {
        console.log(`A draw, ${fixHumanChoice} againts ${computerChoice}`);
    }else if ((fixHumanChoice === "rock" && computerChoice === "scissors") || (fixHumanChoice === "paper" && computerChoice === "rock") || (fixHumanChoice === "scissors" && computerChoice === "paper")) {
        humanScore += 1;
        console.log(`You win! ${fixHumanChoice} beats ${computerChoice}.`);
    }else{
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beats ${fixHumanChoice}`);
    }
}

function playGame () {

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Result : Human : ${humanScore}, Computer : ${computerScore}`)
}
playGame()