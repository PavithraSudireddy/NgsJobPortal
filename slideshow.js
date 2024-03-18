
const slideshow = document.getElementById("slideshow");
const images = slideshow.getElementsByTagName("img");

const slideImages = Array.from(images);

let currentIndex = 0;

function slideRandomly() {
const randomIndex = Math.floor(Math.random() * slideImages.length);
slideImages[currentIndex].style.display = "none";
slideImages[randomIndex].style.display = "block";
currentIndex = randomIndex;
}

setInterval(slideRandomly, 2000); // Change the slide every 3 seconds
