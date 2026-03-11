const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
navLinks.classList.add("active");
});

closeBtn.addEventListener("click", () => {
navLinks.classList.remove("active");
});