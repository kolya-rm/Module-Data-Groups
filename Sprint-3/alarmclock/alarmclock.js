const TIME_MIN = 0;
const TIME_MAX = 3599;

onFinishLoading();

function onFinishLoading() {
  document.getElementById("alarmSet").addEventListener("input", onAlarmSetInput);
}

function onAlarmSetInput() {
  const alarmSet = document.getElementById("alarmSet");
  if (alarmSet.value < TIME_MIN) {
    alarmSet.value = TIME_MIN;
  }
  if (alarmSet.value > TIME_MAX) {
    alarmSet.value = TIME_MAX;
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
