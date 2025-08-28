const mainSection = document.querySelector(".timer");
const workHours = document.querySelector(".work-hours");
const workMinutes = document.querySelector(".work-minutes");
const workSeconds = document.querySelector(".work-seconds");

const restHours = document.querySelector(".rest-hours");
const restMinutes = document.querySelector(".rest-minutes");
const restSeconds = document.querySelector("rest-seconds");

const intervals = document.querySelector(".intervals");

const startButton = document.querySelector(".start");
const timerDisplaySection = document.querySelector(".run-timer");
const timerDisplay = document.querySelector(".timer-display");

function showTimeDisplay() {
    timerDisplaySection.classList.remove("hide");
    mainSection.classList.add("hide");
}

startButton.addEventListener("click", showTimeDisplay);

function workTimer() {
    let countdown;

};

function restTimer() {

};
