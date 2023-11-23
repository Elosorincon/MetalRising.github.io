   


   document.addEventListener('DOMContentLoaded', function() {
        console.log("Script cargado");

        var enlaceInicio = document.getElementById('enlaceInicio');

        enlaceInicio.addEventListener('click', function() {
            // Abre una nueva ventana o pestaña con el contenido deseado
            window.location.href = 'Pagina-Inicio.html';
        });
    });