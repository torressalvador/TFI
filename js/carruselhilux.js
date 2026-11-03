const imagenesInterior = [
    { src: "../imageneshilux/intgaleria.png", alt: "Torpedo"},
    { src: "../imageneshilux/intgaleria2.png", alt: "Interior"},
    { src: "../imageneshilux/intgaleria3.png", alt: "tablero"},
    { src: "../imageneshilux/intgaleria4.png", alt: "torpedo srx4x4at"}
];

const imagenesExterior = [
    { src: "../imageneshilux/extgaleria1.png", alt: "exterior 1"},
    { src: "../imageneshilux/extgaleria2.png", alt: "exterior 2"}
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

