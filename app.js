const mobileMenu = document.querySelector("#mobile-menu");
const navbarMenu = document.querySelector(".navbar__menu");

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    navbarMenu.classList.toggle("is-active");
})

