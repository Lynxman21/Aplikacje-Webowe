const clock = document.getElementById("time");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const restart = document.getElementById("restart");

let timer;
let sec = 0;
let min = 0;
let isRunning = false;

start.addEventListener('click',startTime);
stop.addEventListener('click',stopTime);
reset.addEventListener('click',restartTime);

function setDisplay() {
    const s = String(sec)
    const m = String(min)
    if (min === 0) {
        clock.textContent = `${s}s`;
    }
    else {
        clock.textContent = `${m}min ${s}s`;
    }
}

function startTime() {
    if (!isRunning) {
        isRunning = true;
        //interval to po prostu taki while true tylko że ustalamy co ile operacje się powtarzają w ms
        timer = setInterval(() => {
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
            }
            setDisplay();
        },1000);
    }
}

function stopTime() {
    if (isRunning) {
        isRunning = false;
        //powoduje zatrzymanie
        clearInterval(timer);
    }
}

function restartTime() {
    stopTime();
    sec = 0;
    min = 0;
    hours = 0;
    setDisplay();
}