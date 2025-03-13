let cancelId;
let startTime;
const timerMilliseconds = document.querySelector('.timer__milliseconds')
const timerSeconds = document.querySelector('.timer__seconds')
function startTimer() {
startTime = Date.now()
cancelId = requestAnimationFrame(updateTimer)
}
function stopTimer() {
cancelAnimationFrame(cancelId)
}
function resetTimer() {

}
function updateTimer() {
    let milSecondsElapsed = (Date.now() - startTime)
    cancelId = requestAnimationFrame(updateTimer)
}