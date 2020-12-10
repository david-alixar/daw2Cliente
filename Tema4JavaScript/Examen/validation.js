//David González Conejero

window.onload = iniciar;

function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
}

function validaNombre() {
  let elemento = document.getElementById("nombre");
  if (elemento.value != "") {
    elemento.className = "acierto";
    return true;
  } else {
    elemento.className = "error";
    elemento.focus();
    document.getElementById("errores").innerHTML =
      "Error! El campo no puede estar vacío";
    return false;
  }
}

function validaModelo() {
  let elemento = document.getElementById("modelo");
  if (elemento.value != "0") {
    elemento.className = "acierto";
    return true;
  } else {
    elemento.className = "error";
    elemento.focus();
    document.getElementById("errores").innerHTML =
      "Error! Debe seleccionar un modelo";
    return false;
  }
}

function validaFecha() {
  let elemento = document.getElementById("fecha");
  //Primero tenemos el circunflejo, que indica que empieza la expresión regular
  //A continuación, se indica que tenemos que introducir números del 0 al 9, que es lo que hemos indicado en los corchetes
  //Esta primera parte debe repetirse dos veces, es decir, hay que introducir dos números seguidos
  //Después tenemos que poner un guión para separar los días de los meses
  //Ahora volvemos a hacer lo mismo que antes (validar dos veces números del 0 al 9) para los meses
  //Volvemos a poner un guión, para separar el mes del año
  //Esta parte debe repetirse 4 veces, es decir, tenemos que introducir 4 dígitos para el año
  //Por último cerramos con el dólar, que indica fin de la expresión y que no podemos escribir más nada detrás
  if (/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/.test(elemento.value)) {
    elemento.className = "acierto";
    return true;
  } else {
    console.log(elemento.value);
    elemento.className = "error";
    elemento.focus();
    document.getElementById("errores").innerHTML =
      "Error! El campo no tiene un formato válido";
    return false;
  }
}

function validaConsumo() {
  let elemento = document.getElementById("consumo");

  if (
    elemento.value === "A+++" ||
    elemento.value === "A++" ||
    elemento.value === "A+" ||
    elemento.value === "A" ||
    elemento.value === "B" ||
    elemento.value === "C" ||
    elemento.value === "D"
  ) {
    elemento.className = "acierto";
    return true;
  } else {
    elemento.className = "error";
    elemento.focus();
    document.getElementById("errores").innerHTML =
      "Error! El campo no tiene un formato válido";
    return false;
  }
}

function validaReferencia() {
  let elemento = document.getElementById("referencia");
  //Primero tenemos el circunflejo, que indica que empieza la expresión regular
  //A continuación tenemos dos letras de la A a la Z (mayúsculas)
  //Ahora tenemos que poner dos dígitos
  //Luego cualquier número comprendido entre el 300 y el 8000, ambos inclusives
  //Las letras A y F mayúsculas
  //Las letras x, y o z tanto en minúscula como en mayúsculas
  //Por último cerramos con el dólar, que indica fin de la expresión y que no podemos escribir más nada detrás
  if (
    /^([A-Z]{2})([0-9]{2})(F)(([3-9]{1}[0-9]{2})|([1-7{1}[0-9]{3})|(8000])(AF)([x-z]{1}|[X-Z]{1}))$/.test(
      elemento.valor
    )
  ) {
    elemento.className = "acierto";
    return true;
  } else {
    elemento.className = "error";
    elemento.focus();
    document.getElementById("errores").innerHTML =
      "Error! El campo no tiene un formato válido";
    return false;
  }
}

function validaPassword() {
  let elemento = document.getElementById("password");
  //Primero tenemos el circunflejo, que indica que empieza la expresión regular
  //Debe aparecer una almoadilla
  //A continuación cualquier letra de la a a la z dos veces
  //Ahora cualquier palabra de entre 8 y 16 caracteres
  //Un carácter que no sea alfanumérico ni ampersan
  //Alguno de esos tres números
  //Por último cerramos con el dólar, que indica fin de la expresión y que no podemos escribir más nada detrás
  if (/^([3-9]{1}[0-9]{2})|([1-7{1}[0-9]{3})|(8000])$/.test(elemento.valor)) {
    elemento.className = "acierto";
    return true;
  } else {
    elemento.className = "error";
    elemento.focus();
    document.getElementById("errores").innerHTML =
      "Error! El campo no tiene un formato válido";
    return false;
  }
}

function validar(e) {
  if (
    validaNombre() &&
    validaModelo() &&
    validaFecha() &&
    validaConsumo() &&
    validaReferencia() &&
    validaPassword() &&
    confirm("Pulsar aceptar para enviar el formulario")
  ) {
    e.preventDefault();
  } else {
    e.preventDefault();
  }
}
