const imagenesInterior = [
    { src: "../imageneshino/intgal1.jpg", alt: "interior 1"},
    { src: "../imageneshino/intgal2.jpg", alt: "interior 2"},
    { src: "../imageneshino/intgal3.jpg", alt: "interior 3"},
    { src: "../imageneshino/intgal4.jpg", alt: "interior 4"}
];

const imagenesExterior = [
    { src: "../imageneshino/extgal1.jpg", alt: "exterior 1"},
    { src: "../imageneshino/extgal2.jpg", alt: "exterior 2"},
    { src: "../imageneshino/extgal3.jpg", alt: "exterior 3"},
    { src: "../imageneshino/extgal4.jpg", alt: "exterior 4"},
    { src: "../imageneshino/extgal5.jpg", alt: "exterior 5"},
    { src: "../imageneshino/extgal6.jpg", alt: "exterior 6"},
    { src: "../imageneshino/extgal7.jpg", alt: "exterior 7"}
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

