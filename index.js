const mainSection = document.querySelector(".timer");
const workHours = document.querySelector(".work-hours");
const workMinutes = document.querySelector(".work-minutes");
const workSeconds = document.querySelector(".work-seconds");

const restHours = document.querySelector(".rest-hours");
const restMinutes = document.querySelector(".rest-minutes");
const restSeconds = document.querySelector("rest-seconds");

const intervals = document.querySelector(".intervals");

const submitButton = document.querySelector(".submit");
const timerDisplaySection = document.querySelector(".run-timer");
const timerDisplay = document.querySelector(".timer-display");
const startButton = document.querySelector(".start");

function showTimeDisplay() {
    timerDisplaySection.classList.remove("hide");
    mainSection.classList.add("hide");
}

submitButton.addEventListener("click", showTimeDisplay);

function workTimer() {
    let countdown;

};

function restTimer() {

};
timerDisplay.textContent = "25:00";