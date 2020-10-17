//Ejercicio 1 Date
//@author David González Conejero

//Declaro todas las variables

let fechaActual = new Date();
let fechaFinCurso = new Date("Jun 24 2021");

let restante = fechaActual - fechaFinCurso;
let dias = Math.floor(restante / (1000 * 60 * 60 * 24));

alert("Para el día de fin de curso (24 de junio) quedan: " + dias + " días.");
