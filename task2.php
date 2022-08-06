<?php
    /*
    Task 2:
    Dada una cadena de texto, darle la vuelta a invertir el orden de sus caracteres,
    sin usar métodos propios del lenguaje, sólo estructuras de control. }
    */
    
    function invierteTexto ($texto){
        $invertido = '';
        for ($i = (strlen($texto)-1) ; $i >= 0 ; $i--) {
            $invertido .= $texto[$i];
        }
        return $invertido;
    }

    $texto = "Hola hola";
    echo invierteTexto($texto);
?>