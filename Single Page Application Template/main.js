const appElement = document.querySelector("#app")
const routes = {
    "": {
        title: "Home",
        data: "home.html",
        isApi: false
    },
    "#films":{
        title: "Films",
        data: "films.html",
        isApi: false
    },
    "#series":{
        title: "Series",
        data: "series.html",
        isApi: false
    },
    "#about":{
        title: "About",
        data: "about.html",
        isApi: false
    }
}
const hashLinks = document.querySelectorAll(".hash-route-link")

function checkRoutes(hash = window.location.hash) {
    document.title = routes[hash].title
    const dataUrl = routes[hash].data
    fetch(dataUrl).then(res => res.text()).then(res => appElement.innerHTML = res)
}

hashLinks.forEach(item => item.addEventListener("click", (event) => {
    window.location.hash
    checkRoutes(item.hash)
}))

checkRoutes()

