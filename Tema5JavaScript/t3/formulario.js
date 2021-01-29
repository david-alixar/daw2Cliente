window.addEventListener("load", inicio);

function inicio() {
  document.getElementById("generaForm").addEventListener("click", generaForm);
}

function generaForm() {
  let form = document.getElementById("formulario");
  if (form.firstChild === null) {
    // Salto de línea
    //let saltoLinea = document.createElement("br");

    //Nombre del disco
    let label1 = document.createElement("label");
    label1.setAttribute("for", "name");
    label1.innerHTML = "Nombre del disco:";
    let nombre = document.createElement("input");
    nombre.setAttribute("type", "text");
    nombre.setAttribute("name", "nombre");

    //Género del disco
    let label2 = document.createElement("label");
    label2.setAttribute("for", "name");
    label2.innerHTML = "Género del disco:";

    let option1 = document.createElement("option");
    option1.setAttribute("value", "rock");
    option1.innerHTML = "Rock";

    let option2 = document.createElement("option");
    option2.setAttribute("value", "pop");
    option2.innerHTML = "Pop";

    let option3 = document.createElement("option");
    option3.setAttribute("value", "punk");
    option3.innerHTML = "Punk";

    let option4 = document.createElement("option");
    option4.setAttribute("value", "indie");
    option4.innerHTML = "Indie";

    let genero = document.createElement("select");
    nombre.setAttribute("name", "genero");
    genero.setAttribute("id", "genero");
    genero.appendChild(option1);
    genero.appendChild(option2);
    genero.appendChild(option3);
    genero.appendChild(option4);

    form.appendChild(label1);
    form.appendChild(document.createElement("br"));
    form.appendChild(nombre);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(label2);
    form.appendChild(document.createElement("br"));
    form.appendChild(genero);
    form.appendChild(document.createElement("br"));
  } else {
    alert("El formulario ya ha sido generado.");
  }
}
