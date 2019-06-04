var vSalsa = document.getElementById("vSalsa");
var selectSalsa = document.getElementById("selectSalsa");

function inicio() {
    //Establecer el tamaño del visor interactivo dependiendo del tamaño de la pantalla del usuario
    var anchoPantalla = document.documentElement.clientWidth;

    if (anchoPantalla < 950) {

        document.getElementById("vMasa").style.marginLeft = (anchoPantalla - 290) / 2 + "px";
        document.getElementById("vMasa").style.marginRight = (anchoPantalla - 290) / 2 + "px";
        document.getElementById("vSalsa").style.marginLeft = (anchoPantalla - 290) / 2 + "px";
        document.getElementById("vSalsa").style.marginRight = (anchoPantalla - 290) / 2 + "px";
        document.getElementById("vQueso").style.marginLeft = (anchoPantalla - 290) / 2 + "px";
        document.getElementById("vQueso").style.marginRight = (anchoPantalla - 290) / 2 + "px";
        document.getElementById("ingrediente1").style.marginLeft = (anchoPantalla - 290) / 2 + "px";
        document.getElementById("ingrediente1").style.marginRight = (anchoPantalla - 290) / 2 + "px";
        document.getElementById("ingrediente2").style.marginLeft = (anchoPantalla - 290) / 2 + "px";
        document.getElementById("ingrediente2").style.marginRight = (anchoPantalla - 290) / 2 + "px";
        document.getElementById("ingrediente3").style.marginLeft = (anchoPantalla - 290) / 2 + "px";
        document.getElementById("ingrediente3").style.marginRight = (anchoPantalla - 290) / 2 + "px";
        document.getElementById("ingrediente4").style.marginLeft = (anchoPantalla - 290) / 2 + "px";
        document.getElementById("ingrediente4").style.marginRight = (anchoPantalla - 290) / 2 + "px";
        document.getElementById("ingrediente5").style.marginLeft = (anchoPantalla - 290) / 2 + "px";
        document.getElementById("ingrediente5").style.marginRight = (anchoPantalla - 290) / 2 + "px";

    } else {
        document.getElementById("vMasa").style.marginLeft = 8 + "%";
        document.getElementById("vSalsa").style.marginLeft = 8 + "%";
        document.getElementById("vQueso").style.marginLeft = 8 + "%";
        document.getElementById("ingrediente1").style.marginLeft = 8 + "%";
        document.getElementById("ingrediente2").style.marginLeft = 8 + "%";
        document.getElementById("ingrediente3").style.marginLeft = 8 + "%";
        document.getElementById("ingrediente4").style.marginLeft = 8 + "%";
        document.getElementById("ingrediente5").style.marginLeft = 8 + "%";
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

//Función añadir ingredientes. El argumento que se le pasa es el nombre del ingrediente
function añadirIngrediente(e) {
    for (i = 1; i <= 5; i++) {
        var ingrediente = document.getElementById("ingrediente" + i);
        var cantidad = parseInt(document.getElementById("cantidad" + e).innerHTML);

        if (ingrediente.name == "true" && cantidad !== 2) {

            ingrediente.src = "img\\capas\\" + e + ".png";
            ingrediente.name = "false";

            if (cantidad === 0) {
                cantidad = 1;
            } else if (cantidad === 1) {
                cantidad = 2;
            } else if (cantidad === 2) {
                alert("Solo puedes añadir dos veces el mismo producto.");
                return;
            }

            document.getElementById("cantidad" + e).innerHTML = cantidad;
            return;
        }
    }
    alert("Límite de ingredientes alcanzado. Elimina un ingrediente.");
}

//Función quitar ingredientes. El argumento que se le pasa es el nombre del ingrediente
function quitarIngrediente(e) {

    for (i = 1; i <= 5; i++) {
        var ingrediente = document.getElementById("ingrediente" + i);


        if (ingrediente.name == "false" && ingrediente.src.includes(e)) {

            ingrediente.src = "img\\capas\\none.png";
            ingrediente.name = "true";

            var cantidad = parseInt(document.getElementById("cantidad" + e).innerHTML);

            if (cantidad > 0) {
                cantidad--;
            }

            document.getElementById("cantidad" + e).innerHTML = cantidad;
            if (cantidad = 0) {
                document.getElementById("cantidad" + e).style.visibility = 'hidden';
            }
            return;
        }
    }
}