const imagenesInterior = [
    { src: "../imagenesyaris/pantallamultimedia.webp", alt: "Tablero"},
    { src: "../imagenesyaris/interiorpanelystereo.png", alt: "Tablero"},
    { src: "../imagenesyaris/interiorversions.jpeg", alt: "Version s"}
];

const imagenesExterior = [
    { src: "../imagenesyaris/exteriorcalle.webp", alt: "exterior calle"},
    { src: "../imagenesyaris/exteriortrasero.jpeg", alt: "exterior trasero"},
    { src: "../imagenesyaris/exteriorfrente.jpeg", alt: "frente"},
    { src: "../imagenesyaris/exteriorgrande.jpeg", alt: "exterior con fondo blanco"},
    { src: "../imagenesyaris/exteriorfondotrasero.jpeg", alt: "exterior con fondo blanco"},
    { src: "../imagenesyaris/atardecer.jpeg", alt: "atardecer"}
];

let categoriaActual = [];
let indiceModal = 0;

// Funcion para abrir la galeria segun categoria
function abrirGaleria(tipo) {
    const modal = document.getElementById("modal-galeria");

    if (tipo === 'interior') {
        categoriaActual = imagenesInterior;
    } else if (tipo === 'exterior') {
        categoriaActual = imagenesExterior;
    }

    indiceModal = 0; // Arranca la primera foto
    modal.style.display = "flex";
    renderizarSlideModal();
}

// Funcion para cerrar la galeria
function cerrarGaleria() {
    const modal = document.getElementById("modal-galeria");
    modal.style.display = "none";
}

// Funcion para cambiar las imagenes con las flechas
function cambiarSlideModal(direccion) {
    indiceModal += direccion;

    // Control de limites circular
    if (indiceModal >= categoriaActual.length) {
        indiceModal = 0;
    }
    if (indiceModal < 0) {
        indiceModal = categoriaActual.length - 1;
    }

    renderizarSlideModal();
}

// Muestra la imagen actual en el contenedor del modal
function renderizarSlideModal(){
    const contenedor = document.getElementById("modal-slide-container");
    const item = categoriaActual[indiceModal];

    contenedor.innerHTML = `
        <img src="${item.src}" alt="${item.alt}">
    `
}

