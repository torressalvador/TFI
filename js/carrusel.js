const imagenesCarrusel = [
    { src: "./imagenescarrusel/carrusel1.jpg", alt: "Diapositivas de presentacion" },
    { src: "./imagenescarrusel/carrusel2.jpg", alt: "Diapositivas de presentacion" },
    { src: "./imagenescarrusel/carrusel3.jpeg", alt: "Diapositivas de presentacion" },
    { src: "./imagenescarrusel/carrusel4.jpeg", alt: "Diapositivas de presentacion" },
    { src: "./imagenescarrusel/carrusel5.jpeg", alt: "Diapositivas de presentacion" },
    { src: "./imagenescarrusel/carrusel6.jpg", alt: "Diapositivas de presentacion" },
    { src: "./imagenescarrusel/carrusel7.jpeg", alt: "Diapositivas de presentacion" },
    { src: "./imagenescarrusel/carrusel8.jpeg", alt: "Diapositivas de presentacion" },
    { src: "./imagenescarrusel/carrusel9.png", alt: "Diapositivas de presentacion" },
]

let slideIndex = 1;
let slideTimer = null; // Con esta variable controlo el movimiento automático

// Funcion para inicializar las diapositivas

function inicializarCarrusel() {
    const contendorSlides = document.getElementById("carrusel-slides-wrapper");
    const contendorPuntos = document.getElementById("carrusel-puntos-wrapper");

    let slidesHTML = "";
    let puntosHTML = "";

    imagenesCarrusel.forEach((item, index) => {
        let numeroSlide = index + 1;

        // Genero el HTML aplicando la ruta y el alt
        slidesHTML += `
            <div class="slide-fade">
                <img src="${item.src}" alt="${item.alt}" style="width: 100%;">
            </div>
        `;

        // Genera el punto indicador
        puntosHTML += `
        <span class="punto" onclick="currentSlide(${numeroSlide})"></span>
        `;
    });

    contendorSlides.innerHTML = slidesHTML;
    contendorPuntos.innerHTML = puntosHTML;

    // Inicio el carrusel al cargar la pagina
    showSlides(slideIndex);
    startAutoplay(); // arranca el movimiento automático
}


    // Controles de siguiente y anterior manuales
function cambiarSlide(direccion) {
    showSlides(slideIndex += direccion);
    resetAutoplay(); // reinicia el temporizador al hacer clic para que no salte de golpe
};

// Control de los indicadores (puntos)
function currentSlide(indice) {
    showSlides(slideIndex = indice);
    resetAutoplay();
};

// Funcion principal para mostrar las diapositivas
function showSlides(numero) {
    let i;
    let slides = document.getElementsByClassName("slide-fade");
    let puntos = document.getElementsByClassName("punto");

    // Si llega al final vuelve a la primera
    if (numero > slides.length) {
        slideIndex = 1;
    }

    // Si pasa de la primera hacia atrás, va a la ultima
    if (numero < 1) {
        slideIndex = slides.length;
    }

    // Oculta todas las imagenes
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Quita la clase active de todos los puntos
    for (i = 0; i < puntos.length; i++) {
        puntos[i].className = puntos[i].className.replace(" active", "");
    }

    // Muestra la imagen actual y activa su punto
    slides[slideIndex - 1].style.display = "block";
    if (puntos.length > 0) {
        puntos[slideIndex - 1].className += " active";
    }
}

// Funciones para el carrusel automático
function startAutoplay() {
    slideTimer = setInterval(function () {
        slideIndex++;
        showSlides(slideIndex);
    }, 4000); // Cambia la imagen automáticamente cada 4 segundos
}

function resetAutoplay() {
    clearInterval(slideTimer); // Detiene el contador actual
    startAutoplay();           // Lo vuelve a iniciar desde cero
}

// Ejecuta al cargar la página
window.onload = function() {
    inicializarCarrusel();
};


