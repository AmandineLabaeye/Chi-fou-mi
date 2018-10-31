var ChoixUtilisateur = 0;

var gagne = 0;
var egalite = 0;
var perdu = 0;

document.getElementById("pierre").addEventListener("click", function () {

    ChoixUtilisateur = 1;

    var ChoixOrdi = (Math.random() * 3)+1;

    ChoixOrdi= Math.floor(ChoixOrdi);


        if (ChoixOrdi==1) {
            alert('Egalité / Il a fait Pierre');
            Egalite ();
        }
        if (ChoixOrdi== 2) {
            alert('Tu as perdu / Il a fait Feuille');
            Defaite ();
        }
        if (ChoixOrdi== 3) {
            alert('Tu as gagné / Il a fait Ciseaux');
            Victoire ();
        }
    });

document.getElementById('feuille').addEventListener("click", function () {

    ChoixUtilisateur = 2;

    var ChoixOrdi = (Math.random() * 3)+1;

    ChoixOrdi = Math.floor(ChoixOrdi);


        if (ChoixOrdi == 1) {
            alert('Egalité / Il a fait Feuille');
            Egalite ();
        }
        if (ChoixOrdi == 2) {
            alert('Tu as perdu / Il a fait Ciseaux');
            Defaite ();
        }
        if (ChoixOrdi == 3) {
            alert('Tu as gagné / Il a fait Pierre');
            Victoire ();
        }
    });

document.getElementById('ciseaux').addEventListener("click", function () {

    ChoixUtilisateur = 3;

    var ChoixOrdi = (Math.random() * 3)+1;

    ChoixOrdi = Math.floor(ChoixOrdi);


        if (ChoixOrdi == 1) {
            alert('Egalité / Il a fait Ciseaux');
            Egalite ();
        }
        if (ChoixOrdi == 2) {
            alert('Tu as perdu / Il a fait Feuille');
            Defaite ();
        }
        if (ChoixOrdi == 3) {
            alert('Tu as gagné / Il a fait Pierre');
            Victoire ();
        }
    });

function Victoire () {
    gagne++;
    document.getElementById('Victoire').innerHTML = 'Nombre de Victoire : Tu as gagné' + " " + gagne + " " + 'fois';
}

function Egalite () {
    egalite++;
    document.getElementById('Egalite').innerHTML = 'Nombre Egalité : Tu as' + " " + egalite + " " + 'Egalité';
}

function Defaite () {
    perdu++;
    document.getElementById('Defaite').innerHTML = 'Nombre de Defaite : Tu as perdu' + " " + perdu + " " + 'fois';
}
