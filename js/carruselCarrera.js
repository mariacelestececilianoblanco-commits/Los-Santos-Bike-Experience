document.querySelectorAll('[data-carrusel]').forEach(carrusel => {

    const imagenes = carrusel.querySelector('.imagenesCarrusel');
    const anterior = carrusel.querySelector('.anterior');
    const siguiente = carrusel.querySelector('.siguiente');

    const totalImagenes = imagenes.children.length;

    let indiceActual = 0;

    function actualizarCarrusel() {

        imagenes.style.transform = `translateX(-${indiceActual * 100}%)`;

    }

    siguiente.addEventListener('click', () => {

        indiceActual++;

        if (indiceActual >= totalImagenes) {
            indiceActual = 0;
        }

        actualizarCarrusel();

    });

    anterior.addEventListener('click', () => {

        indiceActual--;

        if (indiceActual < 0) {
            indiceActual = totalImagenes - 1;
        }

        actualizarCarrusel();

    });

});