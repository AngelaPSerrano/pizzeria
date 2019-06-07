<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pizzeria Verona</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script src="pedidos.js"></script>
</head>

<body onload="inicio()">
    <header>
        <div>
            <p>Pizzería</p>
            <h1>Verona</h1>
        </div>
    </header>

    <nav class="navbar">
        <a href="contacto.html">Contacto</a>
        <a href="conocenos.html">Conócenos</a>
        <a href="pedidos.html">Pedidos</a>
        <a href="inicio.html">Inicio</a>
    </nav>
    <?php
    
        $nombre = $_POST['nombreFormulario'];
        $direccion = $_POST['direccionFormulario'];
        $telefono = $_POST['telefonoFormulario'];
        $pago = $_POST['pagoFormulario'];
        $precio = $_POST['precioFinal'];

    ?>

    <section class="contenido">

        <article>
        <table id="tablaFinal" >
            <tr>
                <th>Nombre</th>
                <td><?php echo $nombre ?></td>
            </tr>
            <tr>
                <th>Dirección</th>
                <td><?php echo $direccion ?></td>
            </tr>
            <tr>
                <th>Teléfono</th>
                <td><?php echo $telefono ?></td>
            </tr>
            <tr>
                <th>Precio</th>
                <td><?php echo $precio ?> €</td>
            </tr>
        </table>

        <?php 
            if($pago == "efectivo"){
                echo "<h2>¡Recuerde tener listo el efectivo en el momento de la recepción del pedido!</h2>";
            }
        ?>

        <div>
            <h3>El pedido ha sido realizado.</h3>
            <p>Esperemos que disfrute de su compra. <br>El tiempo aproximado hasta que llegue a su casa es de <span id="crono">15</span> minutos</p>
            <p id="pagoFinal"></p>
        </div>
        </article>
    </section>

    <footer>
    <div class="footerContenido">
                <div class="textoFooter">© 2019 Pizzería Verona</div>
                <div class="iconosFooter">
                    <a href="https://facebook.com" target="_blank"><img src="img/inicio/icoFacebook.png" height="36px" width="36px"></a>
                    <a href="https://twitter.com" target="_blank"><img src="img/inicio/icoTwitter.png" height="36px" width="36px"></a>
                    <a href="https://instagram.com" target="_blank"><img src="img/inicio/icoInstagram.png" height="36px" width="36px"></a>
                </div>
            </div>
    </footer>
</body>

</html>