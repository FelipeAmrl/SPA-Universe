export default function ({
    homeLink,
    universeLink,
    explorationLink,
    milkwayLink,
    solarSystemLink,
    logo,
    router,
    changePageStyle
}) 
{
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
}