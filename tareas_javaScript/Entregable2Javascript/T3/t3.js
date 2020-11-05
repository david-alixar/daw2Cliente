//Entregable 2 objetos
//@author David González Conejero

// Declaro las variables

let horLlegada = new Date(2020, 10, 5, 12);
let horSalida = new Date(2020, 10, 5, 11);

function Aeropuerto(nom, ciu) {
  this.nombre = nom;
  this.ciudad = ciu;
  this.vuelos = [];
  this.numeroVuelos = this.vuelos.length;
  let numeroVuelo = 202001;
  while (numeroVuelo < 202010) {
    this.vuelos.push(new Vuelo(numeroVuelo, horLlegada, horSalida));
    numeroVuelo++;
  }
  this.mostrarInformacion = function mostrarInformacion() {
    let aeropuerto =
      "Nombre del aeropuerto: " +
      this.nombre +
      ", cidudad: " +
      this.ciudad +
      ", número de vuelos: " +
      this.numeroVuelos +
      ", vuelos: " +
      this.vuelos;
    return aeropuerto;
  };
}

function Vuelo(cod, horaLleg, horaSal) {
  this.codigo = cod;
  this.horaLlegada = horaLleg;
  this.horaSalida = horaSal;
  this.cambiarHoraLlegada = function cambiarHoraLlegada(hora) {
    this.horaLlegada = hora;
  };
  this.modificarHoraSalida = function cambiarHoraSalida(hora) {
    this.horaSalida = hora;
  };
  this.comprobarHora = function comprobarHora() {
    let hora;
    if (this.horaSalida > this.horaLlegada) {
      hora = true;
    } else {
      hora = false;
    }
  };
  this.mostrarInformacion = function mostrarInformacion() {
    let vuelo =
      "Código del vuelo: " +
      this.codigo +
      ", hora de llegada: " +
      this.horaLlegada +
      ", hora de salida: " +
      this.horaSalida;
    return vuelo;
  };
}

let aeropuerto1 = new Aeropuerto("San Pablo", "Sevilla");

alert(aeropuerto1.mostrarInformacion());
