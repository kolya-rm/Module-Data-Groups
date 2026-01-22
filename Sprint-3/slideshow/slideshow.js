const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here
let imageIndex = 0;
let imageIndexDelta = 1;

onFinishLoad();

function onFinishLoad() {
    setupForwardBtn();
    setupBackwardBtn();
    setupFirstImage();
}

function setupForwardBtn() {
    document.getElementById("forward-btn").addEventListener("click", onForwardBtnClick);
}

function setupBackwardBtn() {
    document.getElementById("backward-btn").addEventListener("click", onBackwardBtnClick);
}

function setupFirstImage() {
    imageIndex = Math.floor(Math.random() * images.length); 
    setImage();
}

function onForwardBtnClick() {
    imageIndexDelta = 1;
    changeImageOnClick();
}

function onBackwardBtnClick() {
    imageIndexDelta = -1;
    changeImageOnClick();
}

function changeImageOnClick() {
    imageIndex += imageIndexDelta;
    checkImageIndex();
    setImage();
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