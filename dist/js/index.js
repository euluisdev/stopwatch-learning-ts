"use strict";
const hourEl = document.querySelector('#hour');
const minutesEl = document.querySelector('#minutes');
const secondsEL = document.querySelector('#seconds');
const millisecondsEl = document.querySelector('#milliseconds');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resumeBtn = document.querySelector('#resumeBtn');
const resetBtn = document.querySelector('#resetBtn');
let interval;
let hour = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;
const startTimer = () => {
    interval = setInterval(() => {
        if (!isPaused) {
            milliseconds += 10;
            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }
            ;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            ;
            if (minutes === 60) {
                hour++;
                minutes = 0;
            }
            ;
            if (hourEl)
                hourEl.textContent = formatTime(hour);
            if (minutesEl)
                minutesEl.textContent = formatTime(minutes);
            if (secondsEL)
                secondsEL.textContent = formatTime(seconds);
            if (millisecondsEl)
                millisecondsEl.textContent = formatMilliseconds(milliseconds);
        }
        ;
    }, 10);
    if (startBtn)
        startBtn.style.display = "none";
    if (pauseBtn)
        pauseBtn.style.display = "block";
};
const pauseTimer = () => {
    isPaused = true;
    if (pauseBtn)
        pauseBtn.style.display = "none";
    if (resumeBtn)
        resumeBtn.style.display = "block";
};
const resumeTimer = () => {
    isPaused = false;
    if (resumeBtn)
        resumeBtn.style.display = "none";
    if (pauseBtn)
        pauseBtn.style.display = "block";
};
const resetTimer = () => {
    isPaused = false;
    clearInterval(interval);
    hour = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    if (hourEl)
        hourEl.textContent = formatTime(hour);
    if (minutesEl)
        minutesEl.textContent = formatTime(minutes);
    if (secondsEL)
        secondsEL.textContent = formatTime(seconds);
    if (millisecondsEl)
        millisecondsEl.textContent = formatMilliseconds(milliseconds);
    if (startBtn)
        startBtn.style.display = "block";
    if (pauseBtn)
        pauseBtn.style.display = "none";
    if (resumeBtn)
        resumeBtn.style.display = "none";
};
const formatTime = (time) => {
    return time < 10 ? `0${time}` : time.toString();
};
const formatMilliseconds = (time) => {
    return time < 100 ? `${time}`.padStart(3, "0") : time.toString();
};
if (startBtn)
    startBtn.addEventListener('click', startTimer);
if (pauseBtn)
    pauseBtn.addEventListener("click", pauseTimer);
if (resumeBtn)
    resumeBtn.addEventListener("click", resumeTimer);
if (resetBtn)
    resetBtn.addEventListener("click", resetTimer);
