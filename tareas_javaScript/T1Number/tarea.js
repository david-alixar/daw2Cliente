function Enviar() {
  let numero = new Number(document.getElementById("numero").value);

  let numExponencial = numero.toExponential();
  let num4Dec = numero.toFixed(4);
  let numBinario = numero.toString(2);
  let numOctal = numero.toString(8);
  let numHexadecimal = numero.toString(16);

  alert("Valor exponencial de " + numero + ": " + numExponencial);
  alert("El número " + numero + " con 4 decimales queda: " + num4Dec);
  alert("El número " + numero + " en binario queda: " + numBinario);
  alert("El número " + numero + " en octal queda: " + numOctal);
  alert("El número " + numero + " en hexadecimal queda: " + numHexadecimal);
}
