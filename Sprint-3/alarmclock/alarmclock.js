const SECONDS_IN_MINUTE = 60;
const PAD_COUNT = 2;
const PAD_CHAR = "0";
const TIME_MIN = 0;
const TIME_MAX = 3599;
const TIMER_INTERVAL_DELAY = 1000;
const BACKGROUND_COLOR_INTERVAL_DELAY = 250;
const COLOR_RED = "#FF0000";
const COLOR_WHITE = "#FFFFFF";

let time = 0;
let timerIntervalId = null;
let backgroundColorIntervalId = null;
let isBackgroundColorWhite = true;

onFinishLoading();

function onFinishLoading() {
  setupAlarmSetInput();
  updateTimerText();
}

function setupAlarmSetInput() {
  const alarmSetInput = document.getElementById("alarmSet");
  
  alarmSetInput.addEventListener("input", onAlarmSetInput);
  alarmSetInput.value = time;
}

function onAlarmSetInput() {
  const alarmSetInput = document.getElementById("alarmSet");

  if (alarmSetInput.value < TIME_MIN) {
    alarmSetInput.value = TIME_MIN;
  }
  if (alarmSetInput.value > TIME_MAX) {
    alarmSetInput.value = TIME_MAX;
  }
}

function updateTimerText() {
  const timerText = document.getElementById("timeRemaining");
  const minuteString = Math.floor(time / SECONDS_IN_MINUTE).toString().padStart(PAD_COUNT, PAD_CHAR);
  const secondString = (time % SECONDS_IN_MINUTE).toString().padStart(PAD_COUNT, PAD_CHAR);

  timerText.innerText = `Time Remaining: ${minuteString}:${secondString}`;
}
 
function setAlarm() {
  time = document.getElementById("alarmSet").value;
  updateTimerText();
  finishTimerUpdateInterval();
  setupTimerUpdateInterval();
}

function setupTimerUpdateInterval() {
  timerIntervalId = setInterval(updateTimer, TIMER_INTERVAL_DELAY);
}

function finishTimerUpdateInterval() {
  clearInterval(timerIntervalId);
}

function updateTimer() {
  if (time > 0) {
    time--;
    updateTimerText();
  } else {
    finishTimerUpdateInterval();
    startAlarm();
    setupBackgroundColorChange();
  }
}

function startAlarm() {
  playAlarm();
}

function setupBackgroundColorChange() {
  backgroundColorIntervalId = setInterval(updateBackgroundColor, BACKGROUND_COLOR_INTERVAL_DELAY);
}

function updateBackgroundColor() {
  if (isBackgroundColorWhite) {
    document.body.style.backgroundColor = COLOR_RED;
    isBackgroundColorWhite = false;
  } else {
    document.body.style.backgroundColor = COLOR_WHITE;
    isBackgroundColorWhite = true;
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
