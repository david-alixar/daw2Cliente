let formulario = document.getElementById("miFormulario");

window.onload = iniciar; //Sin paréntesis

function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
}

function campo20(elemento) {
  limpiarError(elemento);
  if (elemento.value === "" || elemento.value.length !== 20) {
    console.log(document.getElementById(elemento.id).previousElementSibling);
    alert(
      "El campo " +
        document.getElementById(elemento.id).previousElementSibling.innerHTML +
        " no puede estar vacío y debe contener 20 caracteres"
    );
    error(elemento);
    return false;
  }
  return true;
}

function validaNombre() {
  let elemento = document.getElementById("nombre");
  return campo20(elemento);
}

function validaCantante() {
  let elemento = document.getElementById("cantante");
  return campo20(elemento);
}

function validaAno() {
  let elemento = document.getElementById("ano");
  limpiarError(elemento);
  if (elemento.value === "" || isNaN(elemento.value)) {
    alert("El campo año tiene que ser numérico y no puede estar vacío");
    error(elemento);
    return false;
  }
  return true;
}

function validaLoc() {
  let elemento = document.getElementById("loc");
  limpiarError(elemento);
  if (isNaN(elemento.value)) {
    alert("El campo localización tiene que ser numérico");
    error(elemento);
    return false;
  }
  return true;
}

function validar(e) {
  if (
    validaNombre() &&
    validaCantante() &&
    validaAno() &&
    validaLoc() &&
    confirm("Pulsa aceptar si deseas enviar el formulario")
  ) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

function error(elemento) {
  elemento.className = "error";
  elemento.previousElementSibling.className = "errorEtiqueta";
  elemento.focus();
}

function limpiarError(elemento) {
  elemento.className = "";
  elemento.previousElementSibling.className = "";
}
