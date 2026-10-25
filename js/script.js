const hamburguer = document.querySelector(".hamburger");
const menu = document.querySelector("#main-menu");
const menuLinks = menu.querySelectorAll("a");

const isEnglish = document.documentElement.lang === "en";
const openLabel = isEnglish ? "Open menu" : "Abrir menú";
const closeLabel = isEnglish ? "Close menu" : "Cerrar menú";

hamburguer.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");

    hamburguer.setAttribute("aria-expanded", isOpen);
    hamburguer.setAttribute("aria-label", isOpen ? closeLabel : openLabel);
});

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        hamburguer.setAttribute("aria-expanded", "false");
        hamburguer.setAttribute("aria-label", openLabel);
    });
});
