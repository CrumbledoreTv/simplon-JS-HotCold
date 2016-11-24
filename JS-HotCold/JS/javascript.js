/**************************************************************/
console.log("******* DEBUT SCRIPT *******");

/* Nombre choisi par le PC */
var nbPc = Math.floor(100 * Math.random());
console.log("Nombre PC :" + nbPc);

var essai = 0;
/********************* FUNCTION ********************************/
function game() {
    var indication = document.getElementById('indic');

    var temp = document.getElementById("temp");
    var tempR = document.getElementById("tempR");

    var win = document.getElementById("work");
    var coup = document.getElementById("win");

    essai++;

    /* Nombre choisi par l'User */
    var nombre = document.getElementById("nombreUser").value;
    console.log("Nombre User :" + nombre);

    /*********** GAME *************/
    if (essai == 5) {
        alert("Indice : le nombre est compris entre " + (nbPc - Math.floor(Math.random() * 12) - 2) + " et " + (nbPc + Math.floor(Math.random() * 12 + 2)));
    } else if (essai <= 9) {
        if (nombre == nbPc) {
            win.style.visibility = "visible";
            temp.style.backgroundColor = "red";
            temp.style.transition = "2s";
            temp.style.height = "250px";
            tempR.style.backgroundColor = "red";

            coup.innerHTML = "Vous avez gagné en " + essai + " coups";
            console.log("******* FIN SCRIPT *******");
        } else if (Math.abs(nbPc - nombre) <= 10) {
            temp.style.backgroundColor = "red";
            temp.style.transition = "2s";
            temp.style.height = "230px";


            tempR.style.backgroundColor = "red";
            tempR.style.transition = "2s";

        } else if (Math.abs(nbPc - nombre) <= 20) {
            temp.style.backgroundColor = "orange";
            temp.style.transition = "2s";
            temp.style.height = "150px";

            tempR.style.backgroundColor = "orange";
            tempR.style.transition = "2s";

        } else {
            temp.style.backgroundColor = "blue";
            temp.style.transition = "2s";
            temp.style.height = "50px";

            tempR.style.backgroundColor = "blue";
            tempR.style.transition = "2s";
        }
    } else {
        alert("Vous avez perdu ! Le chiffre était : " + nbPc);
    }
}
