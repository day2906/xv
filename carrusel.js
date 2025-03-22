let indice = 0;
const imagenes = document.querySelectorAll(".foto");

function cambiarImagen(direccion) {
    let imagenActual = imagenes[indice];

    // Agrega clase de salida a la imagen actual
    imagenActual.classList.add("saliendo");

    // Calcula la nueva imagen
    indice = (indice + direccion + imagenes.length) % imagenes.length;
    let nuevaImagen = imagenes[indice];

    // Agrega clase de entrada a la nueva imagen
    nuevaImagen.classList.add("entrando");

    setTimeout(() => {
        // Remueve clases antiguas después de la animación
        imagenActual.classList.remove("activo", "saliendo");
        nuevaImagen.classList.remove("entrando");
        nuevaImagen.classList.add("activo");
    }, 600);
}

// Cambio automático cada 4 segundos
setInterval(() => cambiarImagen(1), 4000);
