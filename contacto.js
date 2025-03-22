function enviarMensaje() {
    let numero = "5215545183938";
    let mensaje = encodeURIComponent("Hola, mi nombre es [NOMBRE], quiero confirmar mi asistencia a los XV de Valentina.");
    let url = `https://wa.me/${numero}?text=${mensaje}`;
    window.open(url, "_blank");
}