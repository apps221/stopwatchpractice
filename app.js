let cancelId;
let startTime;
let savedTime = 0;
const timerMilliseconds = document.querySelector('.timer__milliseconds')
const timerSeconds = document.querySelector('.timer__seconds')
const timerMinutes = document.querySelector('.timer__minutes')
function startTimer() {
startTime = Date.now()
cancelId = requestAnimationFrame(updateTimer)
}
function stopTimer() {
cancelAnimationFrame(cancelId)
savedTime = savedTime + Date.now()-startTime; //need to add the previous saved time
}
function resetTimer() {
startTime = Date.now();
savedTime=0;
timerMilliseconds.innerHTML= '000';
timerSeconds.innerHTML = '00';
timerMinutes.innerHTML = '00';
}
function updateTimer() {
    let milSecondsElapsed = savedTime + (Date.now() - startTime)
    let secondsElapsed = milSecondsElapsed / 1000;
    let minutesElapsed = secondsElapsed / 60;

    let minutesText = Math.floor(minutesElapsed);
    let secondsText = Math.floor(secondsElapsed % 60);
    let milSecondsText = milSecondsElapsed % 1000;

    if (minutesText.toString().length === 1) {
        minutesText = '0' + minutesText;
    }
    if(secondsText.toString.length === 1) {
        secondsText = '0' + secondsText;
    }
    if (milSecondsText.toString().length < 3) {
        milSecondsText = milSecondsText.toString().padStart(3, '0');
    }

    timerMilliseconds.innerHTML = milSecondsText;
    timerSeconds.innerHTML = secondsText;
    timerMinutes.innerHTML = minutesText;
    cancelId = requestAnimationFrame(updateTimer)
}