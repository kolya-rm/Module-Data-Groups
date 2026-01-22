const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here
let imageIndex = 0;

onFinishLoad();

function onFinishLoad() {
    setupForwardBtn();
    setupFirstImage();
}

function setupForwardBtn() {
    document.getElementById("forward-btn").addEventListener("click", onForwardBtnClick);
}

function setupFirstImage() {
    imageIndex = Math.floor(Math.random() * images.length);
    setImage();
}

function onForwardBtnClick() {
    imageIndex++;
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
}