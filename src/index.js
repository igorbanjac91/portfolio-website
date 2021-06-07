import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './style/main.scss'

// Burger menu
let body = document.querySelector("body");
let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector("#menu");

console.log(menuBtn);

menuBtn.addEventListener("click", function toggleMenu(e) {
  e.preventDefault();
  menu.classList.toggle("show-menu");
});

