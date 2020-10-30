function Disco() {
  this.nombre = "";
  this.cantante = "";
  this.anho = "";
  this.tipo = "";
  this.localizacion = 0;
  this.prestado = false;
  incluir5Propiedades = function incluir5Propiedades(nom, cant, an, tip, loc) {
    let tipos = ["rock", "pop", "punk", "indie"];
    this.nombre = nom;
    this.cantante = cant;
    this.anho = an;
    if (tipos.includes(tip)) {
      this.tipo = tip;
    }
    this.localizacion = loc;
  };
  cambiarLocalizacion = function cambiarLocalizacion(loc) {
    this.localizacion = loc;
  };
  cambiarEstado = function cambiarEstado(valor) {
    this.prestado = valor;
  };
  mostrarInformacion = function mostrarInformacion() {
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

let disco1 = new Disco();
disco1.incluir5Propiedades("Más", "Alejandro Sanz", "1997", "pop", 0);

function mostrarDiscos() {
  document.getElementById("h2").innerHTML = "Mostrar discos disponibles";
  document.getElementById("p").innerHTML = disco1.mostrarInformacion();
}
