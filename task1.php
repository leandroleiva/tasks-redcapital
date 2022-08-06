<?php
    /*
        Task 1:
        Dado un número, mostrar su serie de Fibonacci. (La serie de Fibonacci es un
        orden de números dónde cada número es la suma de los dos anteriores).
    */
    function mostrarFibonacci ($number) {
        $n1 = $n2 = 1;
        for ($i = 1; $i <= $number; $i++) {
            echo $n1.' ';
            $aux = $n1 + $n2;
            $n1 = $n2;
            $n2 = $aux;
        }
    }

    $x = 10;
    mostrarFibonacci($x);
?>