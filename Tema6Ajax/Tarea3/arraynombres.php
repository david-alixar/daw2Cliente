<?php
//Array de nombres
$a = array(
    "Abraham", "Claudia", "Javier", "Jorge", "Marco", "Rocio", "Pedro",
    "Antonio", "Cesar", "Juan", "David G.", "Juanjo", "Cristian", "Juanma", "Salvador", "Carlos M.",
    "Fany", "Jose Manuel", "Carlos P.", "David R.", "Adrian"
);

//Tomamos el valor del input procedente de la URL
$nombre = $_REQUEST["nombre"];
$sugerencia = "";

if ($nombre !== "") {
    $nombre = strtolower($nombre); //Pasamos el nombre a minúsculas
    $long = strlen($nombre);

    foreach ($a as $nom) { //Cada elemento del array lo pasa a $nom en cada iteración
        if (stristr($nombre, substr($nom, 0, $long))) { //Si coincide la cadena pasada con los primeros caracteres de algún elemento del array
            if ($sugerencia === "") { //Si no hay texto en sugerencia
                $sugerencia = $nom;
            } else {
                $sugerencia = "$sugerencia, $nom";
            }
        }
    }
}
/*if ($sugerencia === "") echo "No hay sugerencias";
else echo $sugerencia;*/
echo ($sugerencia === "") ? "No hay sugerencias" : $sugerencia;