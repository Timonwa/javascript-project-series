// the variables of the image slider
const image = document.querySelectorAll(".slide-image");
const imageNumber = document.querySelectorAll(".slide-image-number");
const totalImageNumber = document.querySelectorAll(".total-image-number");
const prevBtn = document.querySelectorAll(".backward");
const nextBtn = document.querySelectorAll(".forward");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");

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
  showImage();
});

// function to select and change the image details
function showImage() {
  for (i of image) {
    i.src = images[currentImage];
    i.addEventListener("click", function () {
      modal.style.display = "flex";
    });
  }

  for (i of imageNumber) {
    i.textContent = currentImage + 1;
  }

  for (i of totalImageNumber) {
    i.textContent = images.length;
  }
}

// the next button function
for (i of nextBtn) {
  i.addEventListener("click", function () {
    currentImage++;
    if (currentImage > images.length - 1) {
      currentImage = 0;
    }
    showImage(currentImage);
  });
}

// the prev button function
for (i of prevBtn) {
  i.addEventListener("click", function () {
    currentImage--;
    if (currentImage < 0) {
      currentImage = images.length - 1;
    }
    showImage(currentImage);
  });
}

// close the modal
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
