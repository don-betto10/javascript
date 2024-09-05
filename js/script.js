const seleccionarNombre = document.getElementById('nombre');
const seleccionarMensaje1 = document.getElementById('mensaje1');
const seleccionarMensaje2 = document.getElementById('mensaje2');

function validarInputNombre () {

    const valorInput = seleccionarNombre.value;

    if (valorInput === '') {
        seleccionarNombre.classList.add('invalido');
        seleccionarNombre.classList.remove('valido');
        seleccionarMensaje1.classList.add('d-block');
        seleccionarMensaje2.classList.remove('texto-verde');
    } else {
        seleccionarNombre.classList.add ('valido');
        seleccionarNombre.classList.remove('invalido');
        seleccionarMensaje1.classList.remove('d-block');
        seleccionarMensaje2.classList.add('texto-verde');
    }
}

validarInputNombre();

seleccionarNombre.addEventListener("input", validarInputNombre);