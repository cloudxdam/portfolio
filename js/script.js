const hamburguer = document.querySelector(".hamburger");
const menu = document.querySelector("#main-menu");
const menuLinks = menu.querySelectorAll("a");

hamburguer.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");

    hamburguer.setAttribute("aria-expanded", isOpen);
    hamburguer.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        hamburguer.setAttribute("aria-expanded", "false");
        hamburguer.setAttribute("aria-label", "Abrir-menú")
    });
});