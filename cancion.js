let isPlaying = false;
let audio = document.getElementById("audio");

function toggleAudio() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.currentTime = 0; // Empieza en el segundo 41.5
        audio.play().catch(error => console.error("Error al reproducir audio:", error)); // Captura errores
    }
    isPlaying = !isPlaying;
}

// Detectar cuando la pestaña cambia de visibilidad
document.addEventListener('visibilitychange', function () {
    if (document.hidden) { // Si la pestaña está oculta
        audio.pause(); // Pausar el audio
        isPlaying = false; // Cambiar el estado a no reproducir
    } else if (!document.hidden && audio.paused) { // Si la pestaña se vuelve visible y el audio está pausado
        // Asegurarse de que solo se reproduzca si está pausado
        // No reanudar el audio automáticamente si ya está pausado
        if (isPlaying) {
            audio.play().catch(error => console.error("Error al reproducir audio:", error));
        }
    }
});
