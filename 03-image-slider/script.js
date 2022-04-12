// the variables of the image slider
const image = document.getElementById("image");
const imageNumber = document.getElementById("image-number");
const totalImageNumber = document.getElementById("total-image-number");
const prevBtn = document.getElementById("backward");
const nextBtn = document.getElementById("forward");
// the image array
const images = [
  "./img/01-living-room-blue-theme.jpg",
  "./img/02-living-room-couch.jpg",
  "./img/03-living-room-red-theme.jpg",
  "./img/04-modern-kitchen.jpg",
];

// the index of the image on page load
let currentImage = 0;
// the image details that shows when the webpage loads
window.addEventListener("DOMContentLoaded", function () {
  image.src = images[currentImage];
  imageNumber.textContent = currentImage + 1;
  totalImageNumber.textContent = images.length;
});
// function to select and change the image details
function showImage() {
  image.src = images[currentImage];
  imageNumber.textContent = currentImage + 1;
  totalImageNumber.textContent = images.length;
}

// the next button function
nextBtn.addEventListener("click", next);
function next() {
  currentImage++;
  if (currentImage > images.length - 1) {
    currentImage = 0;
  }
  showImage(currentImage);
}

// the prev button function
prevBtn.addEventListener("click", prev);
function prev() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  showImage(currentImage);
}
