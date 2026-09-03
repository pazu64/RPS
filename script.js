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
let humanScore = 0;
function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        status.textContent = `A draw, ${humanChoice} againts ${computerChoice}`
        computerScore += 1;
        humanScore += 1;
    }else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore += 1;
        status.textContent = `You win, ${humanChoice} againts ${computerChoice}`
    }else{
        computerScore += 1;
        status.textContent = `You lose, ${humanChoice} againts ${computerChoice}`
    }
}

let result = document.querySelector(".result");
let score = document.querySelector(".score");
let status = document.createElement("h3");
let humanPoints = document.createElement("p");
let computerPoints = document.createElement("p");
let h2 = document.querySelector("h2");
let resultGame = document.createElement("h3");
let divBtn = document.querySelector(".btn")
let reset = document.createElement("button")
reset.textContent = "Reset";
result.appendChild(status);
score.appendChild(humanPoints);
score.appendChild(computerPoints);

function playGame (human) {
    const humanSelection = human;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanPoints.textContent = `Player score : ${humanScore}`
    computerPoints.textContent = `Computer Score : ${computerScore}`;
    if ((humanScore === 5) || (computerScore === 5)) {
        endGame()
    }
}


function endGame () {
    divBtn.style.display = "none"
    h2.textContent = "Game Over!"
    if (humanScore === 5) {
        status.textContent = "You won this game!";
        status.style.color = "green"
    }else{
        status.textContent = "This game was won by computer"
        status.style.color = "red"
    }
    result.appendChild(reset)
    reset.style.display = "grid"
}
function resetGame () {
    humanScore = 0;
    computerScore = 0;
    divBtn.style.display = "flex"
    reset.style.display = "none"
    status.textContent = "";
    status.style.color = "black"
    humanPoints.textContent = `Player score : ${humanScore}`;
    computerPoints.textContent = `Computer Score : ${computerScore}`;
}
reset.addEventListener("click", resetGame);