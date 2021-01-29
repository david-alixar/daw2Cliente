function objetoXHR() {
  if (window.XMLHttpRequest) {
    return;
  }
}

// Función  para añadir Eventos
let crearEvento = (function () {
  function w3c_crearEvento(elemento, evento, mifuncion) {
    elemento.addEventListener(evento, mifuncion, false);
  }

  function ie_crearEvento(elemento, evento, mifuncion) {
    let fx = function () {
      mifuncion.call(elemento);
    };
    //Enlazamos el objeto con attachEvent para IE
    elemento.attachEvent("o n" + evento, fx);
  }

  if (typeof window.addEventListener !== "undefined") {
    return w3c_crearEvento;
  } else if (typeof window.attachEvent !== "undefined") {
    return ie_crearEvento;
  }
})(); // <= Esta es la parte más crítica - tiene que terminar en ()

// Función para modificar el contenido de un div;

function textoDIV(nodo, texto) {
  //let nodo = document.getElementById(idObjeto);
  while (nodo.firstChild) {
    // Eliminamos todos los hijos de ese objeto.
    nodo.removeChild(nodo.firstChild);
  }
  // Cuando ya no tenga hijos, agregamos un hijo con  el texto que recibela función.
  nodo.appendChild(document.createTextNode(texto));
}
