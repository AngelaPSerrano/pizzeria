/* Funciones para el formulario de recogida de datos */

//Abre el formulario
function openForm() {
    document.getElementById("myForm").style.display = "block";
    //setPrecioFinal();
}

//No se está utilizando
// Cierra el formulario
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//No se está utilizando
// Recoge el precio final con la intención de que luego se pase oculto en el formulario
function setPrecioFinal() {
    document.getElementById('precioFinal').value = document.getElementById('numeroPrecioTotal').innerHTML;
}
// Enlaza el botón con el enlace de la url indicada
function procedimientoFinal() {
    location.href = 'confirmarPedido.html';
}





/* Scripts anteriormente situado en pedidos.html */

function actualizarPreciosCarrito() {
    totalP = personalizada1P + ibericaP + barbacoaP + mediterraneaP + yorkP +
        carbonaraP + hawaianaP + quesosP + vegetalP + estacionesP + cocacolaP + fnaranjaP + flimonP;
    totalP = totalP.toFixed(2);
    document.getElementById("precioTotal").innerHTML = ('Precio total: <strong>' + totalP + ' €</strong>');
    return totalP;
}

var ibericaC, ibericaP = 0;
var barbacoaC, barbacoaP = 0;
var mediterraneaC, mediterraneaP = 0;
var yorkC, yorkP = 0;
var carbonaraC, carbonaraP = 0;
var hawaianaC, hawaianaP = 0;
var quesosC, quesosP = 0;
var vegetalC, vegetalP = 0;
var estacionesC, estacionesP = 0;
var personalizada1C, personalizada1P = 0;
var cocacolaC, cocacolaP = 0;
var fnaranjaC, fnaranjaP = 0;
var flimonC, flimonP = 0;
var totalP;


//Añadir al carro
function addPersonalizada() {
    document.getElementById("personalizada1Carro").style.display = "grid";
    document.getElementById("personalizada1").value = 1;
    document.getElementById("personalizada1Precio").innerHTML = (document.getElementById("precioCreaPizza").innerText + ' €');
    personalizada1P = parseFloat(document.getElementById("precioCreaPizza").innerText);
    personalizadaTotal = personalizada1P;
    actualizarPreciosCarrito();
    return personalizada1P;
    return personalizadaTotal;
}

function addIberica() {
    document.getElementById("ibericaCarro").style.display = "grid";
    document.getElementById("iberica").value = 1;
    document.getElementById("ibericaPrecio").innerHTML = (9.99 + ' €');
    ibericaP = 9.99;
    actualizarPreciosCarrito();
}

function addBarbacoa() {
    document.getElementById("barbacoaCarro").style.display = "grid";
    document.getElementById("barbacoa").value = 1;
    document.getElementById("barbacoaPrecio").innerHTML = (9.99 + ' €');
    barbacoaP = 9.99;
    actualizarPreciosCarrito();
}

function addMediterranea() {
    document.getElementById("mediterraneaCarro").style.display = "grid";
    document.getElementById("mediterranea").value = 1;
    document.getElementById("mediterraneaPrecio").innerHTML = (9.99 + ' €');
    mediterraneaP = 9.99;
    actualizarPreciosCarrito();
}

function addYork() {
    document.getElementById("yorkCarro").style.display = "grid";
    document.getElementById("york").value = 1;
    document.getElementById("yorkPrecio").innerHTML = (11.99 + ' €');
    yorkP = 11.99;
    actualizarPreciosCarrito();
}

function addCarbonara() {
    document.getElementById("carbonaraCarro").style.display = "grid";
    document.getElementById("carbonara").value = 1;
    document.getElementById("carbonaraPrecio").innerHTML = (11.99 + ' €');
    carbonaraP = 11.99;
    actualizarPreciosCarrito();
}

function addHawaiana() {
    document.getElementById("hawaianaCarro").style.display = "grid";
    document.getElementById("hawaiana").value = 1;
    document.getElementById("hawaianaPrecio").innerHTML = (11.99 + ' €');
    hawaianaP = 11.99;
    actualizarPreciosCarrito();
}

function add4quesos() {
    document.getElementById("4quesosCarro").style.display = "grid";
    document.getElementById("4quesos").value = 1;
    document.getElementById("4quesosPrecio").innerHTML = (11.99 + ' €');
    quesosP = 11.99;
    actualizarPreciosCarrito();
}

