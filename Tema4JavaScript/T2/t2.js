let click = 0;
let objetoPrevio = null;

function comprobarIguales(objeto) {
  let id = objeto.id;
  let esta = false;

  if (click == 1) {
    switch (id) {
      case "card1":
        objeto.src = "img/01_lisa.png";
        break;
      case "card2":
        objeto.src = "img/04_marge.png";
        break;
      case "card3":
        objeto.src = "img/06_flanders.png";
        break;
      case "card4":
        objeto.src = "img/02_bart.png";
        break;
      case "card5":
        objeto.src = "img/04_marge.png";
        break;
      case "card6":
        objeto.src = "img/03_homer.png";
        break;
      case "card7":
        objeto.src = "img/05_maggie.png";
        break;
      case "card8":
        objeto.src = "img/06_flanders.png";
        break;
      case "card9":
        objeto.src = "img/05_maggie.png";
        break;
      case "card10":
        objeto.src = "img/02_bart.png";
        break;
      case "card11":
        objeto.src = "img/01_lisa.png";
        break;
      case "card12":
        objeto.src = "img/03_homer.png";
        break;
    }
    setTimeout(() => {
      if (objeto.src == objetoPrevio.src) {
        objeto.style.backgroundColor = "green";
        objetoPrevio.style.backgroundColor = "green";
        document.getElementById(objetoPrevio.id).nextElementSibling.value = "1";
        document.getElementById(id).nextElementSibling.value = "1";
      }
      objeto.src = "";
      objetoPrevio.src = "";
    }, 1000);
    esta = true;
  }

  if (click == 0) {
    switch (id) {
      case "card1":
        objeto.src = "img/01_lisa.png";
        break;
      case "card2":
        objeto.src = "img/04_marge.png";
        break;
      case "card3":
        objeto.src = "img/06_flanders.png";
        break;
      case "card4":
        objeto.src = "img/02_bart.png";
        break;
      case "card5":
        objeto.src = "img/04_marge.png";
        break;
      case "card6":
        objeto.src = "img/03_homer.png";
        break;
      case "card7":
        objeto.src = "img/05_maggie.png";
        break;
      case "card8":
        objeto.src = "img/06_flanders.png";
        break;
      case "card9":
        objeto.src = "img/05_maggie.png";
        break;
      case "card10":
        objeto.src = "img/02_bart.png";
        break;
      case "card11":
        objeto.src = "img/01_lisa.png";
        break;
      case "card12":
        objeto.src = "img/03_homer.png";
        break;
    }
    click = 1;
    objetoPrevio = objeto;
  }
  if (esta) {
    click = 0;
  }
}
