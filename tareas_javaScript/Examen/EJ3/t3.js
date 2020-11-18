function enviar() {
  let cadena = document.getElementById("texto").value;
  let datos = cadena.split("|", 3);

  let tipoProducto = datos[0];
  let modelo = datos[1];
  let todoJunto = datos[2].split("@", 2);
  let cantidad = todoJunto[0];
  let zona = todoJunto[1];

  document.getElementById("tipoProducto").innerHTML =
    "El tipo de producto es: " + tipoProducto;
  document.getElementById("modelo").innerHTML = "El modelo es: " + modelo;
  document.getElementById("cantidad").innerHTML = "La cantidad es: " + cantidad;
  document.getElementById("zona").innerHTML = "La zona es: " + zona;
}