function addVegetal() {
    document.getElementById("vegetalCarro").style.display = "grid";
    document.getElementById("vegetal").value = 1;
    document.getElementById("vegetalPrecio").innerHTML = (11.99 + ' €');
    vegetalP = 11.99;
    actualizarPreciosCarrito();
}

function add4estaciones() {
    document.getElementById("4estacionesCarro").style.display = "grid";
    document.getElementById("4estaciones").value = 1;
    document.getElementById("4estacionesPrecio").innerHTML = (11.99 + ' €');
    estacionesP = 11.99;
    actualizarPreciosCarrito();
}

function addCocacola() {
    document.getElementById("cocacolaCarro").style.display = "grid";
    document.getElementById("cocacola").value = 1;
    document.getElementById("cocacolaPrecio").innerHTML = (1.49 + ' €');
    cocacolaP = 1.49;
    actualizarPreciosCarrito();
}

function addFnaranja() {
    document.getElementById("fnaranjaCarro").style.display = "grid";
    document.getElementById("fnaranja").value = 1;
    document.getElementById("fnaranjaPrecio").innerHTML = (1.49 + ' €');
    fnaranjaP = 1.49;
    actualizarPreciosCarrito();
}

function addFlimon() {
    document.getElementById("flimonCarro").style.display = "grid";
    document.getElementById("flimon").value = 1;
    document.getElementById("flimonPrecio").innerHTML = (1.49 + ' €');
    flimonP = 1.49;
    actualizarPreciosCarrito();
}

//Eliminar del carro
function eliminarPersonalizada1() {
    document.getElementById("personalizada1Carro").style.display = "none";
    personalizadaTotal = 0;
    actualizarPreciosCarrito();
}

function eliminarIberica() {
    document.getElementById("ibericaCarro").style.display = "none";
    ibericaP = 0;
    actualizarPreciosCarrito();
}

function eliminarBarbacoa() {
    document.getElementById("barbacoaCarro").style.display = "none";
    barbacoaP = 0;
    actualizarPreciosCarrito();
}

function eliminarMediterranea() {
    document.getElementById("mediterraneaCarro").style.display = "none";
    mediterraneaP = 0;
    actualizarPreciosCarrito();
}

function eliminarYork() {
    document.getElementById("yorkCarro").style.display = "none";
    yorkP = 0;
    actualizarPreciosCarrito();
}

function eliminarCarbonara() {
    document.getElementById("carbonaraCarro").style.display = "none";
    carbonaraP = 0;
    actualizarPreciosCarrito();
}

function eliminarHawaiana() {
    document.getElementById("hawaianaCarro").style.display = "none";
    hawaianaP = 0;
    actualizarPreciosCarrito();
}

function eliminar4quesos() {
    document.getElementById("4quesosCarro").style.display = "none";
    quesosP = 0;
    actualizarPreciosCarrito();
}

function eliminarVegetal() {
    document.getElementById("vegetalCarro").style.display = "none";
    vegetalP = 0;
    actualizarPreciosCarrito();
}

function eliminar4estaciones() {
    document.getElementById("4estacionesCarro").style.display = "none";
    estacionesP = 0;
    actualizarPreciosCarrito();
}

function eliminarCocacola() {
    document.getElementById("cocacolaCarro").style.display = "none";
    cocacolaP = 0;
    actualizarPreciosCarrito();
}

function eliminarFnaranja() {
    document.getElementById("fnaranjaCarro").style.display = "none";
    fnaranjaP = 0;
    actualizarPreciosCarrito();
}

function eliminarFlimon() {
    document.getElementById("flimonCarro").style.display = "none";
    flimonP = 0;
    actualizarPreciosCarrito();
}

//Cambiar cantidad
function personalizada1Carrito() {
    personalizada1C = (document.getElementById('personalizada1').value);
    personalizadaTotal = personalizada1C * personalizada1P;
    personalizadaFixed = personalizadaTotal.toFixed(2);
    document.getElementById("personalizada1Precio").innerHTML = (personalizadaFixed + ' €');
    document.getElementById("personalizada1Carro").style.display = "grid";
    actualizarPreciosCarrito();
    return personalizadaTotal;
}

