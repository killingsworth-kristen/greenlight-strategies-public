// TODO: Make the screen sizing work
addEventListener("DOMContentLoaded", function () {
    if (this.screen.width <= 500) {
        const menuBtn = document.getElementById("mobile-menu");
        const navMenu = document.getElementsByClassName("nav-link-container")[0];

        menuBtn.ariaHidden = false;
        navMenu.classList.add("hidden");
        navMenu.ariaExpanded = false;
    } 
})

addEventListener("resize", function () {
    if (this.screen.width <= 500) {
        const menuBtn = document.getElementById("mobile-menu");
        const navMenu = document.getElementsByClassName("nav-link-container")[0];

        menuBtn.ariaHidden = false;
        navMenu.classList.add("hidden");
        navMenu.ariaExpanded = false;
    } 
})

const handleShowMobileNav = (e) => {
    const menuBtn = document.getElementById("mobile-menu");
    // const arrow = document.getElementById("menu-arrow");
    const navMenu = document.getElementsByClassName("nav-link-container")[0];
    
    const target = e.target.id;
    if (target === "mobile-menu" || target === "mobile-menu-text" || target === "menu-arrow") {
        if (navMenu.classList.contains("hidden")) {
            console.log("open")
            navMenu.classList.remove("hidden");
            navMenu.ariaExpanded = true;

            // arrow.innerHTML = "&nbsp;&triangle;&nbsp;"
        } else {
            console.log("hidden");
            navMenu.classList.add("hidden");
            navMenu.ariaExpanded = false;

            // arrow.innerHTML = "&nbsp;&triangledown;&nbsp;"
        }
    }
}