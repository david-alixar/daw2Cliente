//Ejercicio 2 Maths
//@author David González Conejero

// Declaro todas las variables

let pi = Math.PI;
let radio;
let diametro;
let perimetro;
let areaCirculo;
let areaEsfera;
let volumenEsfera;

radio = prompt("Introduzca un valor para el radio");
let radioCubo = Math.pow(radio, 3);
let radioCuadrado = Math.pow(radio, 2);
diametro = 2 * radio;
perimetro = pi * diametro;
areaCirculo = radioCuadrado * pi;
areaEsfera = radioCuadrado * pi * 4;
volumenEsfera = (4 / 3) * pi * radioCubo;

alert("El radio introducido es: " + radio + " cm");
alert("El diámetro es: " + diametro + " cm");
alert("El perímetro es: " + perimetro + " cm2");
alert("El área del círculo es: " + areaCirculo + " cm3");
alert("El área de la esfera es: " + areaEsfera + " cm3");
alert("El volumen de la esfera es: " + volumenEsfera + " cm3");
