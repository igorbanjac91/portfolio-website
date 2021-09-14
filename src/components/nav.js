// ---------------------- Nav ----------------------

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector("#menu");

menuBtn.addEventListener("click", function toggleMenu(e) {
  e.preventDefault();
  menu.classList.toggle("show-menu");
});

// ---------------------- Nav Links ----------------------

let aboutLink = document.querySelector(".about-link");
let projectsLink = document.querySelector(".projects-link");
let contactLink = document.querySelector(".contact-link");

