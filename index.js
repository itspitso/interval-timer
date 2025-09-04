const mainSection = document.querySelector(".timer");
const workHours = document.querySelector(".work-hours");
const workMinutes = document.querySelector(".work-minutes");
const workSeconds = document.querySelector(".work-seconds");

const restHours = document.querySelector(".rest-hours");
const restMinutes = document.querySelector(".rest-minutes");
const restSeconds = document.querySelector(".rest-seconds");

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

function timer(hours, minutes, seconds, callback) {
    hours = Number(hours) || 0;
    minutes = Number(minutes) || 0;
    seconds = Number(seconds) || 0;

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    
    if (isNaN(totalSeconds)) {
        if (callback) callback();
        return;
    }


    if (totalSeconds <= 0) {
        displayCountdown(0);
        if (callback) callback();
        return;
    }

    const countdown = setInterval(() => {
        totalSeconds --;
        displayCountdown(totalSeconds);
        
       if (totalSeconds <= 0) {
            clearInterval(countdown);
            if (callback) callback();
            }
    }, 1000);
};

function displayCountdown(timeLeft) {
    const toHours = Math.floor(timeLeft / 3600);
    const toMinutes = Math.floor(timeLeft / 60);
    const toSeconds = timeLeft % 60;
    timerDisplay.textContent = 
        `${String(toHours).padStart(2, '0')}:` +
        `${String(toMinutes).padStart(2, '0')}:` +
        `${String(toSeconds).padStart(2, '0')}`;
};

function runTimers() {
    const number = Number(intervals.value);
    let current = 0;

    function runNextInterval() {
        if (current >= number) {
            console.log("All done");
            intervalNumberDisplay.textContent = "All done!";
            return;
        }

        console.log(`Running interval ${current + 1}/${number}`);
        intervalNumberDisplay.textContent = `Interval ${current + 1}/${number}`;
        workRestDisplay.textContent = "WORK";

        timer(
            parseInt(workHours.value || "0"),
            parseInt(workMinutes.value || "0"),
            parseInt(workSeconds.value || "0"),
            () => {
                console.log("Work complete");

                workRestDisplay.textContent = "REST";

                timer(
                    parseInt(restHours.value || "0"),
                    parseInt(restMinutes.value || "0"),
                    parseInt(restSeconds.value || "0"),
                    () => {
                        console.log("Rest complete");
                        current++;
                        runNextInterval();
                    }
                );
            }
        );
    }

    runNextInterval();
}

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    runTimers();
});