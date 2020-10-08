function Enviar() {
  var numero = document.getElementById("num").value;

  if (numero == "") {
    alert("Completar el campo DNI");
  } else {
    if (isNaN(numero)) {
      alert("Teclear un DNI (sin letras, sólo números)");
      numero = document.getElementById("num").value;
    } else {
      var calculo = numero % 23;

      var letraFinal;

      switch (calculo) {
        case 0:
          letraFinal = "t";
          break;
        case 1:
          letraFinal = "r";
          break;
        case 2:
          letraFinal = "w";
          break;
        case 3:
          letraFinal = "a";
          break;
        case 4:
          letraFinal = "g";
          break;
        case 5:
          letraFinal = "m";
          break;
        case 6:
          letraFinal = "y";
          break;
        case 7:
          letraFinal = "f";
          break;
        case 8:
          letraFinal = "p";
          break;
        case 9:
          letraFinal = "d";
          break;
        case 10:
          letraFinal = "x";
        case 11:
          letraFinal = "b";
          break;
        case 12:
          letraFinal = "n";
          break;
        case 13:
          letraFinal = "j";
          break;
        case 14:
          letraFinal = "z";
          break;
        case 15:
          letraFinal = "s";
          break;
        case 16:
          letraFinal = "q";
        case 17:
          letraFinal = "v";
          break;
        case 18:
          letraFinal = "h";
          break;
        case 19:
          letraFinal = "l";
          break;
        case 20:
          letraFinal = "c";
          break;
        case 21:
          letraFinal = "k";
          break;
        case 22:
          letraFinal = "e";
          break;
      }
      var letra = document.getElementById("letra").value;

      if (letra.toLowerCase() === letraFinal.toLowerCase()) {
        alert("El DNI es correcto");
      } else {
        alert(
          "La letra del NIF es incorrecta.\nSeleccionar la letra " + letraFinal
        );
      }
    }
  }
}
