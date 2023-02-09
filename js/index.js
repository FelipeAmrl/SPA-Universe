import { Router } from "./router.js";

import {
    homeLink,
    universeLink,
    explorationLink, 
    milkwayLink,
    solarSystemLink,
    logo
} from "./elements.js";

import { changePageStyle } from "./changeStyle.js"

import Events from "./events.js";

const router = new Router();

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add("/milkway", "/pages/milkway.html")
router.add("/solarsystem", "/pages/solarsystem.html")
router.add("/404", "/pages/404.html")

router.handle();

Events({
    homeLink,
    universeLink,
    explorationLink,
    milkwayLink,
    solarSystemLink,
    logo,
    router,
    changePageStyle
});

