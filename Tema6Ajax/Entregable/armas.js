window.addEventListener("load", inicio);

function inicio() {
  document.getElementById("cargaXML").addEventListener("click", cargaXML);
  document.getElementById("cargaFetch").addEventListener("click", cargaFetch);
}

var docJson;

function cargaXML() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      docJson = JSON.parse(xhr.responseText);
      cargarJson(docJson);
    }
  };
  xhr.open("GET", "listar_armas.php", true);
  xhr.send();
}

function cargaFetch() {
  fetch("listar_armas.php")
    .then((response) => response.json())
    .then((data) => {
      docJson = data;
      cargarJson(data);
    })
    .catch((err) => console.log(err));
}

function cargarJson(docJson) {
  let tabla =
    "<tr><th>Nombre</th><th>Imagen</th><th>Descripción</th><th>Bando</th></tr>";

  for (arma of docJson) {
    tabla += "<tr><td>";
    tabla += arma.nombre;
    tabla += "</td><td>";

    if (arma.imagen == "springfield.jpg") {
      tabla += innerHTML = '<img src="springfield.jpg" />';
    } else if (arma.imagen == "browning.jpg") {
      tabla += innerHTML = '<img src="browning.jpg" />';
    } else if (arma.imagen == "mp40.jpg") {
      tabla += innerHTML = '<img src="mp40.jpg" />';
    } else if (arma.imagen == "mg42.jpg") {
      tabla += innerHTML = '<img src="mg42.jpg" />';
    } else if (arma.imagen == "m1garand.jpg") {
      tabla += innerHTML = '<img src="m1garand.jpg" />';
    } else if (arma.imagen == "panzerschreck.jpg") {
      tabla += innerHTML = '<img src="panzerschreck.jpg" />';
    }

    tabla += "</td><td>";
    tabla += arma.descripcion;

    tabla += "</td><td>";
    if (arma.bando == 1) {
      tabla += innerHTML = "Aliados";
    } else if (arma.bando == 2) {
      tabla += innerHTML = "Eje";
    }

    tabla += "</td></tr>";
  }
  document.getElementById("demo").innerHTML = tabla;
}

const selectElement = document.querySelector(".tipo");

selectElement.addEventListener("change", (event) => {
  let tipo = document.getElementById("tipo").value;
  const resultado = document.querySelector("#demo");
  if (tipo == "aliado") {
    let tabla =
      "<tr><th>Nombre</th><th>Imagen</th><th>Descripción</th><th>Bando</th></tr>";

    for (arma of docJson) {
      if (arma.bando == 1) {
        tabla += "<tr><td>";
        tabla += arma.nombre;
        tabla += "</td><td>";

        if (arma.imagen == "springfield.jpg") {
          tabla += innerHTML = '<img src="springfield.jpg" />';
        } else if (arma.imagen == "browning.jpg") {
          tabla += innerHTML = '<img src="browning.jpg" />';
        } else if (arma.imagen == "mp40.jpg") {
          tabla += innerHTML = '<img src="mp40.jpg" />';
        } else if (arma.imagen == "mg42.jpg") {
          tabla += innerHTML = '<img src="mg42.jpg" />';
        } else if (arma.imagen == "m1garand.jpg") {
          tabla += innerHTML = '<img src="m1garand.jpg" />';
        } else if (arma.imagen == "panzerschreck.jpg") {
          tabla += innerHTML = '<img src="panzerschreck.jpg" />';
        }

        tabla += "</td><td>";
        tabla += arma.descripcion;

        tabla += "</td><td>";
        if (arma.bando == 1) {
          tabla += innerHTML = "Aliados";
        } else if (arma.bando == 2) {
          tabla += innerHTML = "Eje";
        }

        tabla += "</td></tr>";
      }
    }
    document.getElementById("demo").innerHTML = tabla;
  } else if (tipo == "eje") {
    let tabla =
      "<tr><th>Nombre</th><th>Imagen</th><th>Descripción</th><th>Bando</th></tr>";

    for (arma of docJson) {
      if (arma.bando == 2) {
        tabla += "<tr><td>";
        tabla += arma.nombre;
        tabla += "</td><td>";

        if (arma.imagen == "springfield.jpg") {
          tabla += innerHTML = '<img src="springfield.jpg" />';
        } else if (arma.imagen == "browning.jpg") {
          tabla += innerHTML = '<img src="browning.jpg" />';
        } else if (arma.imagen == "mp40.jpg") {
          tabla += innerHTML = '<img src="mp40.jpg" />';
        } else if (arma.imagen == "mg42.jpg") {
          tabla += innerHTML = '<img src="mg42.jpg" />';
        } else if (arma.imagen == "m1garand.jpg") {
          tabla += innerHTML = '<img src="m1garand.jpg" />';
        } else if (arma.imagen == "panzerschreck.jpg") {
          tabla += innerHTML = '<img src="panzerschreck.jpg" />';
        }

        tabla += "</td><td>";
        tabla += arma.descripcion;

        tabla += "</td><td>";
        if (arma.bando == 1) {
          tabla += innerHTML = "Aliados";
        } else if (arma.bando == 2) {
          tabla += innerHTML = "Eje";
        }

        tabla += "</td></tr>";
      }
    }
    document.getElementById("demo").innerHTML = tabla;
  }
});
