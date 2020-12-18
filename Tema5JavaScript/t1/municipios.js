let info = document.getElementById("info");

let texto = "";

let numeroHijos = document.getElementsByTagName("p").length;

let segundoParrafo = document.getElementsByTagName("p")[1];

let numeroEnlaces = document.getElementsByTagName("a").length;

let primerEnlace = document.getElementsByTagName("a")[0];

let penultimoEnlace = document.getElementsByTagName("a")[numeroEnlaces - 2];

let cantWikiMun = 0;

let cantParrafosPrimPar = document
  .getElementsByTagName("p")[0]
  .getElementsByTagName("a").length;

for (var i = 0; i < numeroEnlaces; i++) {
  if (document.getElementsByTagName("a")[i].href == "file:///wiki/Municipio") {
    cantWikiMun++;
  }
}

texto += "Número de párrafos del documento = " + numeroHijos;
texto +=
  "<br/><br/>Texto de segundo párrafo:<br/><br/>" + segundoParrafo.textContent;
texto += "<br/><br/>Número de enlaces en el documento = " + numeroEnlaces;
texto += "<br/><br/>Primer enlace:<br/><br/>" + primerEnlace.href;
texto += "<br/><br/>Penúltimo enlace:<br/><br/>" + penultimoEnlace.href;
texto += "<br/><br/>Cantidad de enlaces a wiki/Municipio: " + cantWikiMun;
texto +=
  "<br/><br/>Cantidad de enlaces en el primer párrafo: " + cantParrafosPrimPar;

info.innerHTML = texto;
