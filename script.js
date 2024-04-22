let timer;
let totalSeconds = 0;
let isPaused = false;

function startTimer() {
  const hours = parseInt(document.getElementById('hours').value) || 0;
  const minutes = parseInt(document.getElementById('minutes').value) || 0;
  const seconds = parseInt(document.getElementById('seconds').value) || 0;

  totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (totalSeconds <= 0 || isNaN(totalSeconds)) {
    alert('Please enter a valid time.');
    return;
  }

  timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isPaused = true;
}

function resetTimer() {
  clearInterval(timer);
  isPaused = false;
  totalSeconds = 0;
  document.getElementById('hours').value = '0';
  document.getElementById('minutes').value = '0';
  document.getElementById('seconds').value = '0';
}

function updateTimer() {
  if (totalSeconds <= 0) {
    clearInterval(timer);
    alert('Timer finished!');
    return;
  }

  if (!isPaused) {
    totalSeconds--;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    document.getElementById('hours').value = hours;
    document.getElementById('minutes').value = minutes;
    document.getElementById('seconds').value = seconds;
  }
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
