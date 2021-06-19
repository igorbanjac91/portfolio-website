import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './style/main.scss'
import { init, sendForm } from 'emailjs-com';
init("user_FbtbT5YO2byoewUy3V5VE");

// Images

import HtmlLogo from './images/html5.svg';
import Css3Logo from './images/css3.svg';
import JsLogo from './images/javascript.svg';
import ReactLogo from './images/react.svg';
import RailsLogo from './images/rails.svg';
import RubyLogo from './images/ruby.svg';
import GitLogo from './images/git.svg';
import BashLogo from './images/bash.svg';
import BootstrapLogo from './images/bootstrap.svg';
import FigmaLogo from './images/figma.svg';
import planetFact from './images/screenshots/planets-desktop.png';

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

let websiteImage = document.createElement("li");
websiteImage.classList.add("box");
websiteImage.style.backgroundImage = `url(${planetFact})`;

let projectsList = document.querySelector(".projects__list");
projectsList.appendChild(websiteImage);


// Email 

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//   event.preventDefault();
//   sendForm('service_k8j0bu5','template_oqnlwqk', this )
// 	.then(function(response) {
// 	   console.log('SUCCESS!', response.status, response.text);
// 	}, function(err) {
// 	   console.log('FAILED...', err);
// 	});
// })
