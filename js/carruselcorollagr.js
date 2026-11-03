const imagenesInterior = [
    { src: "../imagenescorollagr/intgal1.jpeg", alt: "interior"},
    { src: "../imagenescorollagr/intgal2.png", alt: "pantalla"},
    { src: "../imagenescorollagr/intgal3.png", alt: "controles"},
    { src: "../imagenescorollagr/intgal4.png", alt: "tablero"},
    { src: "../imagenescorollagr/intgal5.png", alt: "puerta"},
    { src: "../imagenescorollagr/intgal6.png", alt: "lateral"},
    { src: "../imagenescorollagr/intgal7.png", alt: "techo"},
    { src: "../imagenescorollagr/intgal8.jpeg", alt: "interiorperspectiva"}
];

const imagenesExterior = [
    { src: "../imagenescorollagr/extgal1.png", alt: "exterior 1"},
    { src: "../imagenescorollagr/extgal2.png", alt: "exterior 2"},
    { src: "../imagenescorollagr/extgal3.png", alt: "exterior 3"},
    { src: "../imagenescorollagr/extgal4.png", alt: "exterior 4"},
    { src: "../imagenescorollagr/extgal5.png", alt: "exterior 5"},
    { src: "../imagenescorollagr/extgal6.jpeg", alt: "exterior 6"},
    { src: "../imagenescorollagr/extgal7.png", alt: "exterior 7"}
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

