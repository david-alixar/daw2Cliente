window.onload = iniciar; //Sin paréntesis

let contador = 0;

if (contador == 0) {
  if (leer_cookie() != null) {
    contador = leer_cookie();
  } else {
    set_cookie();
  }
}

function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
}

// Con el ^ indicamos que debe empezar así.
//Con esta expresión queremos que se introduzca un NIF y, para ello, hemos indicado que debe contener 8 dígitos, que indicamos con \d{8}.
//Que va seguido de un guión -
//Y que finalizará por una letra mayúscula que puede ir desde la A hasta la Z.
//Con el signo $ indicamos que es el fin de la expresión y que no puede contener nada fuera de lo que se encuentra en el grupo ().

let NIF = new RegExp(/^(\d{8}[-][A-Z])$/);

// Con el ^ indicamos que debe empezar así.
//Con esta expresión queremos que se introduzca un email y, para ello, hemos indicado que puede contener letras minúsculas de la a a la z y que debe estar como mínimo una vez, eso lo indicamos con el +.
//Por otra parte, deberá llevar el signo @, siguido de cualquier conjunto de letras minúsculas de la a a la z que como mínimo también debe aparecer una vez, y lo indicamos también con el +.
//Después de eso, se deberá escribir un punto . y , finalmente, encontraremos otro grupo de letras minúsculas de la a a la z que también debe aparecer al menos una vez.
//En definitiva, con el signo + indicamos que podemos que se pueden escribir tantas letras como necesitemos, en minúsculas.
//Con el signo $ indicamos que es el fin de la expresión y que no puede contener nada fuera de lo que se encuentra en el grupo ().

let email = new RegExp(/^([a-z]+[@][a-z]+[.][a-z]+)$/);

// Con esta expresión queremos que se introduzca una fecha
//Con el ^ indicamos que debe empezar así.
//En el primer grupo, encontramos 3 posibles opciones para indicar el día.
//La primera: que empiece por 0 y le siga cualquier número de 1 al 9.
//La segunda: que puede salir cualquier combinación con 1 o 2 más otro dígito que vaya del 0 al 9.
//Y la tercera: un número que empezará por 3 y puede ir acompañado de 0 o 1.
//Con [/|-] indicamos que debe aparecer uno de esos dos signos para separar.
//En el segundo grupo, el mes, encontramos 2 opciones.
//La primera: un número que empezará por 0 y que irá acompañado de cualquier número que vaya del 1 al 9.
//Y la segunda: un número que empezará por 1 y que irá acompañado de 0, 1 o 2. y luego uno de los separadores / o -
//Y en el tercer grupo, el año, encontamos lo siguiente: un primer número que será 1 o 2 y que va acomapañado de 3 dígitos más que pueden ir cada uno del 0 al 9.
//Con el signo $ indicamos que es el fin de la expresión y que no puede contener nada fuera de lo que se encuentra en el grupo ().

let fecha = new RegExp(
  /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|[1][0-2])[/]([1-2][0-9][0-9][0-9])$/
);

//Con el ^ indicamos que debe empezar así.
//Con esta expresión queremos indicar que debe introducir obligatoriamente 9 dígitos. Con \d indicamos que debe ser un dígitos y con {9} indicamos la cantidad de veces que debe aparecer,
//Con el signo $ indicamos que es el fin de la expresión y que no puede contener nada fuera de lo que se encuentra en el grupo ().

let telefono = new RegExp(/^(\d{9})$/);

//Con el ^ indicamos que debe empezar así.
//Con esta expresión queremos que se indique la hora con minutos.
//En primer lugar, para la hora, tenemos dos opciones que nos indica el |
//La primera nos dice que puedo tener un número de 0 al 1 acompañado de cualquier dígito que vaya del 0 al 9, de manera que tendremos como mínimo 00 y como máximo 19.
//Y la segunda opción nos dice que podemos tener una hora que empiece por 2 y que puede ir acompanada de un número que vaya del 0 al 3, de manera que tendremos como mínimo 20 y como máximo 23.
//Para separar la hora de los minutos de pide que se escriban dos puntos :
//Y en segundo lugar, para los minutos, hemos indicado que el primer dígito va del 0 al 5 y que puede ir acompañado de cualquier dígito del 0 a 9, de manera que tendremos como mínimo 00 y como máximo 59.
//Con el signo $ indicamos que es el fin de la expresión y que no puede contener nada fuera de lo que se encuentra en el grupo ().

