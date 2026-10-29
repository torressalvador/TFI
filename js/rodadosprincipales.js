// Funcion para las categorias de los rodados principales


function filtrarCategoria(categoriaId) {
    // Oculto todas las categorias
    let categorias = document.getElementsByClassName("categoria-contenido");
    for (let i=0; i < categorias.length; i++){
        categorias[i].classList.remove("active-cat");
    }

    // Quita la clase active de todos los botones de categoria
    let botones = document.getElementsByClassName("cat-btn");
    for (let i=0; i < botones.length; i++){
        botones[i].classList.remove("active");
    }

    // Mostrar categorioa seleccionada
    let elementoSeleccionado = document.getElementById(categoriaId);
    if (elementoSeleccionado) {
        elementoSeleccionado.classList.add("active-cat");
    }

    // Activar visualmente el botón al que se le hace click
    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active");
    }
}
