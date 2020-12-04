window.onload = iniciar; //Sin paréntesis

function help() {
  alert(
    "Debe contener en este orden: el código de la oficina (2 mayúsculas y 2 dígitos), un guión, nº de cuenta (12 dígitos), un guión y los dígitos de control (2)"
  );
}

let contador = 0;
if (contador == 0) {
  if (leer_cookie() != null) {
    contador = leer_cookie();
  }
}

function resetErrores() {
  contador = 0;
  delete_cookie("errores");
  document.getElementById("cant_errores").value = contador;
}

document.getElementById("cant_errores").value = contador;
function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
}

let fecha = new RegExp(
  /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|[1][0-2])[/]([1-2][0-9][0-9][0-9])$/
);
let nombreCocinero = new RegExp(/^([A-Z]{2}\W{1}\d{4})$/);
let destinatario = new RegExp(/^([A-Z]{2,3}[_]{1}[a-z]+[:]\d{4})$/);
let gramos = new RegExp(/^([1-9]{1}[0-9]{2}|[1-4]{1}[0-9]{3}|5000)$/);
let composicion = new RegExp(/^(\d+[g]([A-Z]{1,2}\d{0,1}){2})$/);
let numCuenta = new RegExp(/^([A-Z]{2}\d{2}[-]\d{12}[-]\d{2})$/);

let letras = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let formulario = document.getElementById("miFormulario");

function validaFecha() {
  let elemento = document.getElementById("fecha");
  limpiarError(elemento);
  if (fecha.test(elemento.value)) {
    return true;
  } else {
    error(elemento);
    alert("El formato de fecha es erróneo");
    return false;
  }
}

function validaCocinero() {
  let elemento = document.getElementById("cocinero");
  limpiarError(elemento);
  if (nombreCocinero.test(elemento.value)) {
    return true;
  } else {
    error(elemento);
    alert(
      "Error! Deben ser dos letras en mayúscula, un  símbolo y cuatro dígitos (ej. WW$1234)"
    );
    return false;
  }
}

function validaDestinatario() {
  let elemento = document.getElementById("destinatario");
  limpiarError(elemento);
  if (destinatario.test(elemento.value)) {
    return true;
  } else {
    error(elemento);
    alert(
      "Error! Debe tener dos o tres letras mayúsculas correspondientes al estado, un guión bajo, el nombre de la ciudad en minúsculas, dos puntos, y el código de distrito de 4 digitos"
    );
    return false;
  }
}

function validaGramos() {
  let elemento = document.getElementById("gramos");
  limpiarError(elemento);
  if (gramos.test(elemento.value)) {
    return true;
  } else {
    error(elemento);
    alert("Error! Debe introducir un entero entre 100 y 5.000");
    return false;
  }
}

function validaComposicion() {
  let elemento = document.getElementById("composicion");
  limpiarError(elemento);
  if (composicion.test(elemento.value)) {
    return true;
  } else {
    error(elemento);
    alert(
      "Error! Debe introducir la cantidad en gramos y dos conjuntos de una o dos letras seguidas o no de un número. (ej. 200gC3OH7)"
    );
    return false;
  }
}

function validaNumCuenta() {
  let elemento = document.getElementById("numCuenta");
  limpiarError(elemento);
  let letra;
  let digito;
  if (numCuenta.test(elemento.value)) {
    letra = elemento.value.substring(0, 2);
    let letra1 = letras.indexOf(letra.charAt(0)) + 1;
    let letra2 = letras.indexOf(letra.charAt(1)) + 1;
    digito = elemento.value.substring(2, 4);
    let todo = elemento.value.split("-", 3);
    let doce = todo[1];
    let penultimo = todo[2].charAt(0);
    let ultimo = todo[2].charAt(1);
    let seisPrimeros = doce.substring(0, 6);
    let seisUltimos = doce.substring(6, 12);
    let result1 = 0;
    let result2 = 0;
    for (var i = 0; i < 6; i++) {
      result1 = result1 + parseInt(seisPrimeros.charAt(i));
      result2 = result2 + parseInt(seisUltimos.charAt(i));
    }
    result1 = parseInt(result1 / 6);
    result2 = parseInt(result2 / 6);
    if (
      letra1 + letra2 == digito &&
      result1 == penultimo &&
      result2 == ultimo
    ) {
      let final = "";
      for (var i = 0; i < todo.length; i++) {
        final += todo[i];
      }
      document.getElementById("numCuentaFinal").value = final;
      return true;
    } else {
      error(elemento);
      alert(
        "Error! Los primeros caracteres no suman o los últimos dígitos no coinciden"
      );
      return false;
    }
  } else {
    error(elemento);
    alert("Error! Formato de cuenta inválido");
    return false;
  }
}

function set_cookie() {
  let d = new Date();
  d.setTime(d.getTime() + 15 * 24 * 60 * 60 * 1000);
  expiracion = "expires=" + d.toUTCString();
  document.cookie = "errores=" + contador + ";" + expiracion + ";path=/";
}

function del_cookie(nombre, nada, tiempo) {
  let d = new Date();
  d.setTime(d.getTime() + tiempo * 24 * 60 * 60 * 1000);
  expiracion = "expires=" + d.toUTCString();
  document.cookie = "errores=" + contador + ";" + expiracion + ";path=/";
}

function leer_cookie() {
  let resultado = get_cookie("errores");
  return resultado;
}

function validar(e) {
  if (
    validaFecha() &&
    validaCocinero() &&
    validaDestinatario() &&
    validaGramos() &&
    validaComposicion() &&
    validaNumCuenta() &&
    confirm("Pulsar aceptar para enviar el formulario")
  ) {
    return true;
  } else {
    contador++;
    document.getElementById("cant_errores").value = contador;
    set_cookie();
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

function delete_cookie(nombre) {
  del_cookie(nombre, "", 0);
}
