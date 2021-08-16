import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import "./style/about-project.scss"

import Desktop from "./images/screenshots/planets-desktop.png";
import Tablet from "./images/screenshots/planets-tablet.png";
import Mobile from "./images/screenshots/planets-mobile.png";

import "./components/nav"
import carousel from "./components/carousel";

carousel(Desktop, Tablet, Mobile);


