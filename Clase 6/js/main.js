// Modelo básico de eventos.
function cambiaFondo(color) {
    var body = document.getElementsByTagName('body')[0];
    body.style.background = color;
}

// Modelo de eventos estándar.
var btnCambioLetra = document.getElementById('btnCambioLetra');

btnCambioLetra.addEventListener('click', function() {
    var body = document.getElementsByTagName('body')[0];
    body.style.color = '#fff';
});