function ibericaCarrito() {
    ibericaC = (document.getElementById('iberica').value);
    ibericaP = ibericaC * 9.99;
    document.getElementById("ibericaPrecio").innerHTML = (ibericaP + ' €');
    document.getElementById("ibericaCarro").style.display = "grid";
    actualizarPreciosCarrito();
    return ibericaP;
}

function barbacoaCarrito() {
    barbacoaC = (document.getElementById('barbacoa').value);
    barbacoaP = barbacoaC * 9.99;
    document.getElementById("barbacoaPrecio").innerHTML = (barbacoaP + ' €');
    document.getElementById("barbacoaCarro").style.display = "grid";
    actualizarPreciosCarrito();
    return barbacoaP;
}

function mediterraneaCarrito() {
    mediterraneaC = (document.getElementById('mediterranea').value);
    mediterraneaP = mediterraneaC * 9.99;
    document.getElementById("mediterraneaPrecio").innerHTML = (mediterraneaP + ' €');
    document.getElementById("mediterraneaCarro").style.display = "grid";
    actualizarPreciosCarrito();
    return mediterraneaP;
}

function yorkCarrito() {
    yorkC = (document.getElementById('york').value);
    yorkP = yorkC * 11.99;
    document.getElementById("yorkPrecio").innerHTML = (yorkP + ' €');
    document.getElementById("yorkCarro").style.display = "grid";
    actualizarPreciosCarrito();
    return yorkP;
}

function carbonaraCarrito() {
    carbonaraC = (document.getElementById('carbonara').value);
    carbonaraP = carbonaraC * 11.99;
    document.getElementById("carbonaraPrecio").innerHTML = (carbonaraP + ' €');
    document.getElementById("carbonaraCarro").style.display = "grid";
    actualizarPreciosCarrito();
    return carbonaraP;
}

function hawaianaCarrito() {
    hawaianaC = (document.getElementById('hawaiana').value);
    hawaianaP = hawaianaC * 11.99;
    document.getElementById("hawaianaPrecio").innerHTML = (hawaianaP + ' €');
    document.getElementById("hawaianaCarro").style.display = "grid";
    actualizarPreciosCarrito();
    return hawaianaP;
}

function quesosCarrito() {
    quesosC = (document.getElementById('4quesos').value);
    quesosP = quesosC * 11.99;
    document.getElementById("4quesosPrecio").innerHTML = (quesosP + ' €');
    document.getElementById("4quesosCarro").style.display = "grid";
    actualizarPreciosCarrito();
    return quesosP;
}

function vegetalCarrito() {
    vegetalC = (document.getElementById('vegetal').value);
    vegetalP = vegetalC * 11.99;
    document.getElementById("vegetalPrecio").innerHTML = (vegetalP + ' €');
    document.getElementById("vegetalCarro").style.display = "grid";
    actualizarPreciosCarrito();
    return vegetalP;
}

function estacionesCarrito() {
    estacionesC = (document.getElementById('4estaciones').value);
    estacionesP = estacionesC * 11.99;
    document.getElementById("4estacionesPrecio").innerHTML = (estacionesP + ' €');
    document.getElementById("4estacionesCarro").style.display = "grid";
    actualizarPreciosCarrito();
    return estacionesP;
}

function cocacolaCarrito() {
    cocacolaC = (document.getElementById('cocacola').value);
    cocacolaP = cocacolaC * 1.49;
    document.getElementById("cocacolaPrecio").innerHTML = (cocacolaP + ' €');
    document.getElementById("cocacolaCarro").style.display = "grid";
    actualizarPreciosCarrito();
    return cocacolaP;
}

function fnaranjaCarrito() {
    fnaranjaC = (document.getElementById('fnaranja').value);
    fnaranjaP = fnaranjaC * 1.49;
    document.getElementById("fnaranjaPrecio").innerHTML = (fnaranjaP + ' €');
    document.getElementById("fnaranjaCarro").style.display = "grid";
    actualizarPreciosCarrito();
    return fnaranjaP;
}

function flimonCarrito() {
    flimonC = document.getElementById('flimon').value;
    flimonP = flimonC * 1.49;
    document.getElementById("flimonPrecio").innerHTML = (flimonP + ' €');
    document.getElementById("flimonCarro").style.display = "grid";
    actualizarPreciosCarrito();
    return flimonP;
}