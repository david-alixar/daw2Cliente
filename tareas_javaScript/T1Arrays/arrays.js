//Ejercicio 1 Arrays
//@author David González Conejero

function mostrarPaises(paises) {
  document.getElementById("h1").innerHTML = "Listado de países:";
  document.getElementById("p").innerHTML = paises.toString();
}

function mostrarPaisesInversa(paises) {
  let paisesInvertidos = paises.slice();
  paisesInvertidos.reverse();
  document.getElementById("h1").innerHTML = "Listado de países a la inversa:";
  document.getElementById("p").innerHTML = paisesInvertidos.toString();
}

function mostrarPaisesOrdenados(paises) {
  let paisesOrdenados = paises.slice();
  paisesOrdenados.sort();
  document.getElementById("h1").innerHTML =
    "Listado de países ordenados alfabéticamente:";
  document.getElementById("p").innerHTML = paisesOrdenados.toString();
}

function anadirPaisPrincipio(paises) {
  let nuevoPais = prompt("Introduzca el nombre del país que desea añadir:");
  paises.unshift(nuevoPais);
  document.getElementById("h1").innerHTML = "Añadir país al principio";
  document.getElementById("p").innerHTML =
    nuevoPais + " añadido al principio con éxito!";
}

function anadirPaisFinal(paises) {
  let nuevoPais = prompt("Introduzca el nombre del país que desea añadir:");
  paises.push(nuevoPais);
  document.getElementById("h1").innerHTML = "Añadir país al final";
  document.getElementById("p").innerHTML =
    nuevoPais + " añadido al final con éxito!";
}

function borrarPaisPrincipio(paises) {
  let nuevoPais = paises[0];
  paises.shift(nuevoPais);
  document.getElementById("h1").innerHTML = "Eliminar el país del principio";
  document.getElementById("p").innerHTML = nuevoPais + " eliminado con éxito!";
}

function borrarPaisFinal(paises) {
  let nuevoPais = paises[paises.length - 1];
  paises.pop(nuevoPais);
  document.getElementById("h1").innerHTML = "Eliminar el país del final";
  document.getElementById("p").innerHTML = nuevoPais + " eliminado con éxito!";
}

function muestraPosicion(paises) {
  let pais = prompt(
    "Indique el elemento del que desea consultar la posición (Ej: Ucrania):"
  );
  let posicion = paises.indexOf(pais);
  if (posicion == -1) {
    document.getElementById("h1").innerHTML = "Consultar posición por país";
    document.getElementById("p").innerHTML = "País no encontrado";
    alert("País no encontrado");
  } else {
    document.getElementById("h1").innerHTML = "Consultar posición por país";
    document.getElementById("p").innerHTML =
      pais + " se encuentra en la posición: " + posicion;
  }
}

function muestraNombre(paises) {
  let posicion = prompt(
    "Indique la posición de donde desea conocer el elemento, tenga en cuenta que empieza por 0 (Ej: 2):"
  );
  if (posicion >= 0 && posicion < paises.length) {
    let pais = paises[posicion];
    document.getElementById("h1").innerHTML = "Consultar país por posición";
    document.getElementById("p").innerHTML =
      "En la posición " + posicion + " se encuentra el país: " + pais;
  } else {
    alert(
      "La posición indicada no es correcta. Debe estar entre 0 y longitud (de paises) - 1. Redireccionando al menú principal..."
    );
  }
}

function mostrarNumPaises(paises) {
  let numPaises = paises.length;
  document.getElementById("h1").innerHTML = "Número de países";
  document.getElementById("p").innerHTML = "Cantidad de países: " + numPaises;
}

function mostrarListadoPaises(paises) {
  let modo = prompt(
    "Elija 1 para ver los países en el orden original, 2 para verlos del revés o 3 para verlos ordenados alfabéticamente:"
  );
  if (modo == 1) {
    mostrarPaises(paises);
  } else if (modo == 2) {
    mostrarPaisesInversa(paises);
  } else if (modo == 3) {
    mostrarPaisesOrdenados(paises);
  } else {
    alert("Opción no válida! Redireccionando al menú principal...");
  }
}

function anadirPais(paises) {
  let modo = prompt(
    "Elija 1 para añadir el país al principio, 2 para añadirlo al final:"
  );
  if (modo == 1) {
    anadirPaisPrincipio(paises);
  } else if (modo == 2) {
    anadirPaisFinal(paises);
  } else {
    alert("Opción no válida! Redireccionando al menú principal...");
  }
}

function borrarPais(paises) {
  let modo = prompt(
    "Elija 1 para eliminar el país del principio, 2 para eliminar el del final:"
  );
  if (modo == 1) {
    borrarPaisPrincipio(paises);
  } else if (modo == 2) {
    borrarPaisFinal(paises);
  } else {
    alert("Opción no válida! Redireccionando al menú principal...");
  }
}

function intervaloPaises(paises) {
  let inicio = prompt(
    "Introduzca el inicio del intervalo, teniendo en cuenta que empieza en 0. Ej: 2"
  );
  let final = prompt(
    "Introduzca el final del intervalo, teniendo en cuenta que empieza en 0. Ej: 4"
  );
  if (
    inicio >= 0 &&
    inicio < paises.length &&
    final >= 0 &&
    final < paises.length
  ) {
    let seleccion = paises.slice(inicio, final);
    document.getElementById("h1").innerHTML = "Selección de países";
    document.getElementById("p").innerHTML =
      "Los países seleccionados son:\n" + seleccion;
  } else {
    alert(
      "Los valores introducidos no son correctos. Deben estar entre 0 y longitud - 1 (del número de países)"
    );
  }
}

function consultarPais(paises) {
  let modo = prompt(
    "Elija 1 para consultar el país por posición, 2 para consultarlo por nombre:"
  );
  if (modo == 1) {
    muestraNombre(paises);
  } else if (modo == 2) {
    muestraPosicion(paises);
  } else {
    alert("Opción no válida! Redireccionando al menú principal...");
  }
}
