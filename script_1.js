let M = [null, getRandomInt(30, 100), getRandomInt(30, 100), getRandomInt(30, 100)];
let Lottery = [null, 1, 1, 1];
let punish = 0;
let isOver = false;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pullMachine(machine) {
    if (isOver) return;
    Lottery[machine] = getRandomInt(1, M[machine]);
    punish += 2;
    updateDisplay();
}
function chooseMachine(machine) {
    if (isOver) return;
    let score = Lottery[machine] - punish;
    document.getElementById('result').innerText = `Game Over! You get ${score} point!`;
    isOver = true;
}
function updateDisplay() {
    document.getElementById('lottery1').innerText = String(Lottery[1]).padStart(2, '0');
    document.getElementById('lottery2').innerText = String(Lottery[2]).padStart(2, '0');
    document.getElementById('lottery3').innerText = String(Lottery[3]).padStart(2, '0');
    document.getElementById('punishment').innerText = `Accumulated Punishment: ${punish}`;
}