let hora = new RegExp(/^((([0-1]\d)|(2[0-3]))[:][0-5]\d)$/);

let formulario = document.getElementById("formulario");

function mayus(cadena) {
  return cadena.toUpperCase();
}

function nomApe(elemento) {
  limpiarError(elemento);
  if (elemento.value === "") {
    document.getElementById("errores").innerHTML =
      "Error! El campo no puede estar vacío";
    error(elemento);
    return false;
  }
  return true;
}

function validaNombre() {
  let elemento = document.getElementById("nombre");
  return nomApe(elemento);
}

function validaApellido() {
  let elemento = document.getElementById("apellidos");
  return nomApe(elemento);
}

function validaEdad() {
  let elemento = document.getElementById("edad");
  limpiarError(elemento);
  if ((elemento.value > 0 && elemento.value < 105) || !isNaN(elemento.value)) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "Error! El campo edad debe ser numérico, y contener un valor entre 0 y 105";
    alert(elemento.edad);
    return false;
  }
}

function validaNIF() {
  let elemento = document.getElementById("nif");
  limpiarError(elemento);
  if (NIF.test(elemento.value)) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "Error! El formato del NIF debe ser: 12345678-A";
    return false;
  }
}

function validaEmail() {
  let elemento = document.getElementById("email");
  limpiarError(elemento);
  if (email.test(elemento.value)) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "Error! El formato del email debe ser: texto@texto.texto";
    return false;
  }
}

function validaProvincia() {
  let elemento = document.getElementById("provincia");
  limpiarError(elemento);
  if (elemento.value != 0) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "Error! Provincia no seleccionada";
    return false;
  }
}

function validaFecha() {
  let elemento = document.getElementById("fecha");
  limpiarError(elemento);
  if (fecha.test(elemento.value)) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "Error! Fecha en formato incorrecto. El formato debe ser: 00/00/0000";
    return false;
  }
}

function validaTelefono() {
  let elemento = document.getElementById("telefono");
  limpiarError(elemento);
  if (telefono.test(elemento.value)) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "Error! El teléfono tiene un formato incorrecto. El formato debe ser: 000000000";
    return false;
  }
}

function validaHora() {
  let elemento = document.getElementById("hora");
  limpiarError(elemento);
  if (hora.test(elemento.value)) {
    return true;
  } else {
    error(elemento);
    document.getElementById("errores").innerHTML =
      "Error! La hora tiene un formato incorrecto. El formato debe ser: 00:00, y la hora máxima 23:59";
    return false;
  }
}

function set_cookie() {
  let d = new Date();
  d.setTime(d.getTime() + 15 * 24 * 60 * 60 * 1000);
  expiracion = "expires=" + d.toUTCString();
  document.cookie = "intentos=" + contador + ";" + expiracion + ";path=/";
}

function leer_cookie() {
  let resultado = get_cookie("intentos");
  return resultado;
}

function validar(e) {
  if (
    validaNombre() &&
    validaApellido() &&
    validaEdad() &&
    validaNIF() &&
    validaEmail() &&
    validaProvincia() &&
    validaFecha() &&
    validaTelefono() &&
    validaHora() &&
    confirm("Pulsar aceptar para enviar el formulario")
  ) {
    contador++;
    set_cookie();
    document.getElementById("intentos").innerHTML =
      "Intento de Envíos del formulario: " + leer_cookie();
    return true;
  } else {
    contador++;
    set_cookie();
    document.getElementById("intentos").innerHTML =
      "Intento de Envíos del formulario: " + leer_cookie();
    e.preventDefault();
    return false;
  }
}

function error(elemento) {
  elemento.className = "error";
  elemento.focus();
}

function limpiarError(elemento) {
  elemento.className = "";
}

function get_cookie(nombre) {
  let nom = nombre + "=";
  let array = document.cookie.split(";");
  for (let i = 0; i < array.length; i++) {
    let c = array[i];
    console.log(c);
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(nom) == 0) {
      return c.substring(nom.length);
    }
  }
  return "";
}
