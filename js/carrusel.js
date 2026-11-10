const imagenesCarrusel = document.getElementById("imagenesCarrusel");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");

let indiceActual = 0;

const totalImagenes = imagenesCarrusel.children.length;

function moverCarrusel() {

    imagenesCarrusel.style.transform =
        `translateX(-${indiceActual * 100}%)`;

}

btnSiguiente.addEventListener("click", () => {

    indiceActual++;

    if (indiceActual >= totalImagenes) {
        indiceActual = 0;
    }

    moverCarrusel();

});

btnAnterior.addEventListener("click", () => {

    indiceActual--;

    if (indiceActual < 0) {
        indiceActual = totalImagenes - 1;
    }

    moverCarrusel();

});