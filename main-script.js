//* main menu toggle
// variables
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

// function to open and close main menu
menu.addEventListener("click", function () {
  navLinks.classList.toggle("nav-links-active");
});
