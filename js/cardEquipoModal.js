const integrantes = [
    {
        nombre: "Valentina Rojas",
        apodo: "LA LÍDER DEL CAMINO",
        cargo: "Directora general",
        imagen: "img/valentinaVard.jpg",
        descripcion: "Valentina es una apasionada por el deporte, los nuevos desafíos y el trabajo en equipo. Su objetivo es hacer que cada edición de la competencia sea una experiencia especial para ciclistas, visitantes y colaboradores. Le gusta organizar, motivar a las personas y encontrar soluciones para que cada detalle salga adelante.",
        frase: "Los grandes desafíos comienzan con una decisión: atreverse a dar el primer paso y nunca perder de vista la meta."
    },
    {
        nombre: "Mariana Solano",
        apodo: "LA EXPLORADORA",
        cargo: "Coordinadora de logística",
        imagen: "img/MarianaCard.jpg",
        descripcion: "Amante de la naturaleza y de descubrir nuevos lugares, Mariana disfruta planificar experiencias al aire libre. Es una persona organizada y detallista, encargada de coordinar los recursos, recorridos y preparativos necesarios para que cada etapa se desarrolle de la mejor manera. Para ella, una buena aventura comienza mucho antes de llegar a la línea de salida.",
        frase: "Cada ruta esconde una historia diferente; solo necesitas prepararte, pedalear y atreverte a descubrirla."
    },
    {
        nombre: "Camila Jiménez",
        apodo: "LA VOZ DEL MTB",
        cargo: "Encargada de comunicación",
        imagen: "img/camilaCrad.jpg",
        descripcion: "Creativa, curiosa y apasionada por contar historias, Camila es quien comparte la emoción de la competencia con toda la comunidad. Disfruta la fotografía, las redes sociales y la creación de contenido. Su trabajo consiste en transmitir cada momento especial, mantener informados a los participantes y acercar el evento a quienes viven el ciclismo desde diferentes lugares.",
        frase: "Detrás de cada fotografía hay una historia, y detrás de cada ciclista existe un sueño que merece ser contado."
    },
    {
        nombre: "Daniela Vargas",
        apodo: "LA CHISPA DEL EQUIPO",
        cargo: "Coordinadora de Fan Zone",
        imagen: "img/DanielaCard.jpg",
        descripcion: "Daniela es alegre, sociable y siempre está buscando nuevas formas de compartir la energía del deporte. Le encanta crear ambientes donde las personas puedan disfrutar, participar y conectar. Está a cargo de las actividades recreativas, espacios para visitantes y experiencias que hacen que la competencia se viva más allá de las rutas.",
        frase: "La verdadera emoción no termina en la meta; también está en las personas, las risas y los momentos que compartimos."
    },
    {
        nombre: "Andrés Vargas",
        apodo: "EL GUARDIÁN DE LA RUTA",
        cargo: "Director técnico y seguridad",
        imagen: "img/AndresCard.jpg",
        descripcion: "Con una gran pasión por el ciclismo y los deportes de aventura, Andrés conoce la importancia de cada detalle en una competencia. Se encarga de supervisar las condiciones técnicas de los recorridos, coordinar los aspectos de seguridad y trabajar para que los participantes puedan concentrarse en disfrutar el desafío. Cree que la preparación es tan importante como la determinación.",
        frase: "Un buen recorrido pone a prueba tus límites, pero una buena preparación te permite disfrutar cada kilómetro."
    },
    {
        nombre: "Sebastián Castro",
        apodo: "EL COMPAÑERO DE RUTA",
        cargo: "Atención al participante",
        imagen: "img/SebastianCard.jpg",
        descripcion: "Sebastián es una persona colaboradora, cercana y siempre dispuesta a ayudar. Disfruta conocer gente nueva y formar parte de experiencias que reúnen a personas con intereses en común. Es el encargado de acompañar a los ciclistas durante el proceso de inscripción, resolver consultas y brindar información para que todos se sientan bienvenidos desde el primer contacto.",
        frase: "Una gran competencia se construye entre todos; cada persona que llega forma parte de esta aventura."
    }
];
document.addEventListener("DOMContentLoaded", () => {

    const botonesEquipo = document.querySelectorAll(".verIntegrante");
    const modalEquipo = document.getElementById("modalEquipo");
    const cerrarModal = document.getElementById("cerrarModalEquipo");

    if (!modalEquipo || !cerrarModal) {
        console.error("No se encontró la modal o el botón de cerrar.");
        return;
    }

    botonesEquipo.forEach(boton => {

        boton.addEventListener("click", () => {

            const indice = Number(boton.dataset.integrante);
            const persona = integrantes[indice];

            if (!persona) {
                console.error("No se encontró el integrante:", indice);
                return;
            }

            document.getElementById("imagenModalEquipo").src = persona.imagen;
            document.getElementById("imagenModalEquipo").alt = persona.nombre;

            document.getElementById("apodoModalEquipo").textContent = persona.apodo;
            document.getElementById("nombreModalEquipo").textContent = persona.nombre;
            document.getElementById("cargoModalEquipo").textContent = persona.cargo;
            document.getElementById("descripcionModalEquipo").textContent = persona.descripcion;
            document.getElementById("fraseModalEquipo").textContent = `«${persona.frase}»`;

            modalEquipo.classList.add("activa");

        });

    });

    cerrarModal.addEventListener("click", () => {
        modalEquipo.classList.remove("activa");
    });

    modalEquipo.addEventListener("click", (e) => {
        if (e.target === modalEquipo) {
            modalEquipo.classList.remove("activa");
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modalEquipo.classList.remove("activa");
        }
    });

});