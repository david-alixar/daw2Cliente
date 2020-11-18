let horaActual = new Date();

function Bandeja(tip, variedad, cant, horaSal) {
  this.tipo = tip;
  this.variedad = variedad;
  this.cantidad = cant;
  this.horaSalida = horaSal;
  this.horaUltVenta = horaSal;

  this.restar = function restar(retirados) {
    if (this.cantidad - retirados < 0) {
      this.cantidad = 0;
    } else {
      this.cantidad = this.cantidad - retirados;
    }
    this.horaUltVenta = new Date();
  };

  this.tiempoVenta = function tiempoVenta() {
    let tiempoVenta = this.horaSalida - this.horaUltVenta;
    return tiempoVenta;
  };

  this.mostrarInformacion = function mostrarInformacion() {
    let bandeja =
      "Tipo: " +
      this.tipo +
      ", variedad: " +
      this.variedad +
      ", cantidad: " +
      this.cantidad +
      ", hora de elaboración: " +
      this.horaSalida +
      " , última venta " +
      this.horaSalida;
    return bandeja;
  };
}

function LaPlata() {
  this.mostrador = [];
  this.anadirBandeja = function anadirBandeja(bandeja) {
    this.mostrador.push(bandeja);
  };

  this.ponerEnMostrador = function ponerEnMostrador(bandeja) {
    let coincide = false;
    for (var i = 0; i < mostrador.length; i++) {
      if (
        mostrador[i].tipo == bandeja.tipo ||
        mostrador[i].variedad == bandeja.variedad
      ) {
        coincide = true;
        break;
      }
    }
    if (coincide) {
      document.getElementById("p").innerHTML =
        "No se puede colocar esa bandeja porque ya existe una similar";
    } else {
      mostrador.anadirBandeja(bandeja);
    }
  };
  this.venderPastel = function venderPastel(tipo, variedad, cantidad) {
    let coincide = false;
    let bandeja;
    for (var i = 0; i < mostrador.length; i++) {
      if (mostrador[i].tipo == tipo || mostrador[i].variedad == variedad) {
        coincide = true;
        bandeja = mostrador[i];
        break;
      }
    }
    if (coincide) {
      bandeja.restar(cantidad);
      document.getElementById("p").innerHTML =
        "Se han vendido " + cantidad + " pasteles";
    } else {
      document.getElementById("p").innerHTML = "No hay pasteles de ese tipo";
    }
  };
}

let mostrador = new LaPlata();

function restar() {
  let tipo = prompt("Introduzca el tipo de pastel que queire comprar");
  let variedad = prompt("Introduzca la variedad de pastel que quiere comprar");
  let cantidad = prompt("Introduzca la cantidad de pasteles que desea comprar");
  mostrador.venderPastel(tipo, variedad, cantidad);
}

function tiempoVenta() {
  let i = prompt(
    "Elija la bandeja de la que quiere conocer el tiempo de venta (0,1,2...)"
  );
  let tiempoVenta = mostrador[i].tiempoVenta;
  document.getElementById("p").innerHTML = tiempoVenta;
}

function mostrarInformacionBandeja() {
  let i = prompt(
    "Elija la bandeja de la que quiere conocer la información (0,1,2...)"
  );
  let bandeja = mostrador[i].mostrarInformacion;
}

function crearBandeja() {
  let tipo = prompt("Introduzca el tipo de pastel");
  let variedad = prompt("Introduzca la variedad");
  let cantidad = prompt("Introduzca la cantidad de ");
  let bandeja = new Bandeja(tipo, variedad, cantidad, horaActual);
}

function ponerMostrador() {
  let tipo = prompt("Introduzca el tipo de pastel");
  let variedad = prompt("Introduzca la variedad");
  let cantidad = prompt("Introduzca la cantidad de ");
  let bandeja = new Bandeja(tipo, variedad, cantidad, horaActual);
  mostrador.ponerEnMostrador(bandeja);
}
