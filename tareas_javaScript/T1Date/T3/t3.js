//Ejercicio 3 Date
//@author David González Conejero

//Declaro todas las variables

function Enviar() {
  let fecha = new Date();
  let formato = document.getElementById("fecha").value;
  let formato1 = "01/01/2000";
  let formato2 = "Lunes, 1 de enero de 2000";
  let formato3 = "Monday, January 1, 2020";
  let dia = fecha.getDate();
  let diaSemana = fecha.getDay();
  let mes = fecha.getMonth() + 1;
  let anho = fecha.getFullYear();

  if (formato == formato1) {
    alert(dia + "/" + mes + "/" + anho);
  } else if (formato == formato2) {
    let diaNombre;
    let mesDia;
    switch (diaSemana) {
      case 0:
        diaNombre = "Domingo";
        break;
      case 1:
        diaNombre = "Lunes";
        break;
      case 2:
        diaNombre = "Martes";
        break;
      case 3:
        diaNombre = "Miércoles";
        break;
      case 4:
        diaNombre = "Jueves";
        break;
      case 5:
        diaNombre = "Viernes";
        break;
      case 6:
        diaNombre = "Sábado";
        break;
    }
    switch (mes) {
      case 0:
        mesDia = "enero";
        break;
      case 1:
        mesDia = "febreo";
        break;
      case 2:
        mesDia = "marzo";
        break;
      case 3:
        mesDia = "abril";
        break;
      case 4:
        mesDia = "mayo";
        break;
      case 5:
        mesDia = "junio";
        break;
      case 6:
        mesDia = "julio";
        break;
      case 7:
        mesDia = "agosto";
        break;
      case 8:
        mesDia = "septiembre";
        break;
      case 9:
        mesDia = "octubre";
        break;
      case 10:
        mesDia = "noviembre";
        break;
      case 11:
        mesDia = "diciembre";
        break;
    }
    alert(diaNombre + ", " + dia + " de " + mesDia + " de " + anho);
  } else if (formato == formato3) {
    let diaNombre;
    let mesDia;
    switch (diaSemana) {
      case 0:
        diaNombre = "Sunday";
        break;
      case 1:
        diaNombre = "Monday";
        break;
      case 2:
        diaNombre = "Tuesday";
        break;
      case 3:
        diaNombre = "Wernesday";
        break;
      case 4:
        diaNombre = "Thursday";
        break;
      case 5:
        diaNombre = "Friday";
        break;
      case 6:
        diaNombre = "Saturday";
        break;
    }
    switch (mes) {
      case 0:
        mesDia = "January";
        break;
      case 1:
        mesDia = "February";
        break;
      case 2:
        mesDia = "March";
        break;
      case 3:
        mesDia = "April";
        break;
      case 4:
        mesDia = "May";
        break;
      case 5:
        mesDia = "June";
        break;
      case 6:
        mesDia = "July";
        break;
      case 7:
        mesDia = "August";
        break;
      case 8:
        mesDia = "September";
        break;
      case 9:
        mesDia = "October";
        break;
      case 10:
        mesDia = "November";
        break;
      case 11:
        mesDia = "December";
        break;
    }
    alert(diaNombre + ", " + mesDia + " " + dia + ", " + anho);
  }
}
