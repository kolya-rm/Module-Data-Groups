const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here
let imageIndex = 0;

onFinishLoad();

function onFinishLoad() {
    setupFirstImage();
}

function setupFirstImage() {
    imageIndex = Math.floor(Math.random() * images.length);
    setImage();
}

function setImage() {
    const image = document.getElementById("carousel-img");
    image.src = images[imageIndex];
}