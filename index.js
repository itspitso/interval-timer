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
const workRestDisplay = document.querySelector(".work-rest-display");
const intervalNumberDisplay = document.querySelector(".interval-number");
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
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    const countdown = setInterval(() => {
        displayCountdown(timeLeftInSeconds);
        totalSeconds -= 1000;
        const timeLeftInSeconds = Math.round(totalSeconds / 1000);
        if (timeLeftInSeconds < 0) {
            clearInterval(countdown);
            return;
        }
    }, 1000);
};

function displayCountdown(timeLeft) {
    const toHours = Math.floor(timeLeft / 3600);
    const toMinutes = Math.floor(timeLeft / 60);
    const toSeconds = timeLeft % 60;
    timerDisplay.textContent = `${toHours === 0 ? "0": ""}${toHours}:${toMinutes < 10 ? "0": ""}${toMinutes}:${toSeconds < 10 ? "0": ""}${toSeconds}`;
};

function runTimers() {
    const number = Number(intervals.value);

    for (let i = 0; i < number; i++) {
        intervalNumberDisplay.textContent = `Interval ${i+1}/${number}`;

        workRestDisplay.textContent = "WORK";
        timer(workHours.value, workMinutes.value, workSeconds.value);

        workRestDisplay.textContent = "REST";
        timer(restHours.value, restMinutes.value, restSeconds.value);
    }
}

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    runTimers();
});