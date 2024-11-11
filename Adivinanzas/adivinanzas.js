// Generamos un número secreto aleatorio entre 1 y 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Obtenemos los elementos del DOM que vamos a utilizar
const inputNumero = document.getElementById('numero-usuario');
const botonAdivinar = document.getElementById('btn-adivinar');
const resultado = document.getElementById('resultado');

// Función para validar y mostrar el resultado
function adivinarNumero() {
    // Obtenemos el número ingresado por el usuario
    const intento = parseInt(inputNumero.value);

    // Validamos que se haya ingresado un número
    if (isNaN(intento)) {
        resultado.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    // Comparamos el número ingresado con el número secreto
    if (intento === numeroSecreto) {
        resultado.textContent = "¡Felicidades! Adivinaste el número.";
    } else if (intento > numeroSecreto) {
        resultado.textContent = "El número secreto es menor.";
    } else {
        resultado.textContent = "El número secreto es mayor.";
    }

    // Limpiamos el input para el próximo intento
    inputNumero.value = '';
}

// Agregamos un event listener al botón para activar la función al hacer clic
botonAdivinar.addEventListener('click', adivinarNumero);