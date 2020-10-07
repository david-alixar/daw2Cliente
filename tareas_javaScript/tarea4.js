//Ejercicio 4 ventanas
//@author David González Conejero

//Declaro todas las variables

var respuesta = null;
var densidad;
var PI = 3.14;
var radio;
var altura;
var nombre;
var edad;

respuesta = prompt("¿Está seguro que desea hacer esto?");

if (respuesta != null) {
  alert("El usuario ha respondido: " + respuesta);
} else {
  alert("El usuario rehusa contestar");
}

densidad = prompt(
  "¿Qué densidad tiene el material elegido?\nPor ejemplo:\nHielo=0.92;Aluminio=2.7;Oro=19.3;Aceite de oliva=0.92"
);

if (densidad < 1) {
  alert("Flota en el agua");
} else {
  alert("Se hunde en el agua");
}

radio = prompt("Introduzca el radio de la circunferencia en cm.");
altura = prompt("Introduzca la altura en cm.");

alert("El volumen del cilindro es: " + PI * radio * radio * altura + " cm3");

nombre = prompt("Introduzca su nombre.");
edad = prompt("Introduzca su edad.");

if (edad >= 18) {
  alert(
    "Hola " +
      nombre +
      "\nUsted es mayor de edad y ha vivido: " +
      edad * 365 +
      " días."
  );
} else {
  alert(
    "Hola " +
      nombre +
      "\nUsted es menor de edad y ha vivido: " +
      edad * 365 +
      " días."
  );
}
