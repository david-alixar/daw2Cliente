//Entregable 2 String
//@author David González Conejero

// Declaro las variables

let cadena = prompt(
  "Introduzca en este orden y sin espacios (excepto separar los apellidos): nombre:apellidos:telefono:email:codigopostal"
);

let datos = cadena.split(":", 5);

let codPostal = datos[4];
let apellidos = datos[1];
let email = datos[3];
let servidorEmail = email.split("@", 2);
let servidor = servidorEmail[1];

alert("El código postal es: " + codPostal);
alert("Los apellidos son: " + apellidos);
alert("El email es: " + email);
alert("El servidor de su email es: " + servidor);
