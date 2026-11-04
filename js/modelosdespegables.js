function toggleModelos(idPanel, tarjeta){
    const panelSeleccionado = document.getElementById(idPanel);
    const estaAbierto = panelSeleccionado.classList.contains('activo');

    // Ocultar todos los paneles que esten abiertos
    const todosLosPaneles = document.querySelectorAll('.panel-modelos-desplegable');
    todosLosPaneles.forEach(panel => {
        panel.classList.remove('activo');
    });

    // Quitar marcas activas de las tarjetas
    const todasLasTarjetas = document.querySelectorAll('.vehiculo-card');
    todasLasTarjetas.forEach(card => {
        card.classList.remove('card-activa');
    });

    // Si la tarjeta no estaba activa, la activamos, se muestra el panel y hace un scroll
    if (!estaAbierto) {
        tarjeta.classList.add('card-activa');
        panelSeleccionado.classList.add('activo');

        // Mueve la vista hacia el panel desplegado
        setTimeout(() => {
            panelSeleccionado.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            })
        }, 150);
    }
}