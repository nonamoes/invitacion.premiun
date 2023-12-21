// cargar modal con id verInicio al recargar la pagina
window.onload = function () {
        $('#modalSobre').modal('show');
}

// funcion abrirSobre
function abrirSobre() {
        // $('#sobreArriba').animate({
        //         top: '-1000px'
        // }, 1000, function () {
        //         $('#modalSobre').modal('hide');
        // });

        $('#modalSobre').modal('hide');
}
