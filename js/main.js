// Funcion on click para el menu responsivo.
// Utilizamos el menu_select para darle responsividad al menu
// Luego tomamos el id selectme para darle vida con el evento on click de JS
// Tomando nuestro ID options asociado a ul le indicamos si esta oculto o no y en base a eso le asignamos acciones
// Con el metodo show mostramos nuestro UL options y luego con el metodo removeClass lo subimos y ocultamos.
// Con addClass mostramos otra vez
$(document).ready(function () {
    $("#selectme").on("click", function () {
        if ($("ul#options").is(":hidden")) {
            $("ul#options").show();
            $("#arrow").removeClass("down");
            $("#arrow").addClass("up");
        } else {
            $("ul#options").hide();
            $("#arrow").removeClass("up");
            $("#arrow").addClass("down");
        }
    });

    $("#arrow").on("click", function () {
        if ($(this).hasClass("down")) {
            $("ul#options").show();
            $(this).removeClass("down");
            $(this).addClass("up");
        } else {
            $("ul#options").hide();
            $(this).removeClass("up");
            $(this).addClass("down");
        }
    });

    $("#options li a").on("click", function () {
        var value = $(this).text();
        $("#selectme").text(value);
        $("ul#options").hide();
    });
});

// AQUI COMIENZAN LOS ALERTS PARA EL BOTON DE ENVIAR DEL FORMULARIO
// Funcion para agregar alert de confirmacion al boton de enviar
let miBoton = document.getElementById("miBoton");
let mostrarTexto = document.getElementById('mostarTexto');

// miBoton.onclick = alertando;
//var mensaje = confirm("¿Deseas enviar formulario?");
//Detectamos si el usuario acepto el mensaje

    
    
//Ingresamos un mensaje a mostrar
function alertando() {
    var x;
    var r = confirm("¿Está seguro de enviar el formulario?");

    var r = confirm("¡Confirma!");
    if (r == true) {
        x = mostrarTexto.textContent ="Fomulario enviado";
        
    }
    else {
        x = mostrarTexto.textContent ="Fomulario no ha sido enviado";
    }
}