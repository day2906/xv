function actualizarContador() {
    const fechaBoda = new Date('may 03, 2025 17:00:00').getTime();

    function calcularTiempo() {
        const ahora = new Date().getTime();
        const diferencia = fechaBoda - ahora;

        if (diferencia <= 0) {
            document.getElementById("countdown").innerHTML = "<span>¡Es el gran día!</span>";
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `
            <div class="countdown-item">
                <div class="countdown-box">${dias}</div>
                <span class="label">Días</span>
            </div>
            <div class="countdown-item">
                <div class="countdown-box">${horas}</div>
                <span class="label">Horas</span>
            </div>
            <div class="countdown-item">
                <div class="countdown-box">${minutos}</div>
                <span class="label">Min</span>
            </div>
            <div class="countdown-item">
                <div class="countdown-box">${segundos}</div>
                <span class="label">Seg</span>
            </div>
        `;
    }

    setInterval(calcularTiempo, 1000);
}

document.addEventListener("DOMContentLoaded", actualizarContador);