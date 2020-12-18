window.addEventListener("load", inicio);

function inicio() {
  document.getElementById("nuevoItem").addEventListener("click", nuevoItem);
  document
    .getElementById("borrarPrimero")
    .addEventListener("click", borrarPrimero);
  document
    .getElementById("borrarUltimo")
    .addEventListener("click", borrarUltimo);
}

function nuevoItem() {
  let nuevo = document.createElement("li");
  let texto = document.createTextNode(
    prompt("Introduzca un nuevo elemento de lista")
  );

  nuevo.appendChild(texto);

  let ul = document.getElementById("lista");
  ul.appendChild(nuevo);
}

function borrarPrimero() {
  let ul = document.getElementById("lista");
  let primero = ul.firstChild;
  if (primero === null) {
    alert("No hay ningún nodo! Inserte un ítem primero");
  } else {
    ul.removeChild(primero);
  }
}

function borrarUltimo() {
  let ul = document.getElementById("lista");
  let ultimo = ul.lastChild;
  if (ultimo === null) {
    alert("No hay ningún nodo! Inserte un ítem primero");
  } else {
    ul.removeChild(ultimo);
  }
}
