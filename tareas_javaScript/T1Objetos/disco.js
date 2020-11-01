function Disco() {
  this.nombre = "";
  this.cantante = "";
  this.anho = "";
  this.tipo = "";
  this.localizacion = 0;
  this.prestado = false;
  this.incluir5Propiedades = function incluir5Propiedades(
    nom,
    cant,
    an,
    tip,
    loc
  ) {
    let tipos = ["rock", "pop", "punk", "indie"];
    this.nombre = nom;
    this.cantante = cant;
    this.anho = an;
    if (tipos.includes(tip)) {
      this.tipo = tip;
    }
    this.localizacion = loc;
  };
  this.cambiarLocalizacion = function cambiarLocalizacion(loc) {
    this.localizacion = loc;
  };
  this.cambiarEstado = function cambiarEstado(valor) {
    this.prestado = valor;
  };
  this.mostrarInformacion = function mostrarInformacion() {
    let disco =
      "Nombre del disco: " +
      this.nombre +
      ", cantante o grupo: " +
      this.cantante +
      ", año: " +
      this.anho +
      ", tipo: " +
      this.tipo +
      ", localización: " +
      this.localizacion +
      ", prestado: " +
      this.prestado;
    return disco;
  };
}

function compare(a, b) {
  if (a.cantante > b.cantante) {
    return 1;
  }
  if (a.cantante < b.cantante) {
    return -1;
  }

  return 0;
}

let discos = [];
let disco1 = new Disco();
disco1.incluir5Propiedades("Más", "Alejandro Sanz", "1997", "pop", 0);
discos.push(disco1);
let disco2 = new Disco();
disco2.incluir5Propiedades(
  "Appetite for destruction",
  "Guns n'Roses",
  "1987",
  "rock",
  0
);
discos.push(disco2);
let disco3 = new Disco();
disco3.incluir5Propiedades("Hotel California", "Eagles", "1976", "rock", 27);
discos.push(disco3);
let disco4 = new Disco();
disco4.incluir5Propiedades("Revolución de amor", "Maná", "2002", "rock", 56);
discos.push(disco4);
let disco5 = new Disco();
disco5.incluir5Propiedades("Bulería", "David Bisbal", "2004", "pop", 12);
discos.push(disco5);
let disco6 = new Disco();
disco6.incluir5Propiedades("Copacabana", "IZAL", "2015", "indie", 40);
discos.push(disco6);

function mostrarDiscos() {
  let opcion = prompt(
    "Introduzca 1 si desea ver los discos en el orden original, 2 para verlos en orden inverso o 3 para verlos ordenados alfabéticamente (en función del cantante o grupo)"
  );
  if (opcion == 1) {
    let resumenDiscos = "";
    document.getElementById("h2").innerHTML = "Mostrar discos disponibles";
    for (i = 0; i < discos.length; i++) {
      let numdisco = i + 1;
      resumenDiscos +=
        "<br/>Disco " + numdisco + ": " + discos[i].mostrarInformacion();
    }
    document.getElementById("p").innerHTML = resumenDiscos;
  } else if (opcion == 2) {
    let discosInvertidos = discos.slice();
    discosInvertidos = discosInvertidos.reverse();
    let resumenDiscos = "";
    document.getElementById("h2").innerHTML = "Mostrar discos disponibles";
    for (i = 0; i < discosInvertidos.length; i++) {
      let numdisco = i + 1;
      resumenDiscos +=
        "<br/>Disco " +
        numdisco +
        ": " +
        discosInvertidos[i].mostrarInformacion();
    }
    document.getElementById("p").innerHTML = resumenDiscos;
  } else if (opcion == 3) {
    let discosOrdenados = discos.slice();
    discosOrdenados = discosOrdenados.sort(compare);
    let resumenDiscos = "";
    document.getElementById("h2").innerHTML = "Mostrar discos disponibles";
    for (i = 0; i < discosOrdenados.length; i++) {
      let numdisco = i + 1;
      resumenDiscos +=
        "<br/>Disco " +
        numdisco +
        ": " +
        discosOrdenados[i].mostrarInformacion();
    }
    document.getElementById("p").innerHTML = resumenDiscos;
  } else {
    alert("Opción no válida!");
  }
}

function mostrarNumeroDiscos() {
  let numdiscos = discos.length;
  document.getElementById("h2").innerHTML = "Mostrar discos disponibles";
  document.getElementById("p").innerHTML = numdiscos;
}

