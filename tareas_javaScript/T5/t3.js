//Ejercicio 3 tarea 5
//@author David González Conejero

//Declaro todas las variables

var num = 1;
var noPrimos = 0;

for (var i = num; i <= 500; i++) {
  if (num % 3 == 0) {
    console.log(num);
  }
  for (var j = 2; j < num; j++) {
    if (num % j == 0) {
      noPrimos++;
      break;
    }
  }
  num++;
}

console.log("La cantidad de números que no son primos es: " + noPrimos);
