//Ejercicio 1 Maths
//@author David González Conejero

function Enviar() {
  let formato = document.getElementById("operacion").value;

  if (formato == 1) {
    let base = prompt("Intruduzca un valor para la base de la potencia:");
    let exponente = prompt(
      "Intruduzca un valor para el exponente de la potencia:"
    );
    let potencia = Math.pow(base, exponente);
    alert(
      "La potencia de " + base + " elevado a " + exponente + " es: " + potencia
    );
  } else if (formato == 2) {
    let numero = prompt(
      "Intruduzca un número para conocer su raíz cuadrada (no puede ser negativo):"
    );
    while (numero < 0) {
      numero = prompt("El número no puede ser negativo! Introduzca otro:");
    }
    let raiz = Math.sqrt(numero);
    alert("La raíz cuadrada de " + numero + " es: " + raiz);
  } else if (formato == 3) {
    let numero = prompt(
      "Intruduzca un número decimal para conocer su redondeo al alza y a la baja:"
    );
    while (numero % 1 == 0) {
      numero = prompt(
        "El número no puede ser entero! Debe ser un número decimal. Introduzca otro:"
      );
    }
    let redondeoAlza = Math.ceil(numero);
    let redondeoBaja = Math.floor(numero);
    alert("El número " + numero + " redondeado al alza es: " + redondeoAlza);
    alert("El número " + numero + " redondeado a la baja es: " + redondeoBaja);
  } else if (formato == 4) {
    let angulo = prompt(
      "Intruduzca los grados del ángulo para conocer su trigonometría (debe ser entre 0 y 360º):"
    );
    while (angulo < 0 || angulo > 360) {
      angulo = prompt(
        "El ángulo no puede ser menor de 0º ni mayor de 360º! Introduzca otro valor:"
      );
    }
    let seno = Math.sin(angulo);
    let coseno = Math.cos(angulo);
    let tangente = Math.tan(angulo);
    alert("El seno de " + angulo + " es: " + seno);
    alert("El coseno de " + angulo + " es: " + coseno);
    alert("La tangente de " + angulo + " es: " + tangente);
  }
}
