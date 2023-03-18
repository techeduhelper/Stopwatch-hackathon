let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId;

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const minutesElem = document.querySelector(".minutes");
const secondsElem = document.querySelector(".seconds");
const millisecondsElem = document.querySelector(".milliseconds");

function start() {
  intervalId = setInterval(() => {
    milliseconds += 10;
    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    updateTime();
  }, 10);
}

function stop() {
  clearInterval(intervalId);
}

function reset() {
  clearInterval(intervalId);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateTime();
}

function updateTime() {
  minutesElem.textContent = pad(minutes);
  secondsElem.textContent = pad(seconds);
  millisecondsElem.textContent = pad(milliseconds);
}

function pad(num) {
  return num.toString().padStart(2, "0");
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
