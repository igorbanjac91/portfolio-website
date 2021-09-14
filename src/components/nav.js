// ---------------------- Nav ----------------------

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector("#menu");

menuBtn.addEventListener("click", function toggleMenu(e) {
  e.preventDefault();
  menu.classList.toggle("show-menu");
});

