/**************************************************************/
console.log("******* DEBUT SCRIPT *******");

/* Nombre choisi par le PC */
var nbPc = Math.floor(100*Math.random());
console.log("Nombre PC :"+ nbPc);

/********************* FUNCTION ********************************/
function game(){
  var indication = document.getElementById('indic');

  /* Nombre choisi par l'User */
  var nombre = document.getElementById("nombreUser").value;
  console.log("Nombre User :" +nombre);

  if(nombre == nbPc){
    indication.innerHTML = "Bien joué !";
  }else if(Math.abs(nbPc - nombre) <= 20){
    indication.innerHTML = "Chaud";
  }else{
    indication.innerHTML = "Froid";
  }
}

console.log("******* FIN SCRIPT *******");
//
