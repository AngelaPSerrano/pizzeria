<?php
    define ("SERVIDOR", "localhost");
    define ("USUARIO", "root");
    define ("PASSWORD", "");
    define ("BBDD", "pizzeria");
    define ("PUERTO", 3307);
    
    $conn = mysqli_connect(SERVIDOR, USUARIO, PASSWORD, BBDD, PUERTO);

    if (mysqli_connect_errno()){
      echo "FALLO AL INTENTAR CONECTAR CON LA BASE DE DATOS: " . mysqli_connect_error();
      }else{
        echo "Éxito";
      }
?>