import {
    homeLink,
    universeLink,
    explorationLink, 
    milkwayLink,
    solarSystemLink,
    body
} from "./elements.js";

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