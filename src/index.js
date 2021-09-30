import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import './style/application.scss'
import { init, sendForm } from 'emailjs-com';
init("user_FbtbT5YO2byoewUy3V5VE");

// Images

import HtmlLogo from './images/icons/html5.svg';
import Css3Logo from './images/icons/css3.svg';
import JsLogo from './images/icons/javascript.svg';
import ReactLogo from './images/icons/react.svg';
import RailsLogo from './images/icons/rails.svg';
import RubyLogo from './images/icons/ruby.svg';
import GitLogo from './images/icons/git.svg';
import BashLogo from './images/icons/bash.svg';
import BootstrapLogo from './images/icons/bootstrap.svg';
import FigmaLogo from './images/icons/figma.svg';
import planetFact from './images/screenshots/planets-desktop.png';
import cyberFood from './images/screenshots/cyber-food-desktop.png';
import audiophile from './images/screenshots/audiophile-desktop.png';
import galleria from './images/screenshots/galleria-desktop.png';

// Burger menu

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector("#menu");
let logosContainer = document.querySelector('.logos-container');


// Logo Images

const htmlLogo = new Image();
const css3Logo = new Image();
const jsLogo = new Image();
const reactLogo = new Image();
const railsLogo = new Image();
const rubyLogo = new Image();
const gitLogo = new Image();
const bashLogo = new Image();
const bootstrapLogo = new Image();
const figmaLogo = new Image();

htmlLogo.src = HtmlLogo;
css3Logo.src = Css3Logo;
jsLogo.src = JsLogo;
reactLogo.src = ReactLogo;
railsLogo.src = RailsLogo;
rubyLogo.src = RubyLogo;
gitLogo.src = GitLogo;
bashLogo.src = BashLogo;
bootstrapLogo.src = BootstrapLogo;
figmaLogo.src = FigmaLogo;

htmlLogo.alt = "html" ;
css3Logo.alt = "css3";
jsLogo.alt = "javascript";
reactLogo.alt = "react";
railsLogo.alt = "rails";
rubyLogo.alt = "ruby";
gitLogo.alt = "git";
bashLogo.alt = "bash";
bootstrapLogo.alt = "bootstrap";
figmaLogo.alt = "figma";

logosContainer.appendChild(htmlLogo);
logosContainer.appendChild(css3Logo);
logosContainer.appendChild(jsLogo);
logosContainer.appendChild(reactLogo);
logosContainer.appendChild(railsLogo);
logosContainer.appendChild(rubyLogo);
logosContainer.appendChild(gitLogo);
logosContainer.appendChild(bashLogo);
logosContainer.appendChild(bootstrapLogo);
logosContainer.appendChild(figmaLogo);

menuBtn.addEventListener("click", function toggleMenu(e) {
  e.preventDefault();
  menu.classList.toggle("show-menu");
});

let planetFactWebsiteItem = document.createElement("li");
let planetFactWebsite = document.createElement("a");
planetFactWebsiteItem.appendChild(planetFactWebsite);
planetFactWebsite.classList.add("box");
planetFactWebsite.style.backgroundImage = `url(${planetFact})`;
planetFactWebsite.href = "planets-app-about.html"


let cyberFoodWebsiteItem = document.createElement("li");
let cyberFoodWebsite = document.createElement("a");
cyberFoodWebsiteItem.appendChild(cyberFoodWebsite);
cyberFoodWebsite.classList.add("box");
cyberFoodWebsite.style.backgroundImage = `url(${cyberFood})`;
cyberFoodWebsite.href = "cyber-food-about.html"

let audiophileWebsiteItem = document.createElement("li");
let audiophileWebsite = document.createElement("a");
audiophileWebsiteItem.appendChild(audiophileWebsite);
audiophileWebsite.classList.add("box");
audiophileWebsite.style.backgroundImage = `url(${audiophile})`;
audiophileWebsite.href = "audiophile-about.html"

let galleriaWebsiteItem = document.createElement("li");
let galleriaWebsite = document.createElement("a");
galleriaWebsiteItem.appendChild(galleriaWebsite);
galleriaWebsite.classList.add("box");
galleriaWebsite.style.backgroundImage = `url(${galleria})`;
galleriaWebsite.href = "galleria-about.html"


let projectsList = document.querySelector(".projects__list");
projectsList.appendChild(planetFactWebsiteItem);
projectsList.appendChild(cyberFoodWebsiteItem);
projectsList.appendChild(audiophileWebsiteItem);
projectsList.appendChild(galleriaWebsiteItem);



// Email

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  sendForm('service_k8j0bu5','template_oqnlwqk', this )
	.then(function(response) {
    alert("Email sent successfully!")
	}, function(err) {
	   console.log('FAILED...', err);
	});
})