function mostrarIntervalo() {
  let inicio = prompt(
    "Introduzca un valor inicial para el intérvalo, teniendo en cuenta que el primero está en el 0:"
  );
  let final = prompt(
    "Introduzca un valor final para el intérvalo, teniendo en cuenta que empieza en 0:"
  );
  if (
    inicio >= 0 &&
    inicio < discos.length &&
    final > 0 &&
    final <= discos.length
  ) {
    let discosIntervalo = discos.slice(inicio, final);
    let resumenDiscos = "";
    for (i = 0; i < discosIntervalo.length; i++) {
      let numdisco = i + 1;
      resumenDiscos +=
        "<br/>Disco " +
        numdisco +
        ": " +
        discosIntervalo[i].mostrarInformacion();
    }
    document.getElementById("h2").innerHTML =
      "Mostrar los discos del intérvalo especificado";
    document.getElementById("p").innerHTML = resumenDiscos;
  } else {
    alert(
      "Los valores introducidos no son válidos. Rango de valores: entre 0 y " +
        discos.length
    );
  }
}
function anadirDisco() {
  let posicion = prompt(
    "Introduzca 1 para introducir el nuevo disco al principio o 2 para introducirlo al final:"
  );
  if (posicion == 1 || posicion == 2) {
    let discoNuevo = new Disco();
    let nombre = prompt("Introduzca el nombre del disco:");
    let cantante = prompt("Introduzca el nombre del cantante o del grupo:");
    let ano = prompt("Introduzca el año del disco:");
    let tipo = prompt("Introduzca el tipo (rock, pop, punk o indie):");
    let loc = prompt("Introduzca la localización en la estantería:");
    discoNuevo.incluir5Propiedades(nombre, cantante, ano, tipo, loc);
    if (posicion == 1) {
      discos.unshift(discoNuevo);
      document.getElementById("h2").innerHTML =
        "Introducir nuevo disco al principio";
      document.getElementById("p").innerHTML =
        "Nuevo disco introducido:" + "<br />" + discoNuevo.mostrarInformacion();
    } else {
      discos.push(discoNuevo);
      document.getElementById("h2").innerHTML =
        "Introducir nuevo disco al final";
      document.getElementById("p").innerHTML =
        "Nuevo disco introducido:" + "<br />" + discoNuevo.mostrarInformacion();
    }
  } else {
    alert("Posición no válida!");
  }
}

function borrarDisco() {
  let posicion = prompt(
    "Introduzca 1 para eliminar el disco del principio o 2 para eliminar el del final:"
  );
  if (posicion == 1) {
    let eliminado = discos.shift();
    document.getElementById("h2").innerHTML =
      "Eliminado el disco del principio";
    document.getElementById("p").innerHTML =
      "El disco eliminado es:" + "<br />" + eliminado.mostrarInformacion();
  } else if (posicion == 2) {
    let eliminado = discos.pop();
    document.getElementById("h2").innerHTML = "Eliminado el disco del final";
    document.getElementById("p").innerHTML =
      "El disco eliminado es:" + "<br />" + eliminado.mostrarInformacion();
  } else {
    alert("Posición no válida!");
  }
}

function muestraPosicion() {
  let pais = prompt(
    "Indique el elemento del que desea consultar la posición (Ej: Ucrania):"
  );
  let posicion = paises.indexOf(pais);
  if (posicion == -1) {
    document.getElementById("h1").innerHTML = "Consultar posición por país";
    document.getElementById("p").innerHTML = "País no encontrado";
    alert("País no encontrado");
  } else {
    document.getElementById("h2").innerHTML = "Consultar posición por país";
    document.getElementById("p").innerHTML =
      pais + " se encuentra en la posición: " + posicion;
  }
}

function muestraNombre() {
  let posicion = prompt(
    "Indique la posición de donde desea conocer el elemento, tenga en cuenta que empieza por 0 (Ej: 2):"
  );
  if (posicion >= 0 && posicion < discos.length) {
    let esteDisco = discos[posicion];
    document.getElementById("h2").innerHTML = "Consultar disco por posición";
    document.getElementById("p").innerHTML =
      "En la posición " +
      posicion +
      " se encuentra el disco: " +
      esteDisco.mostrarInformacion();
  } else {
    alert(
      "La posición indicada no es correcta. Debe estar entre 0 y cantidad de discos. Inténtelo de nuevo."
    );
  }
}

function consultarDisco() {
  let opcion = prompt(
    "Introduzca 1 si desea consultar por posición o 2 si desea consultar por nombre"
  );
  if (opcion == 1) {
    muestraPosicion();
  } else if (opcion == 2) {
    muestraNombre();
  } else {
    alert("Opción no válida! Inténtelo de nuevo.");
  }
}
