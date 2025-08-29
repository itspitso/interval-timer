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

function showStartTimeDisplay() {
    const timeToDisplay = `${workHours.value < 10 ? "0": ""}${workHours.value}:${workMinutes.value < 10 ? "0": ""}${workMinutes.value}:${workSeconds.value < 10 ? "0": ""}${workSeconds.value}`
    timerDisplaySection.classList.remove("hide");
    mainSection.classList.add("hide");
    timerDisplay.textContent = timeToDisplay;
}

submitButton.addEventListener("click", showStartTimeDisplay);

function timer(hours, minutes, seconds) {
    let countdown;

    

};

function displayTimeLeft() {

};

function runTimers() {
    const number = intervals.value;
    for (number; number > 0; number--) {
        timer(workHours, workMinutes, workSeconds);
        timer(restHours, restMinutes, restSeconds);
    }
}
