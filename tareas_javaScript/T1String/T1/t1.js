//Ejercicio 1 String
//@author David González Conejero

// Declaro las variables

let nomApell = prompt(
  "Introduzca su nombre y apellidos (si es compuesto solo un nombre):"
);

let cant = nomApell.split(" ", 5);
if (cant.length == 3) {
  alert(
    "La longitud de su nombre y apellidos (sin contar espacios) es: " +
      (nomApell.length - 2)
  );
} else if (cant.length == 2) {
  alert(
    "La longitud de su nombre y apellidos (sin contar espacios) es: " +
      (nomApell.length - 1)
  );
} else if (cant.length == 1) {
  alert(
    "La longitud de su nombre y apellidos (sin contar espacios) es: " +
      nomApell.length
  );
} else {
  nomApell = prompt(
    "Ha introducido un nombre no válido. Introduzca un máximo de UN nombre y DOS apellidos:"
  );
}

alert("Su nombre y apellidos en mayúsculas es: " + nomApell.toUpperCase());
alert("Su nombre y apellidos en minúsculas es: " + nomApell.toLowerCase());

let nombre = cant[0];
let apellido1 = cant[1];
let apellido2 = " ";
if (cant[2] != undefined) {
  apellido2 = cant[2];
}

alert(
  "Nombre: " +
    nombre +
    "\nApellido1: " +
    apellido1 +
    "\nApellido2: " +
    apellido2
);

let propuesta1 = nombre.substring(0, 1) + apellido1 + apellido2.substring(0, 1);
let propuesta2 =
  nombre.substring(0, 3) +
  apellido1.substring(0, 3) +
  apellido2.substring(0, 3);

alert("Propuesta 1 de nombre de usuario: " + propuesta1);
alert("Propuesta 2 de nombre de usuario: " + propuesta2);
