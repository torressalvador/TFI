const form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let valido = true;

    // expresiones regulares para la validacion final al presionar enviar
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const soloNumeros = /^[0-9]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // validacion para nombre y apellido
    const nombre = document.getElementById("nombre").value.trim();
    const errorNombre = document.getElementById("errorNombre");
    if (nombre === "") {
        errorNombre.textContent = "El nombre es obligatorio.";
        valido = false;
    } else if (nombre.length < 10 || nombre.length > 50) {
        errorNombre.textContent = "El nombre debe tener un mínimo de 10 y un máximo de 50 caracteres."
        valido = false;
    } else if (!soloLetras.test(nombre)){
        errorNombre.textContent = "El nombre solo debe contener letras.";
        valido = false;
    } else {
        errorNombre.textContent = "";
    }

    // validacion para seleccion de genero
    const genero = document.getElementById("genero").value;
    if (genero === "") {
        errorGenero.textContent =
            "Seleccione un género.";
        valido = false;
    } else {
        errorGenero.textContent = "";
    }

    //funcion de email
    const email = document.getElementById("email").value.trim();
    if (email === "") {
        errorEmail.textContent =
            "El email es obligatorio.";
        valido = false;
    } else if (!regexEmail.test(email)) {
        errorEmail.textContent = "Ingrese un formato de correo electrónico válido";
        valido = false;
    } else {
        errorEmail.textContent = "";
    }

    const telefono = document.getElementById("telefono").value.trim();
    const errorTelefono = document.getElementById("errorTelefono");
    if (telefono === "") {
        errorTelefono.textContent = "El teléfono es obligatorio.";
        valido = false;
    } else if (!soloNumeros.test(telefono)) {
        errorTelefono.textContent = "El teléfono solo debe contener números.";
        valido = false;
    } else {
        errorTelefono.textContent = "";
    }

    //fecha de nacimiento
    const nacimiento = document.getElementById("nacimiento").value;
    if (nacimiento) {
        const fechaNac = new Date(nacimiento);
        const hoy = new Date();
        const edad = hoy.getFullYear() - fechaNac.getFullYear();
        const mes = hoy.getMonth() - fechaNac.getMonth();
        const dia = hoy.getDate() - fechaNac.getDate();

        if (
            fechaNac > hoy ||
            edad > 125 ||
            (edad === 125 && (mes > 0 || (mes === 0 && dia > 0)))
        ) {
            document.getElementById("errorFecha").textContent =
                "Coloque una fecha valida.";
            valido = false;
        } else {
            document.getElementById("errorFecha").textContent = "";
        }
    } else {
        document.getElementById("errorFecha").textContent =
            "Seleccione su fecha de nacimiento.";
        valido = false;
    }


    if (valido) {
        const mensajeExito = document.getElementById("mensajeExito");

        // Muestra el mensaje dinamico
        mensajeExito.textContent = "Su formulario se envio correctamente.";
        mensajeExito.classList.remove("oculto");

        // Deshabilita el formulario y resetea los campos
        form.reset();

        //  Espera 2 segundos y recarga la pagina
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
});