const images = [
     "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
    "./assets/cute-cat-d.png",
    "./assets/cute-cat-e.png",
    "./assets/cute-cat-f.png",
];


// Write your code here
const SECOND_MULTIPLIER = 1000;

let delayTime = 1;
let imageIndex = 0;
let imageIndexDelta = 1;
let autoIntervalId = null;


// region setup
function onFinishLoad() {
    setupDelayTime();
    setupFirstImage();
    setupAutoBackwardBtn();
    setupBackwardBtn();
    setupStopBtn();
    setupForwardBtn();
    setupAutoForwardBtn();
    setupDelayInput();
}

function setupDelayTime() {
    delayTime = document.getElementById("delay-input").defaultValue * SECOND_MULTIPLIER;
}

function setupFirstImage() {
  imageIndex = Math.floor(Math.random() * images.length);
  setImage();
}

function setupAutoBackwardBtn() {
    document.getElementById("auto-backward-btn").addEventListener("click", onClickAutoBackwardBtn);
}

function setupBackwardBtn() {
    document.getElementById("backward-btn").addEventListener("click", onClickBackwardBtn);
}

function setupStopBtn() {
    document.getElementById("stop-btn").addEventListener("click", onClickStopBtn);
}

function setupForwardBtn() {
    document.getElementById("forward-btn").addEventListener("click", onClickForwardBtn);
}

function setupAutoForwardBtn() {
    document.getElementById("auto-forward-btn").addEventListener("click", onClickAutoForwardBtn);
}

function setupDelayInput() {
    document.getElementById("delay-input").addEventListener("input", onInputDelayInput);
}
// endregion


// region listeners
function onClickAutoBackwardBtn() {
    imageIndexDelta = -1;
    clearAutoInterval();
    setAutoInterval();
}

function onClickBackwardBtn() {
    imageIndexDelta = -1;
    changeImage();
}

function onClickStopBtn() {
    clearAutoInterval();
}

function onClickForwardBtn() {
    imageIndexDelta = 1;
    changeImage();
}

function onClickAutoForwardBtn() {
    imageIndexDelta = 1;
    clearAutoInterval();
    setAutoInterval();
}

function clearAutoInterval() {
    clearInterval(autoIntervalId);
    autoIntervalId = null;
}

function onInputDelayInput() {
    const delayInput = document.getElementById("delay-input");
    if (delayInput.value < 1) {
        delayInput.value = 1;
    }
}
// endregion


// region inner logic
function setAutoInterval() {
    autoIntervalId = setInterval(changeImage, delayTime);
}

function changeImage() {
  imageIndex += imageIndexDelta;
  checkImageIndex();
  setImage();
}

function checkImageIndex() {
  if (imageIndex === images.length) {
    imageIndex = 0;
  }
  if (imageIndex === -1) {
    imageIndex = images.length - 1;
  }
}

function setImage() {
    const image = document.getElementById("carousel-img");
    image.src = images[imageIndex];
}
// endregion


document.onFinishLoad = onFinishLoad();