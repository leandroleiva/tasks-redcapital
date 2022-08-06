<?php
    /*
    Task 3:
    Escriba una función que permita multiplicar dos números sin utilizar el signo
    de multiplicación.
    */

    function multiplicar ($x,$y) {
        $producto = 0;
        for ($i = 0; $i < $y; $i++) {
            $producto += $x;
        }
        return $producto;
    }

    $x = 5;
    $y = 10;
    $producto = multiplicar($x,$y);
    echo $x." x ".$y." = ".$producto;
?>