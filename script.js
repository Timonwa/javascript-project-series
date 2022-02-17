const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", function () {
	console.log("menu", "navLinks");
	navLinks.classList.toggle("active")
});
