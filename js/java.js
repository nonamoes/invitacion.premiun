// cargar modal con id verInicio al recargar la pagina
window.onload = function () {
        $('#modalSobre').modal('show');
}

// funcion abrirSobre
function abrirSobre() {
        var sobreAriba = document.getElementById('sobreAriba');
        var sobreAbajo = document.getElementById('sobreAbajo');
        sobreAriba.style.transform = 'translateY(-450px)';
        sobreAbajo.style.transform = 'translateY(450px)';
        setTimeout(function () {
                $('#modalSobre').modal('hide');
        }, 2000);

        // REPRODUCCION DE AUDIO
        var audio = document.getElementById("musicaMp3");
        audio.play();

}
function abrirSobreMobile() {
        var sobreDerecha = document.getElementById('sobreAribaMobil');
        var sobreIzquierda = document.getElementById('sobreAbajoMobil');
        sobreDerecha.style.transform = 'translateX(450px)';
        sobreIzquierda.style.transform = 'translateX(-450px)';

        setTimeout(function () {
                $('#modalSobre').modal('hide');
        }, 2000);

         // REPRODUCCION DE AUDIO
         var audio = document.getElementById("musicaMp3");
         audio.play();

}
