window.addEventListener("load", inicio);

function inicio() {
  document
    .getElementById("generaTabla")
    .addEventListener("click", generarTabla);
}

function generarTabla() {
  let body = document.getElementById("tabla");

  let tabla = document.createElement("table");

  let tblBody = document.createElement("tbody");

  let filas = document.getElementById("filas").value;
  let columnas = document.getElementById("columnas").value;

  for (let i = 0; i < filas; i++) {
    let fila = document.createElement("tr");

    for (let j = 0; j < columnas; j++) {
      let columna = document.createElement("td");
      let textoColumna = document.createTextNode(
        document.getElementById("valor").value
      );
      columna.appendChild(textoColumna);
      fila.appendChild(columna);
    }
    tblBody.appendChild(fila);
  }
  tabla.appendChild(tblBody);
  while (body.hasChildNodes()) {
    body.removeChild(body.firstChild);
  }
  body.appendChild(tabla);
  let grosor = document.getElementById("grosor").value;
  let color = document.getElementById("color").value;
  let borde = "black ";
  if (color == "rojo") {
    borde = "red ";
  } else if (color == "azul") {
    borde = "blue ";
  } else if (color == "verde") {
    borde = "green ";
  }
  borde += grosor + "px solid";

  tabla.style.border = borde;
}
