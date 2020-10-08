//Ejercicio prueba entregable
//@author David González Conejero

//Declaro todas las variables

var min = 1;
var max = 100;
var contador = 0;
var replay = true;

function generaNum(min, max) {
  return Math.random() * (max - min) + min;
}

while (replay == true) {
  var aleatorio = generaNum(min, max);
  aleatorio = parseInt(aleatorio);
  var numero = prompt(
    "Adivina el número.\nIntroduzca un número entre 1 y 100:"
  );
  while (isNaN(numero) || numero > 100) {
    numero = prompt(
      "Valor introducido no válido. Inténtelo de nuevo!\n" +
        "Adivina el número.\nIntroduzca un número entre 1 y 100:"
    );
    contador++;
  }

  while (numero != aleatorio) {
    console.log(numero);
    if (numero === null) {
      break;
    } else if (aleatorio > numero) {
      contador++;
      numero = prompt(
        "El número es más grande. Vuelva a intentarlo.\nDebe ser entre 1 y 100:"
      );
    } else if (aleatorio < numero) {
      contador++;
      numero = prompt(
        "El número es más pequeño. Vuelva a intentarlo.\nDebe ser entre 1 y 100:"
      );
    }
  }

  contador++;

  replay = false;

  if (numero === null) {
    replay = confirm(
      "Usted se ha salido del juego. El número era: " +
        aleatorio +
        "\n¿Desea volver a jugar?"
    );
  } else if (numero == aleatorio) {
    replay = confirm(
      "¡Enhorabuena! Usted ha acertado el número. Intentos: " +
        contador +
        "\n¿Desea volver a jugar?"
    );
  }
  contador = 0;
}
