export class Router 
{
    routes = {};

    add(routeName, page)
    {
        this.routes[routeName] = page;
        console.log(this.routes);
    }

    route(event) 
    {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        const route = this.handle();

        return route;
    }

    handle()
    {
        const { pathname } = window.location;
        
        const route = this.routes[pathname] || this.routes["/404"];

        fetch(route)
        .then(response => response.text())
        .then(body => {
            document.querySelector('#app').innerHTML = body;
        }
        )

        return route;
    }
}