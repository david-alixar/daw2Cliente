//Ejercicio 2 String
//@author David González Conejero

// Declaro las variables

function esMayuscula(letra) {
  return letrasMayus.includes(letra);
}

function esMinuscula(letra) {
  return letras.includes(letra);
}

function esNum(letra) {
  return numeros.includes(letra);
}

function esEsp(letra) {
  return especiales.includes(letra);
}

let letras = "abcdefghijklmnñopqrstuvwxyz";
let letrasMayus = letras.toLocaleUpperCase();
let numeros = "1234567890";
let especiales = "-_@#$%&";
let contrasena = prompt(
  "Introduzca una contraseña para verificar si cumple con los requisitos:"
);

let longitud = false;
let mayuscula = false;
let minuscula = false;
let numero = false;
let especial = false;

for (let i = 0; i < contrasena.length; i++) {
  let letraActual = contrasena.charAt(i);
  if (esMayuscula(letraActual)) {
    mayuscula = true;
  }

  if (esMinuscula(letraActual)) {
    minuscula = true;
  }

  if (esNum(letraActual)) {
    numero = true;
  }

  if (esEsp(letraActual)) {
    especial = true;
  }
}

if (contrasena.length >= 8 && contrasena.length <= 16) {
  longitud = true;
}

if (longitud & mayuscula & minuscula & numero & especial) {
  alert("La contraseña es segura");
} else {
  alert("La contraseña no es segura");
}
