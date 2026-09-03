function getComputerChoice () {
    let rps = ["rock", "paper", "scissors"];
    let randomInt = Math.floor(Math.random() * 3);
    return rps[randomInt];
}
let btn = document.querySelectorAll("button")
btn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let aksi = e.currentTarget.id;
        if(aksi === "rock") {
            playGame("rock")
        }else if(aksi === "paper") {
            playGame("paper")
        }else{
            playGame("scissors")
        }
    })
})

let computerScore = 0; 
let humanScore = 0
function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        status.textContent = `A draw, ${humanChoice} againts ${computerChoice}`
    }else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore += 1;
        status.textContent = `You win, ${humanChoice} againts ${computerChoice}`
    }else{
        computerScore += 1;
        status.textContent = `You lose, ${humanChoice} againts ${computerChoice}`
    }
}

let result = document.querySelector(".result");
let score = document.querySelector(".score")
let status = document.createElement("h3")
let humanPoints = document.createElement("p")
let computerPoints = document.createElement("p")
result.appendChild(status);
score.appendChild(humanPoints);
score.appendChild(computerPoints);

function playGame (human) {
    const humanSelection = human;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanPoints.textContent = `Player score : ${humanScore}`
    computerPoints.textContent = `Computer Score : ${computerScore}`
}
