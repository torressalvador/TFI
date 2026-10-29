function filtrarVersion(versionId) {
    //  Ocultar todas las versiones
    let versiones = document.getElementsByClassName("categoria-contenido");
    for (let i = 0; i < versiones.length; i++) {
        versiones[i].classList.remove("active-cat");
    }

    //  Quitar la clase active de todos los botones de versión
    let botones = document.getElementsByClassName("cat-btn");
    for (let i = 0; i < botones.length; i++) {
        botones[i].classList.remove("active");
    }

    //  Mostrar la versión con el ID que coincida
    let elementoSeleccionado = document.getElementById(versionId);
    if (elementoSeleccionado) {
        elementoSeleccionado.classList.add("active-cat");
    }

    // Activar visualmente el boton al que se le hizo clic
    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active");
    }
}