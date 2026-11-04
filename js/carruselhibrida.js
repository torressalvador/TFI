const imagenesInterior = [
    { src: "../imageneshibrida/intgal1.png", alt: "interior 1"},
    { src: "../imageneshibrida/intgal2.jpeg", alt: "interior 2"},
    { src: "../imageneshibrida/intgal3.png", alt: "interior 3"},
    { src: "../imageneshibrida/intgal4.jpeg", alt: "interior 4"},
    { src: "../imageneshibrida/intgal5.jpeg", alt: "interior 5"},
    { src: "../imageneshibrida/intgal6.jpeg", alt: "interior 6"},
    { src: "../imageneshibrida/intgal7.jpeg", alt: "interior 7"}
];

const imagenesExterior = [
    { src: "../imageneshibrida/extgal1.jpeg", alt: "exterior 1"},
    { src: "../imageneshibrida/extgal2.jpeg", alt: "exterior 2"},
    { src: "../imageneshibrida/extgal3.jpeg", alt: "exterior 3"},
    { src: "../imageneshibrida/extgal4.jpeg", alt: "exterior 4"},
    { src: "../imageneshibrida/extgal5.jpeg", alt: "exterior 5"},
    { src: "../imageneshibrida/extgal6.png", alt: "exterior 6"},
    { src: "../imageneshibrida/extgal7.jpeg", alt: "exterior 7"}
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

