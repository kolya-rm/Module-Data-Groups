const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here
const AUTO_INTERVAL_DELAY = 1000;

let imageIndex = 0;
let imageIndexDelta = 1;
let autoIntervalId = null;

onFinishLoad();

function onFinishLoad() {
    setupAutoBackwardBtn();
    setupBackwardBtn();
    setupForwardBtn();
    setupAutoForwardBtn();
    setupFirstImage();
}

function setupAutoBackwardBtn() {
    document.getElementById("auto-backward-btn").addEventListener("click", onAutoBackwardBtnClick);
}

function setupBackwardBtn() {
    document.getElementById("backward-btn").addEventListener("click", onBackwardBtnClick);
}

function setupForwardBtn() {
    document.getElementById("forward-btn").addEventListener("click", onForwardBtnClick);
}

function setupAutoForwardBtn() {
    document.getElementById("auto-forward-btn").addEventListener("click", onAutoForwardBtnClick);
}

function setupFirstImage() {
    imageIndex = Math.floor(Math.random() * images.length); 
    setImage();
}

function onAutoBackwardBtnClick() {
    imageIndexDelta = -1;
    clearAutoInterval();
    setAutoInterval();
}

function onBackwardBtnClick() {
    imageIndexDelta = -1;
    changeImage();
}

function onForwardBtnClick() {
    imageIndexDelta = 1;
    changeImage();
}

function onAutoForwardBtnClick() {
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
    console.log(imageIndex);
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