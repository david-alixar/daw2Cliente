//Ejercicio 4 Date
//@author David González Conejero

//Declaro todas las variables

function Enviar() {
  let fecha = new Date();
  let formato = document.getElementById("hora").value;
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  let franja = "AM";

  if (formato == 1) {
    alert("Son las " + hora + ":" + minutos + ":" + segundos);
  } else {
    if (hora > 12) {
      hora = hora - 12;
      franja = "PM";
    }
    alert("Son las " + hora + ":" + minutos + " " + franja);
  }
}
