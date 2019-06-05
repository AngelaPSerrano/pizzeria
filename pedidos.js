function actualizarPreciosCarrito() {
    totalP = personalizadaTotal + ibericaP + barbacoaP + mediterraneaP + yorkP +
        carbonaraP + hawaianaP + quesosP + vegetalP + estacionesP + cocacolaP + fnaranjaP + flimonP;
    totalP = totalP.toFixed(2);
    document.getElementById("precioTotal").innerHTML = ('Precio total: <strong>' + totalP + ' €</strong>');
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}