// * Function for accordion 2
// variables
const accordion2BtnToggle = document.querySelectorAll(
  ".accordion2-card__title"
);

// adding event listener to the accordion2 toggle button
for (i of accordion2BtnToggle) {
  i.addEventListener("click", accordion2ToggleFunction);
}

// here the other bodies do not automatically close then the current one is open
function accordion2ToggleFunction() {
  this.nextElementSibling.classList.toggle("active");
  this.children[0].classList.toggle("toggleIcon");
}

// * Function for accordion 3
// variables
const accordion3BtnToggle = document.querySelectorAll(
  ".accordion3-card__title"
);

// adding event listener to the accordion3 toggle button
for (i of accordion3BtnToggle) {
  i.addEventListener("click", accordion3ToggleFunction);
}

// here the other bodies automatically close then the current one is open
function accordion3ToggleFunction() {
  for (i of accordion3BtnToggle) {
    i.nextElementSibling.style.display = "none";
    i.children[0].classList.remove("toggleIcon");
  }
  if (this.nextElementSibling.style.display == "none") {
    this.nextElementSibling.style.display = "block";
    this.children[0].classList.toggle("toggleIcon");
  }
}
