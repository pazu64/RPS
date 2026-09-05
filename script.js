const icons = {rock: '🪨', paper: '📄', scissors: '✂️',};
const name = {rock: 'Batu', paper: 'Kertas', scissors: 'Gunting'};
let score = {you: 0, cpu: 0,}
const banner = document.getElementById("resultBanner");
let resetBtn = document.querySelector(".reset");
const choiceBtn = document.querySelector(".choice");
const scoreYou = document.getElementById("scoreYou") ;
const scoreCpu = document.getElementById("scoreCpu");
const lastResult = document.querySelector('.lastResult');
const h4Result = document.createElement('h4');
function play (choice) {
    const cpuOptions = ['rock', 'paper', 'scissors'];
    const cpuChoice = cpuOptions[Math.floor(Math.random() * 3)];
    const youIcon = document.getElementById("youIcon");
    const cpuIcon = document.getElementById("cpuIcon");
    const cpuChoiceName = name[cpuChoice];
    const youChoiceName = name[choice];
    youIcon.textContent = icons[choice]
    cpuIcon.textContent = icons[cpuChoice]

    banner.classList.remove("win", "draw", "idle", "result", "lose")
    let resultStatus;
    if (choice === cpuChoice) {
        resultStatus = 'draw';
        banner.textContent = `Seri, sama-sama ${youChoiceName}`
    }else if ((choice === 'rock' && cpuChoice === 'scissors') || (choice === 'paper' && cpuChoice === 'rock') || (choice === 'scissors' && cpuChoice === 'paper')) {
        score.you++
        resultStatus = 'win'
        banner.textContent = `Kamu menang, ${youChoiceName} melawan ${cpuChoiceName}`
    }else{
        score.cpu++
        resultStatus = 'lose';
        banner.textContent = `Kamu kalah, ${cpuChoiceName} melawan ${youChoiceName}`;
    }
    scoreCpu.textContent = score.cpu;
    scoreYou.textContent = score.you;
    banner.classList.add("result");
    banner.classList.add(resultStatus);
    if (score.you === 5 || score.cpu === 5) {
        scoreFive()
    }
}
function scoreFive () {
    
    resetBtn.style.display = "block";
    choiceBtn.style.display = "none";
    banner.textContent = "Game Over";
    if (score.you === 5) {
        h4Result.textContent = "Selamat!, kamu memenangkan pertandingan ini";
        lastResult.appendChild(h4Result);
        h4Result.style.color = 'green';
        h4Result.style.display = "block";
    }else if (score.cpu === 5) {
        h4Result.textContent = "Yahh, kamu kalah dalam pertandingan ini, ayo coba lagi!";
        lastResult.appendChild(h4Result)
        h4Result.style.color = 'red';
        h4Result.style.display = "block";
    }
}
function resetScore () {
    choiceBtn.style.display = "flex";
    resetBtn.style.display = "none";
    score.you = 0;
    score.cpu = 0;
    scoreCpu.textContent = score.cpu;
    scoreYou.textContent = score.you;
    h4Result.style.display = "none";
    banner.textContent = "pilih senjata untuk memulai";
    banner.classList.remove('idle', 'win', 'lose')
    youIcon.textContent = "❔"
    cpuIcon.textContent = "❔"
}