let imagenes = [
    "https://example.com/imagen1.jpg",
    "https://example.com/imagen2.jpg",
    "https://example.com/imagen3.jpg"
];

// Obtener el contenedor donde se mostrarán las imágenes
const contenedorImagenes = document.getElementById('contenedor-imagenes');

// Iterar sobre el array de imágenes y crear elementos <img>
imagenes.forEach((imagen, index) => {
    // Crear un nuevo elemento <img>
    const img = document.createElement('img');
    // Establecer el atributo src con la URL de la imagen
    img.src = imagen;
    // Agregar una clase para personalizar el estilo (opcional)
    img.classList.add('imagen-galeria');

    // Agregar el elemento <img> al contenedor
    contenedorImagenes.appendChild(img);
});