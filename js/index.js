import { Router } from "./router.js"

const homeLink = document.querySelector('#home')
const universeLink = document.querySelector('#universe')
const explorationLink = document.querySelector('#exploration')
const milkwayLink = document.querySelector('#milk-way');
const solarSystemLink = document.querySelector('#solar-system');
const body = document.querySelector('body')
const logo = document.querySelector('#logo')


const router = new Router();

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add("/milkway", "/pages/milkway.html")
router.add("/solarsystem", "/pages/solarsystem.html")
router.add("/404", "/pages/404.html")

router.handle();

window.onpopstate = () => {
    let route = router.route();
    changePageStyle(route);
}

homeLink.addEventListener('click', () => {
    let route = router.route();
    changePageStyle(route);
})

universeLink.addEventListener('click', () => {
    let route = router.route();
    changePageStyle(route);
})

explorationLink.addEventListener('click', () => {
    let route = router.route();
    changePageStyle(route);
})

milkwayLink.addEventListener('click', () => {
    let route = router.route();
    changePageStyle(route);
})

solarSystemLink.addEventListener('click', () => {
    let route = router.route();
    changePageStyle(route);
})

logo.onclick = () => homeLink.click();

export function changePageStyle(route)
    {
        switch(route)
        {
            case '/pages/home.html':
                body.classList.add('home');
                body.classList.remove('exploration', 'universe', 'milkway', 'solarsystem');
                homeLink.classList.add('focus');
                explorationLink.classList.remove('focus');
                universeLink.classList.remove('focus');
                milkwayLink.classList.remove('focus');
                solarSystemLink.classList.remove('focus');
                break
            case '/pages/universe.html':
                body.classList.add('universe');
                body.classList.remove('exploration', 'home', 'milkway', 'solarsystem');
                homeLink.classList.remove('focus');
                explorationLink.classList.remove('focus');
                universeLink.classList.add('focus');
                milkwayLink.classList.remove('focus');
                solarSystemLink.classList.remove('focus');
                break
            case '/pages/exploration.html':
                body.classList.add('exploration');
                body.classList.remove('home', 'universe', 'milkway', 'solarsystem');
                homeLink.classList.remove('focus');
                explorationLink.classList.add('focus');
                universeLink.classList.remove('focus');
                milkwayLink.classList.remove('focus');
                solarSystemLink.classList.remove('focus');
                break
            case '/pages/milkway.html':
                body.classList.add('milkway'); 
                body.classList.remove('home', 'exploration', 'universe', 'solarsystem'); 
                homeLink.classList.remove('focus');
                explorationLink.classList.remove('focus');
                universeLink.classList.remove('focus');
                milkwayLink.classList.add('focus');
                solarSystemLink.classList.remove('focus');
                break
            case '/pages/solarsystem.html':
                body.classList.add('solarsystem'); 
                body.classList.remove('home', 'exploration', 'universe', 'milkway'); 
                homeLink.classList.remove('focus');
                explorationLink.classList.remove('focus');
                universeLink.classList.remove('focus');
                milkwayLink.classList.remove('focus');
                solarSystemLink.classList.add('focus');
                break
        }
    }