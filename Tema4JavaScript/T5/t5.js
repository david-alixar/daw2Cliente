window.onload = iniciar; //Sin paréntesis

function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
}

let fecha =
  "^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|[1][0-2])[/]([1-2][0-9][0-9][0-9])$";
let nombreCocinero = "^([A-Z]{2}W{1}d{4})$";
let destinatario = "^([A-Z]{2,3}[_]{1}[a-z]+[:]d{4})$";
let gramos = "^([1-9]{1}[0-9]{2}|[1-4]{1}[0-9]{3}|5000)$";
let composicion =
  "^d+[g](([A-Z]{1,2})|([A-Z]{1,2}d))(([A-Z]{1,2})|([A-Z]{1,2}d))$";

let formulario = document.getElementById("miFormulario");

function validaFecha() {
  let elemento = document.getElementById("fecha");
  limpiarError(elemento);
  if (
    /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|[1][0-2])[/]([1-2][0-9][0-9][0-9])$/.test(
      elemento.value
    )
  ) {
    alert("El formato de fecha es adecuado");
    return true;
  } else {
    error(elemento);
    alert("El formato de fecha es erróneo");
    alert(elemento.value);
    return false;
  }
}

function validaCocinero() {
  let elemento = document.getElementById("cocinero");
  limpiarError(elemento);
  if (/^([A-Z]{2}\W{1}\d{4})$/.test(elemento.value)) {
    alert("Formato correcto");
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
  if (/^([A-Z]{2,3}[_]{1}[a-z]+[:]\d{4})$/.test(elemento.value)) {
    alert("formato correcto");
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
  if (/^([1-9]{1}[0-9]{2}|[1-4]{1}[0-9]{3}|5000)$/.test(elemento.value)) {
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
  if (
    /^d+[g](([A-Z]{1,2})|([A-Z]{1,2}d))(([A-Z]{1,2})|([A-Z]{1,2}d))$/.test(
      elemento.value
    )
  ) {
    return true;
  } else {
    error(elemento);
    alert(
      "Error! Debe introducir la cantidad en gramos y dos conjuntos de una o dos letras seguidas o no de un número. (ej. 200gC3OH7)"
    );
    return true;
  }
}

function validar(e) {
  if (
    //validaFecha() &&
    validaCocinero() &&
    validaDestinatario() &&
    validaGramos() &&
    validaComposicion() &&
    validaLoc() &&
    confirm("Pulsar aceptar para enviar el formulario")
  ) {
    return true;
  } else {
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
