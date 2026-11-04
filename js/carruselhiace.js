const imagenesInterior = [
    { src: "../imageneshiace/intgal1.jpeg", alt: "interior 1"},
    { src: "../imageneshiace/intgal2.jpeg", alt: "interior 2"},
    { src: "../imageneshiace/intgal3.jpeg", alt: "interior 3"},
    { src: "../imageneshiace/intgal4.jpeg", alt: "interior 4"},
    { src: "../imageneshiace/intgal5.jpeg", alt: "interior 5"},
    { src: "../imageneshiace/intgal6.jpeg", alt: "interior 6"},
    { src: "../imageneshiace/intgal7.jpeg", alt: "interior 7"},
    { src: "../imageneshiace/intgal8.jpeg", alt: "interior 8"},
    { src: "../imageneshiace/intgal9.png", alt: "interior 9"},
    { src: "../imageneshiace/intgal10.jpeg", alt: "interior 10"}
];

const imagenesExterior = [
    { src: "../imageneshiace/extgal1.jpeg", alt: "exterior 1"},
    { src: "../imageneshiace/extgal2.jpeg", alt: "exterior 2"},
    { src: "../imageneshiace/extgal3.jpeg", alt: "exterior 3"},
    { src: "../imageneshiace/extgal4.jpeg", alt: "exterior 4"},
    { src: "../imageneshiace/extgal5.jpeg", alt: "exterior 5"},
    { src: "../imageneshiace/extgal6.jpeg", alt: "exterior 6"}
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

