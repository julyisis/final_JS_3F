// slider
const btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right"),
    slider = document.querySelector("#slider"),
    sliderSection = document.querySelectorAll(".slider-section");

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

// Botones de navegación
btnLeft.addEventListener("click", () => moveToLeft());
btnRight.addEventListener("click", () => moveToRight());

// Movimiento automático
let autoSlider = setInterval(() => {
    moveToRight();
}, 5000);

// Detener el slider automático cuando el usuario hace clic en los botones
function stopAutoSlider() {
    clearInterval(autoSlider);
    autoSlider = setInterval(() => {
        moveToRight();
    }, 5000); // Reiniciar el intervalo
}

// Funciones de movimiento del slider
function moveToRight() {
    if (counter >= sliderSection.length - 1) {
        counter = 0;
        operacion = 0;
        slider.style.transition = "none";
    } else {
        counter++;
        operacion += widthImg;
        slider.style.transition = "transform 1.5s ease-in-out";
    }
    slider.style.transform = `translateX(-${operacion}%)`;
    stopAutoSlider();
}

function moveToLeft() {
    if (counter <= 0) {
        counter = sliderSection.length - 1;
        operacion = widthImg * counter;
        slider.style.transition = "none";
    } else {
        counter--;
        operacion -= widthImg;
        slider.style.transition = "transform 1.5s ease-in-out";
    }
    slider.style.transform = `translateX(-${operacion}%)`;
    stopAutoSlider();
}

// Validar formulario al enviar
function validarFormulario(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Validar todos los campos
    const esNombreValido = validarnombre();
    const esCorreoValido = validarCorreo();
    const esMensajeValido = validarMensaje();

    // Verificar si todos los campos son válidos
    if (esNombreValido && esCorreoValido && esMensajeValido) {
        mostrarExito("Formulario enviado correctamente.");
        limpiarFormulario(); // Limpia los campos
        return true;
    } else {
        mostrarExito(""); // Limpia mensaje de éxito si hay errores
        return false;
    }
}

// Validar campo de nombre
function validarnombre() {
    const nombre = document.getElementById("nombre");
    const errorNombre = document.getElementById("errorNombre");

    if (nombre.value.trim() === "") {
        mostrarError(errorNombre, nombre, "El nombre no puede estar vacío.");
        return false;
    } else {
        limpiarError(errorNombre, nombre);
        return true;
    }
}

// Validar campo de correo
function validarCorreo() {
    const correo = document.getElementById("correo");
    const errorCorreo = document.getElementById("errorCorreo");
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexCorreo.test(correo.value.trim())) {
        mostrarError(errorCorreo, correo, "El correo electrónico no es válido.");
        return false;
    } else {
        limpiarError(errorCorreo, correo);
        return true;
    }
}

// Validar campo de mensaje
function validarMensaje() {
    const mensaje = document.getElementById("mensaje");
    const errorMensaje = document.getElementById("errorMensaje");

    if (mensaje.value.trim().length < 10) {
        mostrarError(errorMensaje, mensaje, "El mensaje debe tener al menos 10 caracteres.");
        return false;
    } else {
        limpiarError(errorMensaje, mensaje);
        return true;
    }
}

// Mostrar mensaje de error
function mostrarError(mensajeError, campo, texto) {
    mensajeError.textContent = texto;
    campo.classList.add("invalido");
    campo.classList.remove("valido");
}

// Limpiar mensaje de error
function limpiarError(mensajeError, campo) {
    mensajeError.textContent = "";
    campo.classList.add("valido");
    campo.classList.remove("invalido");
}

// Mostrar mensaje de éxito
function mostrarExito(mensaje) {
    const exitoFormulario = document.getElementById("exitoFormulario");
    exitoFormulario.textContent = mensaje;
    if (mensaje) {
        exitoFormulario.classList.add("mensaje-exito");
    } else {
        exitoFormulario.classList.remove("mensaje-exito");
    }
}

// Limpiar el formulario después de enviarlo
function limpiarFormulario() {
    const formulario = document.getElementById("formularioRegistro");
    formulario.reset(); // Limpia los campos del formulario

    // Remover clases de validación
    document.querySelectorAll("input, textarea").forEach((input) => {
        input.classList.remove("valido");
        input.classList.remove("invalido");
    });

    document.querySelectorAll(".mensaje-error").forEach((mensaje) => {
        mensaje.textContent = "";
    });
}

