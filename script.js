function getComputerChoice () {
    let rps = ["rock", "papper", "scissors"];
    let randomInt = Math.floor(Math.random() * 3);
    return rps[randomInt]
}

