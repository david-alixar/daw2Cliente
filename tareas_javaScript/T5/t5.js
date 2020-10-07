//Ejercicio 5 tarea 5
//@author David González Conejero

//Declaro todas las variables

var numero = prompt("Introduzca un número entre 2 y 10:");
var contador = 0;
var resultado = 0;

while (numero < 2 || numero > 10) {
  numero = prompt(
    "El número introducido no es correcto!\nDebe ser entre 2 y 10"
  );
}

console.log("Se mostrará la tabla de multiplicar del " + numero);

for (var i = 0; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + i * numero);
}

console.log("Se mostrará la tabla de sumar del " + numero);

while (contador <= 10) {
  resultado = parseInt(contador) + parseInt(numero);
  console.log(numero + " + " + contador + " = " + resultado);
  contador++;
}

contador = 0;
resultado = 0;

console.log("Se mostrará la tabla de dividir del " + numero);

do {
  resultado = numero / contador;
  console.log(numero + " / " + contador + " = " + resultado);
  contador++;
} while (contador <= 10);
