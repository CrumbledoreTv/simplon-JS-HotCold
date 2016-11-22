/**************************************************************/
console.log("******* DEBUT SCRIPT *******");

/* Nombre choisi par le PC */
var nbPc = Math.floor(100*Math.random());
console.log("Nombre PC :"+ nbPc);

var essai= 0;
/********************* FUNCTION ********************************/
function game(){
  var indication = document.getElementById('indic');

  var chaud = document.getElementById("chaud");
  var chaudR = document.getElementById("chaudR");

  var froid = document.getElementById("froid");
  var froidR = document.getElementById("froidR");

  var win = document.getElementById("work");
  var coup = document.getElementById("win");

  essai++;

  /* Nombre choisi par l'User */
  var nombre = document.getElementById("nombreUser").value;
  console.log("Nombre User :" +nombre);

/*********** GAME *************/
if(essai == 5){
  alert("Indice : le nombre est compris entre "+(nbPc-Math.floor(Math.random()*12)-2)+" et "+(nbPc+Math.floor(Math.random()*12+2)));
}else if(essai<=9){
    if(nombre == nbPc){
      win.style.visibility = "visible";
      coup.innerHTML = "Vous avez gagné en "+essai+" coups";
      console.log("******* FIN SCRIPT *******");
    }else if(Math.abs(nbPc - nombre) <= 10){
      chaud.style.backgroundColor = "red";
      chaud.style.transition ="2s";

      hot.style.backgroundColor = "red";
      hot.style.transition ="2s";

      chaudR.style.backgroundColor = "red";
      chaudR.style.transition ="2s";

      froid.style.backgroundColor = "red";
      froid.style.transition ="2s";

      froidR.style.backgroundColor = "red";
      froidR.style.transition ="2s";
    }else if(Math.abs(nbPc - nombre) <= 20){
      chaud.style.backgroundColor = "orange";
      chaud.style.transition ="2s";

      hot.style.backgroundColor = "white";
      hot.style.transition ="2s";

      chaudR.style.backgroundColor = "orange";
      chaudR.style.transition ="2s";

      froid.style.backgroundColor = "orange";
      froid.style.transition ="2s";

      froidR.style.backgroundColor = "orange";
      froidR.style.transition ="2s";
    }else{
      froid.style.backgroundColor = "blue";
      froid.style.transition ="2s";

      froidR.style.backgroundColor = "blue";
      froidR.style.transition ="2s";

      chaud.style.backgroundColor = "white";
      chaud.style.transition ="2s";

      hot.style.backgroundColor = "white";
      hot.style.transition ="2s";

      chaudR.style.backgroundColor = "blue";
      chaudR.style.transition ="2s";
    }
  }else{
    alert("Vous avez perdu ! Le chiffre était : "+nbPc);
  }
}
