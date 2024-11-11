const inputTarea = document.getElementById("inputTarea");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");

// Array para almacenar las tareas
let tareas = [];

// Función para agregar una tarea
function agregarTarea(tarea) {
    if (tarea.trim() !== "") { //elimino espacios en blanco al principio y final y verifica si esta vacia la cadena de tecto
        tareas.push(tarea); // Agregar la tarea al array
        mostrarTareas(); // Actualizar la lista
    }
}

// Función para mostrar las tareas
function mostrarTareas() {
    listaTareas.innerHTML = ""; // Limpiar la lista antes de mostrar

    tareas.forEach((tarea, index) => {
        const item = document.createElement("li");
        item.textContent = `${index + 1}. ${tarea}`;
        item.classList.add("tarea-item"); // Añadir clase para estilos
        listaTareas.appendChild(item); // Agregar cada tarea como un elemento <li>
    });
}

// botón de agregar tarea
btnAgregar.addEventListener("click", () => {
    const tarea = inputTarea.value;
    agregarTarea(tarea);
    inputTarea.value = ""; // Limpiar el input después de agregar
});
