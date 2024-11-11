let pantalla = document.getElementById("pantalla");
let operacion = null;
let primerNumero = "";
let segundoNumero = "";
let resetearPantalla = false;
let puntoDecimalAgregado = false;

// Funciones de las operaciones
function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { return b !== 0 ? a / b : "Error"; }

// Función para actualizar la pantalla
function actualizarPantalla(valor) {
    pantalla.textContent = valor;
}

// Función para manejar el ingreso de números y el punto decimal
function agregarNumero(numero) {
    if (resetearPantalla) {
        pantalla.textContent = "";
        resetearPantalla = false;
        puntoDecimalAgregado = false;
    }
    
    if (numero === "." && puntoDecimalAgregado) return;
    if (numero === ".") puntoDecimalAgregado = true;
    
    pantalla.textContent += numero;
}

// Manejo de eventos para los botones numéricos
document.querySelectorAll(".numero").forEach(boton => {
    boton.addEventListener("click", () => agregarNumero(boton.textContent));
});

// Función para seleccionar la operación
function seleccionarOperacion(op) {
    primerNumero = pantalla.textContent;
    operacion = op;
    resetearPantalla = true;
    puntoDecimalAgregado = false;
}

// Manejo de eventos para los botones de operación
document.querySelectorAll(".operador").forEach(boton => {
    boton.addEventListener("click", () => seleccionarOperacion(boton.dataset.operacion));
});

// Función para ejecutar la operación seleccionada
function ejecutarOperacion() {
    if (!operacion || !primerNumero) return;
    
    segundoNumero = pantalla.textContent;
    let resultado;

    switch (operacion) {
        case "sumar":
            resultado = sumar(parseFloat(primerNumero), parseFloat(segundoNumero));
            break;
        case "restar":
            resultado = restar(parseFloat(primerNumero), parseFloat(segundoNumero));
            break;
        case "multiplicar":
            resultado = multiplicar(parseFloat(primerNumero), parseFloat(segundoNumero));
            break;
        case "dividir":
            resultado = dividir(parseFloat(primerNumero), parseFloat(segundoNumero));
            break;
    }

    actualizarPantalla(resultado);
    primerNumero = resultado;
    segundoNumero = "";
    operacion = null;
    resetearPantalla = true;
    puntoDecimalAgregado = false;
}

// Botón de igual
document.getElementById("btnIgual").addEventListener("click", ejecutarOperacion);

// Botón de limpiar (C)
document.getElementById("btnLimpiar").addEventListener("click", () => {
    primerNumero = "";
    segundoNumero = "";
    operacion = null;
    actualizarPantalla("");
    puntoDecimalAgregado = false;
});

// Botón de borrar un solo dígito
document.getElementById("btnBorrar").addEventListener("click", () => {
    pantalla.textContent = pantalla.textContent.slice(0, -1);
    if (pantalla.textContent === "") {
        pantalla.textContent = "0";
        resetearPantalla = true;
    }
});

// Ingreso de teclado
document.addEventListener("keydown", (event) => {
    const key = event.key;
    
    if (!isNaN(key)) { // Si es un número
        agregarNumero(key);
    } else if (key === ".") { // Si es un punto decimal
        agregarNumero(".");
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        // Mapear el operador a la función correspondiente
        let operacionMap = { "+": "sumar", "-": "restar", "*": "multiplicar", "/": "dividir" };
        seleccionarOperacion(operacionMap[key]);
    } else if (key === "Enter" || key === "=") {
        ejecutarOperacion(); // Ejecutar la operación con "Enter" o "="
    } else if (key === "Backspace") {
        // Borrar un solo dígito con "Backspace"
        pantalla.textContent = pantalla.textContent.slice(0, -1);
        if (pantalla.textContent === "") pantalla.textContent = "0";
    } else if (key === "Escape") {
        // Limpiar todo con "Escape"
        primerNumero = "";
        segundoNumero = "";
        operacion = null;
        actualizarPantalla("");
        puntoDecimalAgregado = false;
    }
});
