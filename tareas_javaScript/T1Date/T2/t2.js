//Ejercicio 2 Date
//@author David González Conejero

//Declaro todas las variables

let mes = prompt("Introduzca el mes (en número) de su cumpleaños:");
mes = mes - 1;
let dia = prompt("Ahora introduzca el día (en número) de su cumpleaños:");
let fecha = new Date();
fecha.setMonth(mes);
fecha.setDate(dia);
let contador = 0;
let anho = 2020;

//alert(fecha.getFullYear());

while (fecha.getFullYear() != 2100) {
  if (fecha.getDay() == 0) {
    contador++;
  }
  anho++;
  fecha.setFullYear(anho);
}

alert("Desde ahora, su cumpleaños caerá en domingo " + contador + " veces");
