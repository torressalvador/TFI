const imagenesInterior = [
    { src: "./imagenesyariscross/galint.jpeg", alt: "interior"},
    { src: "./imagenesyariscross/intgal2.jpeg", alt: "techo"},
    { src: "./imagenesyariscross/intgal3.jpeg", alt: "caja"},
    { src: "./imagenesyariscross/intgal4.jpeg", alt: "torpedo"},
    { src: "./imagenesyariscross/intgal5.jpeg", alt: "pantalla"},
    { src: "./imagenesyariscross/intgal6.jpeg", alt: "tablero"}
];

const imagenesExterior = [
    { src: "./imagenesyariscross/galext.jpeg", alt: "exterior 1"},
    { src: "./imagenesyariscross/extgal2.jpeg", alt: "exterior 2"},
    { src: "./imagenesyariscross/extgal3.jpeg", alt: "exterior 3"},
    { src: "./imagenesyariscross/extgal4.jpeg", alt: "exterior 4"},
    { src: "./imagenesyariscross/extgal5.jpeg", alt: "exterior 5"},
    { src: "./imagenesyariscross/extgal6.jpeg", alt: "exterior 6"},
    { src: "./imagenesyariscross/extgal7.jpeg", alt: "exterior 7"}
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

