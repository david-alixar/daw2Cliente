let miArray = [
  4,
  0,
  3,
  4,
  7,
  3,
  5,
  8,
  1,
  8,
  8,
  0,
  2,
  3,
  1,
  2,
  5,
  7,
  3,
  2,
  5,
  1,
];

let indices = [];
let index = miArray.indexOf(3);
while (index != -1) {
  indices.push(index);
  index = miArray.indexOf(3, index + 1);
}

let arrayPares = [];
let arrayImpares = [];
for (let i = 0; i < miArray.length; i++) {
  let num = miArray[i];
  if (num % 2 == 0) {
    arrayPares.push(num);
  } else {
    arrayImpares.push(num);
  }
}

let arrayOrdenado = arrayPares.concat(arrayImpares);
let valores = [232, 56, 33, 876, 32, 985, 729, 36, 184];
let mayor = Math.max(...valores);
let miCumple = new Date(777168000000);

alert("El 3 se encuentra en la posición: " + indices);
alert("Array original " + arrayOrdenado.length);
alert("Array ordenado = " + arrayOrdenado);
alert("El mayor del array 'valores' es: " + mayor);
alert("Mi cumpleaños es: " + miCumple);
