const FEATURE_CONTAINER = document.getElementById("features-container");
const COMPANY_CONTAINER = document.getElementById("company-container");
const HAMBURGER_WRAPPER = document.getElementById("hamburger-wrapper");

HAMBURGER_WRAPPER.addEventListener("click", () => {
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


[FEATURE_CONTAINER,COMPANY_CONTAINER].forEach((container) => {
    container.addEventListener("click", (e) => {
        toggle_dropdown(e)
    })
})

add_arrows()



