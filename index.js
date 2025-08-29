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
    const hoursToMilliseconds = hours === 0 ? 0 : hours * 60000 * 60;
    const minutesToMilliseconds = minutes === 0 ? 0 : minutes * 60000;
    const secondsToMilliseconds = seconds * 1000; 

    let end = hoursToMilliseconds + minutesToMilliseconds +  secondsToMilliseconds;

    countdown = setInterval(() => {
        end -= 1000; 
        const timeLeftInSeconds = Math.round(end / 1000);
        if (timeLeftInSeconds < 0) {
            clearInterval(countdown);
            return;
        }
        displayCountdown(timeLeftInSeconds);
    }, 1000);
}; 

function displayCountdown(timeLeft) {
    const toHours = timeLeft / 60 / 60 < 0 ? 0 : Math.floor(timeLeft / 60 / 60);
    console.log(toHours);
    const toMinutes = timeLeft / 60 < 0 ? 0 : Math.floor(timeLeft / 60);
    const toSeconds = timeLeft % 60;
    timerDisplay.textContent = `${toHours === 0 ? "00" : (toHours > 0 && toHours < 10) ? "0": ""}${toHours}:${toMinutes === 0 ? "00" : toMinutes < 10 ? "0": ""}${toMinutes}:${toSeconds < 10 ? "0": ""}${toSeconds}`;
};
/*
function runTimers() {
    const number = intervals.value;
    for (number; number => 0; number--) {
        timer(workHours.value, workMinutes.value, workSeconds.value);
        timer(restHours.value, restMinutes.value, restSeconds.value);
    }
}
*/

startButton.addEventListener("click", () => {
    startButton.style.backgroundColor = "grey";
    timer(workHours.value, workMinutes.value, workSeconds.value);
});