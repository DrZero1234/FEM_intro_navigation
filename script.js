const FEATURE_CONTAINER = document.getElementById("features-container");
const COMPANY_CONTAINER = document.getElementById("company-container");
const HAMBURGER_WRAPPER = document.getElementById("hamburger-wrapper");
const SIDENAV = document.getElementById("sidenav");
const CLOSENAV = document.getElementById("closenav");
const HEADER_LINKS = document.querySelector(".header-links")
const SIDENAV_OVERLAY = document.getElementById("sidenav-overlay")

HAMBURGER_WRAPPER.addEventListener("click", () => {
    const visibility = HEADER_LINKS.getAttribute("data-visible");
    console.log(visibility)
    if (visibility === "false") {
        HEADER_LINKS.setAttribute("data-visible","true")
        HAMBURGER_WRAPPER.setAttribute("aria-expanded","true")
        SIDENAV_OVERLAY.style.display = "block"
    } else {
        HEADER_LINKS.setAttribute("data-visible","false")
        HAMBURGER_WRAPPER.setAttribute("aria-expanded","false")
        SIDENAV_OVERLAY.style.display = "none"
    }
    console.log(HAMBURGER_WRAPPER.getAttribute("aria-expanded"))
    HAMBURGER_WRAPPER.classList.toggle("open")
})

const add_arrows = () => {
    const containers = [FEATURE_CONTAINER,COMPANY_CONTAINER];
    containers.forEach((container) => {
        header_dropdown = container.querySelector(".header-dropdown")
        const arrow = container.querySelector("#arrow-img");
        if (Array.from(header_dropdown.classList).includes("inactive")) {
            arrow.src = "./images/icon-arrow-down.svg"
        } else {
            arrow.src = "./images/icon-arrow-up.svg"
        }
    })

}

const toggle_dropdown = (e) => {
    const arrow = e.currentTarget.querySelector("#arrow-img");
    const header_dropdown = e.currentTarget.querySelector(".header-dropdown")
    const dropdown_menu = e.currentTarget.querySelector(".dropdown-menu")


    const classes = Array.from(header_dropdown.classList)

    header_dropdown.classList.toggle("inactive")
    dropdown_menu.classList.toggle("visible")
    add_arrows()

}

const SMALL_SIZE_ADAPT = (x) => {
    if (x.matches) {
        HEADER_LINKS.setAttribute("data-visible", "false")
    } else {
        HEADER_LINKS.setAttribute("data-visible", "true")
        HAMBURGER_WRAPPER.setAttribute("aria-expanded", "false")
        SIDENAV_OVERLAY.style.display = "none"
    }
}


[FEATURE_CONTAINER,COMPANY_CONTAINER].forEach((container) => {
    container.addEventListener("click", (e) => {
        toggle_dropdown(e)
    })
})

var x = window.matchMedia("(max-width: 55em)")
SMALL_SIZE_ADAPT(x);
x.addListener(SMALL_SIZE_ADAPT)

add_arrows()



