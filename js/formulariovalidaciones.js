const form = document.getElementById("formulario");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    let valido = true;

    // expresiones regulares
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const soloNumeros = /^[0-9]+$/;


    // funcion para nombre y apellido
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre.length < 10 || nombre.length > 50 || !soloLetras.test(nombre)) {
        document.getElementById("errorNombre").textContent =
            "El nombre debe tener un minimo de 10 caracteres.";
        valido = false;
    } else {
        document.getElementById("errorNombre").textContent = "";
    }

    // funcion para seleccion de genero
    const genero = document.getElementById("genero").value;
    if (genero === "") {
        document.getElementById("errorGenero").textContent =
            "Seleccione un género.";
        valido = false;
    } else {
        document.getElementById("errorGenero").textContent = "";
    }

    //funcion de email
    const email = document.getElementById("email").value.trim();
    if (email === "") {
        document.getElementById("errorEmail").textContent =
            "El email es obligatorio.";
        valido = false;
    } else {
        document.getElementById("errorEmail").textContent = "";
    }

    const telefono = document.getElementById("telefono").value.trim();
    if (telefono != "" && !soloNumeros.test(telefono)) {
        document.getElementById("errorTelefono").textContent = "Ingrese caracteres validos en este campo.";
        valido = false;
    } else {
        document.getElementById("errorTelefono").textContent = "";
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
        alert("Formulario enviado con exito");
        form.reset();
    }
});