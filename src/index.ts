const hourEl: HTMLDivElement | null = document.querySelector('#hour');
const minutesEl: HTMLDivElement | null = document.querySelector('#minutes');
const secondsEL: HTMLDivElement | null = document.querySelector('#seconds');
const millisecondsEl: HTMLDivElement | null = document.querySelector('#milliseconds');
const startBtn: HTMLButtonElement | null = document.querySelector('#startBtn');
const pauseBtn: HTMLButtonElement | null = document.querySelector('#pauseBtn');
const resumeBtn: HTMLButtonElement | null = document.querySelector('#resumeBtn');
const resetBtn: HTMLButtonElement | null = document.querySelector('#resetBtn');

let interval: number | undefined;
let hour: number = 0;
let minutes: number = 0;
let seconds: number = 0;
let milliseconds: number = 0;
let isPaused: boolean = false;

const startTimer = (): void => {
    interval = setInterval(() => {
        if (!isPaused) {
            milliseconds += 10;
            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            };
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            };
            if (minutes === 60) {
                hour++;
                minutes = 0;
            };

            if (hourEl) hourEl.textContent = formatTime(hour);
            if (minutesEl) minutesEl.textContent = formatTime(minutes);
            if (secondsEL) secondsEL.textContent = formatTime(seconds);
            if (millisecondsEl) millisecondsEl.textContent = formatMilliseconds(milliseconds);
        };

    }, 10);

    if (startBtn) startBtn.style.display = "none";
    if (pauseBtn) pauseBtn.style.display = "block";
};

const pauseTimer = (): void => {
    isPaused = true;

    if (pauseBtn) pauseBtn.style.display = "none";
    if (resumeBtn) resumeBtn.style.display = "block";
};

const resumeTimer = (): void => {
    isPaused = false;

    if (resumeBtn) resumeBtn.style.display = "none"
    if (pauseBtn) pauseBtn.style.display = "block"
};

const resetTimer = (): void => {
    isPaused = false;
    clearInterval(interval);

    hour = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    if (hourEl) hourEl.textContent = formatTime(hour);
    if (minutesEl) minutesEl.textContent = formatTime(minutes);
    if (secondsEL) secondsEL.textContent = formatTime(seconds);
    if (millisecondsEl) millisecondsEl.textContent = formatMilliseconds(milliseconds);

    if (startBtn) startBtn.style.display = "block";
    if (pauseBtn) pauseBtn.style.display = "none";
    if (resumeBtn) resumeBtn.style.display = "none";
};

const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : time.toString();
};

const formatMilliseconds = (time: number): string => {
    return time < 100 ? `${time}`.padStart(3, "0") : time.toString();
};

if (startBtn) startBtn.addEventListener('click', startTimer);
if (pauseBtn) pauseBtn.addEventListener("click", pauseTimer);
if (resumeBtn) resumeBtn.addEventListener("click", resumeTimer);
if (resetBtn) resetBtn.addEventListener("click", resetTimer);