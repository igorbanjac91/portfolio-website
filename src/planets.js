import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import "./style/about.scss"

import Desktop from "./images/screenshots/planets-desktop.png";
import Tablet from "./images/screenshots/planets-tablet.png";
import Mobile from "./images/screenshots/planets-mobile.png";


let imageContainer = document.querySelector(".images-container");

console.log(imageContainer)

const desktopScreenshot = new Image();
const tableScreenshot = new Image();
const mobileScreenshot = new Image();

desktopScreenshot.src = Desktop;
tableScreenshot.src = Tablet;
mobileScreenshot.src = Mobile;

imageContainer.appendChild(desktopScreenshot);
imageContainer.appendChild(tableScreenshot);
imageContainer.appendChild(mobileScreenshot);


// Menu 

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector("#menu");

menuBtn.addEventListener("click", function toggleMenu(e) {
  e.preventDefault();
  menu.classList.toggle("show-menu");
});