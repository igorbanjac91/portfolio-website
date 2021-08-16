// ---------------------- Nav ----------------------

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector("#menu");

menuBtn.addEventListener("click", function toggleMenu(e) {
  e.preventDefault();
  menu.classList.toggle("show-menu");
});

// ---------------------- Nav Links ----------------------

let aboutLink = document.querySelector(`[href="#about"]`);
let projectsLink = document.querySelector(`[href="#projects"]`);
let contactLink = document.querySelector(`[href="#contact"]`);

aboutLink.href = "/index.html#about";
projectsLink.href = "/index.html#projects";
contactLink.href = "/index.html#contact";
