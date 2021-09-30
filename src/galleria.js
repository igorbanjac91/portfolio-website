import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import "./style/about-project.scss"

import Desktop from "./images/screenshots/galleria-desktop.png";
import Tablet from "./images/screenshots/galleria-tablet.png";
import Mobile from "./images/screenshots/galleria-mobile.png";


import carousel from "./components/carousel";
import "./components/nav"

carousel(Desktop, Tablet, Mobile);