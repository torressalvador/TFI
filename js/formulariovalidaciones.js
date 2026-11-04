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
    } else if (!soloLetras.test(nombre)) {
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

    // validacion de telefono

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
        mensajeExito.textContent = "Su formulario se envió correctamente. Resumen de datos:";
        mensajeExito.classList.remove("oculto");

        // Se elimina resumen anterior si existe alguno para que no se duplique
        let resumenAnterior = document.getElementById("resumenEnvio");
        if (resumenAnterior) {
            resumenAnterior.remove();
        }

        // Se crea el resumen de datos 
        const contenedorResumen = document.createElement("div");
        contenedorResumen.id = "resumenEnvio";
        contenedorResumen.style.marginTop = "15px";
        contenedorResumen.style.padding = "15px";
        contenedorResumen.style.backgroundColor = "#fff";
        contenedorResumen.style.border = "1px solid #ccc";
        contenedorResumen.style.borderRadius = "4px";
        contenedorResumen.style.color = "#333";
        contenedorResumen.style.textAlign = "left";

        // Se crea los elementos internos con la información ingresada
        const tituloResumen = document.createElement("h4");
        tituloResumen.textContent = "Datos registrados:";
        tituloResumen.style.marginBottom = "8px";
        contenedorResumen.appendChild(tituloResumen);

        const datos = [
            `Nombre y Apellido: ${nombre}`,
            `Género: ${genero}`,
            `Email: ${email}`,
            `Teléfono: ${telefono}`,
            `Fecha de Nacimiento: ${nacimiento}`,
            `Mensaje: ${document.getElementById("mensaje").value.trim() || "Sin mensaje"}`
        ];

        datos.forEach(item => {
            const parrafo = document.createElement("p");
            parrafo.textContent = item;
            parrafo.style.margin = "4px 0";
            contenedorResumen.appendChild(parrafo);
        });

        // Se inserta el resumen creado debajo del mensaje de exito
        mensajeExito.appendChild(contenedorResumen);

        // Se resetea el formulario para que quede listo para un nuevo envio
        form.reset();
    }
});
