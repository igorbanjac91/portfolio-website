import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import "./style/about.scss"

import Desktop from "./images/screenshots/planets-desktop.png";
import Tablet from "./images/screenshots/planets-tablet.png";
import Mobile from "./images/screenshots/planets-mobile.png";


// ---------------------- Carousel ----------------------

let track = document.querySelector(".carousel__track")
let trackContainer = document.querySelector(".carousel__track-container");
let leftButton = document.querySelector(".carousel__button--left")
let rightButton = document.querySelector(".carousel__button--right")
let carouselNav = document.querySelector(".carousel__nav");
let indicators = Array.from(carouselNav.children);
let slides = Array.from(track.children);
let slide1 = document.querySelector(".carousel__slide-1");
let slide2 = document.querySelector(".carousel__slide-2");
let slide3 = document.querySelector(".carousel__slide-3");


const desktopScreenshot = new Image();
const tableScreenshot = new Image();
const mobileScreenshot = new Image();

desktopScreenshot.src = Desktop;
tableScreenshot.src = Tablet;
mobileScreenshot.src = Mobile;

slide1.appendChild(mobileScreenshot);
slide3.appendChild(desktopScreenshot);
slide2.appendChild(tableScreenshot);

const slide1Width = slide1.getBoundingClientRect().width;
const slide2Width = slide2.getBoundingClientRect().width;
const slide3Width = slide3.getBoundingClientRect().width;

slide1.style.left = `${slide1Width * 0}px`;
slide2.style.left = `${slide1Width * 1}px`;
slide3.style.left = `${slide2Width * 2}px`;









// ---------------------- Nav ----------------------

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector("#menu");

menuBtn.addEventListener("click", function toggleMenu(e) {
  e.preventDefault();
  menu.classList.toggle("show-menu");
});