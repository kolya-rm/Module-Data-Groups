const TIME_MIN = 0;
const TIME_MAX = 3599;

let time = 0;

onFinishLoading();

function onFinishLoading() {
  setupAlarmSetInput();
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
 
function setAlarm() {}

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
