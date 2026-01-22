const images = [
     "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
    "./assets/cute-cat-d.png",
    "./assets/cute-cat-e.png",
    "./assets/cute-cat-f.png",
];


// Write your code here
const AUTO_INTERVAL_DELAY = 5000;

let imageIndex = 0;
let imageIndexDelta = 1;
let autoIntervalId = null;

onFinishLoad();

function onFinishLoad() {
    setupAutoBackwardBtn();
    setupBackwardBtn();
    setupStopBtn();
    setupForwardBtn();
    setupAutoForwardBtn();
    setupFirstImage();
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

function setupFirstImage() {
    imageIndex = Math.floor(Math.random() * images.length); 
    setImage();
}

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

function changeImage() {
    imageIndex += imageIndexDelta;
    checkImageIndex();
    setImage();
}

function clearAutoInterval() {
    clearInterval(autoIntervalId);
    autoIntervalId = null;
}

function setAutoInterval() {
    autoIntervalId = setInterval(changeImage, AUTO_INTERVAL_DELAY);
}

function setImage() {
    const image = document.getElementById("carousel-img");
    image.src = images[imageIndex];
}

function checkImageIndex() {
    if (imageIndex === images.length) {
        imageIndex = 0;
    }
    if (imageIndex === -1) {
        imageIndex = images.length - 1;
    }
}