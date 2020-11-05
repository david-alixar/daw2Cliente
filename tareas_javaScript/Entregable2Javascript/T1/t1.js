//Entregable 1 Arrays
//@author David González Conejero

// Declaro las variables

let bingo = [];

bingo[0] = [];
bingo[1] = [];
bingo[2] = [];

let min = 1;
let max = 100;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function rellenarCarton() {
  for (let i = 0; i < bingo.length; i++) {
    while (bingo[i].length < 5) {
      let num = getRandomInt(min, max);
      bingo[i].push(num);
    }
  }
}

let numeros = [];

function sacarNumeroNuevo() {
  let numeroNuevo = getRandomInt(min, max);
  while (numeros.includes(numeroNuevo)) {
    numeroNuevo = getRandomInt(min, max);
  }
  numeros.push(numeroNuevo);
  document.getElementById("p").innerHTML = numeroNuevo;
}

function compruebaLinea() {
  let comprobacion = false;
  if (
    bingo[0].includes(numeros) ||
    bingo[1].includes(numeros) ||
    bingo[2].includes(numeros)
  ) {
    comprobacion = true;
  }
  return comprobacion;
}

function comenzar() {
  rellenarCarton();
  if (compruebaLinea()) {
    alert("Línea!");
  }
}

//document.getElementById("p").innerHTML = numeros;
