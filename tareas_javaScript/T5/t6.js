//Ejercicio 6 tarea 5
//@author David González Conejero

//Declaro todas las variables

dia = prompt("¿Qué día es hoy?");
switch (dia) {
  case "lunes":
    console.log("Mañana será martes.");
    break;
  case "martes":
    console.log("Mañana será miércoles.");
    break;
  case "miércoles":
    console.log("Mañana será jueves.");
    break;
  case "jueves":
    console.log("Mañana será viernes.");
    break;
  case "viernes":
    console.log("Mañana será sábado.");
    break;
  case "sábado":
    console.log("Mañana será domingo.");
    break;
  case "domingo":
    console.log("Mañana será lunes, otra vez.");
    break;
  default:
    console.log("Día no encontrado. Revise la ortografía!");
}
