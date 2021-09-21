import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import "./style/about-project.scss"

import Desktop from "./images/screenshots/audiophile-desktop.png";
import Tablet from "./images/screenshots/audiophile-tablet.png";
import Mobile from "./images/screenshots/audiophile-mobile.png";

import "./components/nav"
import carousel from "./components/carousel";

carousel(Desktop, Tablet, Mobile);
