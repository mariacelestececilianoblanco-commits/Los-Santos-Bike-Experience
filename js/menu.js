const menu = document.querySelector(".opcionNavega");
const abrirMenu = document.querySelector(".navBar");
const cerrarMenu = document.querySelector(".closeIcon");


// Abrir menú
abrirMenu.addEventListener("click", () => {
    menu.classList.add("active");
});


// Cerrar menú
cerrarMenu.addEventListener("click", () => {
    menu.classList.remove("active");
});


// Cerrar al seleccionar una opción
document.querySelectorAll(".navItem a").forEach(enlace => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});