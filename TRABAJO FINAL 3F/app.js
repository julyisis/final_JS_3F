// Formulario de registro
document.getElementById("formularioRegistro").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Validar todos los campos
    const esNombreValido = validarNombre();
    const esCorreoValido = validarCorreo();
    const esContrasenaValida = validarContrasena();

    // Si todos los campos son válidos
    if (esNombreValido && esCorreoValido && esContrasenaValida) {
        document.getElementById("exitoFormulario").textContent = "Formulario enviado correctamente.";
        limpiarFormulario(); // Limpia los campos
    } else {
        document.getElementById("exitoFormulario").textContent = ""; // Limpia mensaje de éxito si hay errores
    }
});

// Validar campo de nombre
function validarNombre() {
    const nombre = document.getElementById("nombre");
    const errorNombre = document.getElementById("errorNombre");

    if (nombre.value.trim() === "") {
        errorNombre.textContent = "El nombre no puede estar vacío.";
        nombre.classList.add("invalido");
        nombre.classList.remove("valido");
        return false;
    } else {
        errorNombre.textContent = "";
        nombre.classList.add("valido");
        nombre.classList.remove("invalido");
        return true;
    }
}

// Validar campo de correo
function validarCorreo() {
    const correo = document.getElementById("correo");
    const errorCorreo = document.getElementById("errorCorreo");
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexCorreo.test(correo.value.trim())) {
        errorCorreo.textContent = "El correo electrónico no es válido.";
        correo.classList.add("invalido");
        correo.classList.remove("valido");
        return false;
    } else {
        errorCorreo.textContent = "";
        correo.classList.add("valido");
        correo.classList.remove("invalido");
        return true;
    }
}

// Validar campo de contraseña
function validarContrasena() {
    const contrasena = document.getElementById("contrasena");
    const errorContrasena = document.getElementById("errorContrasena");

    if (contrasena.value.trim().length < 8) {
        errorContrasena.textContent = "La contraseña debe tener al menos 8 caracteres.";
        contrasena.classList.add("invalido");
        contrasena.classList.remove("valido");
        return false;
    } else {
        errorContrasena.textContent = "";
        contrasena.classList.add("valido");
        contrasena.classList.remove("invalido");
        return true;
    }
}

// Limpia el formulario después de enviarlo
function limpiarFormulario() {
    const formulario = document.getElementById("formularioRegistro");
    formulario.reset(); // Limpia los campos del formulario

    // Remover clases y mensajes de error
    document.querySelectorAll("input").forEach((input) => {
        input.classList.remove("valido");
        input.classList.remove("invalido");
    });

    document.querySelectorAll(".mensaje-error").forEach((mensaje) => {
        mensaje.textContent = "";
    });
}

//----------------------------------------------------------------------------------------------------------------------------------

