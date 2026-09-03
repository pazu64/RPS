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

let humanScore = 0;
let computerScore = 0; 

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`A draw, ${humanChoice} againts ${computerChoice}`);
    }else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore += 1;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }else{
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

function playGame (human) {
    const humanSelection = human;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Result : Human : ${humanScore}, Computer : ${computerScore}`)
}
