let timerInterval;
let timeLeft = 24 * 60 * 60; // 24 hours in seconds
function updateTimer() {
let hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
let minutes = Math.floor((timeLeft % (60 * 60)) / 60);
let seconds = Math.floor(timeLeft % 60);
hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;
document.getElementById("timer").innerText = hours + ":" + minutes + ":" + seconds;
if (timeLeft <= 0) {
clearInterval(timerInterval);
}
timeLeft--;
}
function startTimer() {
if (!timerInterval) {
timerInterval = setInterval(updateTimer, 1000);
}
}
function stopTimer() {
clearInterval(timerInterval);
timerInterval = null;
}
function resetTimer() {
stopTimer();
timeLeft = 24 * 60 * 60;
updateTimer();
}