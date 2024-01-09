// cargar modal con id verInicio al recargar la pagina
window.onload = function () {
        $('#modalSobre').modal('show');
}

// funcion abrirSobre

function abrirSobre() {

        var sobreAriba = document.getElementById('sobreAriba');
        var sobreAbajo = document.getElementsByClassName('sobreAbajo')[0]; // Selecciona la primera imagen con la clase 'sobreAbajo'

        // Mover la imagen 'sobreAriba' hacia arriba
        sobreAriba.style.transform = 'translateY(-450px)'; // Cambiar la posición vertical - ajusta este valor según lo necesites

        // Mover la imagen 'sobreAbajo' hacia abajo
        sobreAbajo.style.transform = 'translateY(450px)'; // Cambiar la posición vertical - ajusta este valor según lo necesites

        // esperar la animación de las imágenes
        setTimeout(function () {
                $('#modalSobre').modal('hide');
        }, 2000); // Tiempo de espera en milisegundos - ajusta este valor según lo necesites
      
}
