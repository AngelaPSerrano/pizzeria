var vSalsa = document.getElementById("vSalsa");
var selectSalsa = document.getElementById("selectSalsa");

function inicio() {
    //Establecer el tamaño del visor interactivo dependiendo del tamaño de la pantalla del usuario
    var anchoPantalla = document.documentElement.clientWidth;

    if (anchoPantalla < 950) {

        document.getElementById("visorInteractivo").style.marginLeft = (anchoPantalla - 290) / 2 + "px";
        document.getElementById("visorInteractivo").style.marginRight = (anchoPantalla - 290) / 2 + "px";

    } else {
        document.getElementById("visorInteractivo").style.marginLeft = 8 + "%";
        document.getElementById("visorInteractivo").style.marginLeft = 8 + "%";

    }
}
// Función resetear la selección
function reset() {
    var reset = confirm("¿Seguro que desea eliminar la pizza y volver a empezar?");
    if (reset === true) {
        for (i = 1; i <= 5; i++) {
            var ingrediente = document.getElementById("ingrediente" + i);

            if (ingrediente.name == "false") {

                ingrediente.src = "img\\capas\\none.png";
                ingrediente.name = "true";
                document.getElementById("cantidadiTomate").innerHTML = 0;
                document.getElementById("cantidadiTernera").innerHTML = 0;
                document.getElementById("cantidadiPollo").innerHTML = 0;
                document.getElementById("cantidadiChampis").innerHTML = 0;
                document.getElementById("cantidadiPimiento").innerHTML = 0;
                document.getElementById("cantidadiSalami").innerHTML = 0;
            }
        }
    }
}

//Función cambio de imagen de la salsa
function cambioSalsa() {
    vSalsa.src = "img\\capas\\" + selectSalsa.value + ".png";
}
//Función para definir el precio de la pizza
function cambiarPrecio(sumado) {

    var precio = parseFloat(document.getElementById("precioCreaPizza").innerText);
    if (sumado == true) {
        precio += 0.45;

    } else if (sumado == false) {
        precio -= 0.45;

    }
    document.getElementById("precioCreaPizza").innerText = precio.toFixed(2);
}

//Función añadir ingredientes. El argumento que se le pasa es el nombre del ingrediente
function añadirIngrediente(e) {
    for (i = 1; i <= 5; i++) {
        var ingrediente = document.getElementById("ingrediente" + i);
        var cantidad = parseInt(document.getElementById("cantidad" + e).innerHTML);
        var listaIngredientes = document.getElementById("ingredientesCreaPizza").innerText;
        var ingredienteAAnyadir = document.getElementById(e + "+1").value;

        if (ingrediente.name == "true" && cantidad !== 2) {

            ingrediente.src = "img\\capas\\" + e + ".png";
            ingrediente.name = "false";

            if (cantidad === 0) {
                cantidad = 1;
                cambiarPrecio(true);
                listaIngredientes = listaIngredientes + "," + ingredienteAAnyadir;
            } else if (cantidad === 1) {
                cantidad = 2;
                cambiarPrecio(true);
                listaIngredientes = listaIngredientes + ", más" + ingredienteAAnyadir;
            }
            document.getElementById("ingredientesCreaPizza").innerText = listaIngredientes;
            document.getElementById("cantidad" + e).innerHTML = cantidad;
            return;
        } else if (cantidad === 2) {
            alert("Solo puedes añadir dos veces el mismo producto.");
            return;
        }
    }
    alert("Límite de ingredientes alcanzado. Elimina un ingrediente.");
}

//Función quitar ingredientes. El argumento que se le pasa es el nombre del ingrediente
function quitarIngrediente(e) {

    for (i = 1; i <= 5; i++) {
        var ingrediente = document.getElementById("ingrediente" + i);
        var listaIngredientes = document.getElementById("ingredientesCreaPizza").innerText;
        var ingredienteAEliminar = document.getElementById(e + "-1").value;


        if (ingrediente.name == "false" && ingrediente.src.includes(e)) {

            ingrediente.src = "img\\capas\\none.png";
            ingrediente.name = "true";

            var cantidad = parseInt(document.getElementById("cantidad" + e).innerHTML);
            var arrayIngredientes = listaIngredientes.split(',');
            var nuevaListaIngredientes = '';

            for (var i = 0; i <= arrayIngredientes.length; i++) {
                console.log(arrayIngredientes[i], ingredienteAEliminar);
                if (cantidad == 2) {
                    if (arrayIngredientes[i] == (" más" + ingredienteAEliminar)) {
                        arrayIngredientes.splice(i, 1);

                    }
                } else if (cantidad == 1) {
                    if (arrayIngredientes[i] == ingredienteAEliminar) {
                        arrayIngredientes.splice(i, 1);

                    }
                }

            }
            nuevaListaIngredientes = arrayIngredientes.toString();

            document.getElementById("ingredientesCreaPizza").innerText = nuevaListaIngredientes;


            if (cantidad > 0) {
                cantidad--;
            }
            document.getElementById("cantidad" + e).innerHTML = cantidad;
            if (cantidad = 0) {
                document.getElementById("cantidad" + e).style.visibility = 'hidden';
            }


            cambiarPrecio(false);
            return;

        }
    }
}

/* Acordeon */
/*$(document).ready(function() {

    $(".flip").click(function() {
        $(".panel").slideDown(500);
    });

    $(".flip").click(function() {
        $(".panel").css("display", "none");
    })
});*/