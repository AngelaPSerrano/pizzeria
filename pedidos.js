function actualizarPreciosCarrito() {
    totalP = personalizada1P + ibericaP + barbacoaP + mediterraneaP + yorkP +
        carbonaraP + hawaianaP + quesosP + vegetalP + estacionesP + cocacolaP + fnaranjaP + flimonP;
    totalP = totalP.toFixed(2);
    document.getElementById("precioTotal").innerHTML = ('Precio total: <strong>' + totalP + ' €</strong>');
}