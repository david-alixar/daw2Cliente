function calcularImc() {
  let peso = document.getElementById("peso").value;
  let estatura = document.getElementById("estatura").value;
  let imc = peso / (estatura * estatura);
  alert("Su IMC es: " + imc);
}

function calcularFcm() {
  let edad = document.getElementById("edad").value;
  let fcm = 220 - edad;
  alert("Su FCM es: " + fcm);
}
