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
            document.getElementById('ChoixOrdi').src="assets/img/Rock-paper-scissors_(rock).png";
            Egalite ();
        }
        if (ChoixOrdi== 2) {
            alert('Tu as perdu / Il a fait Feuille');
            document.getElementById('ChoixOrdi').src="assets/img/Rock-paper-scissors_(paper).png";
            Defaite ();
        }
        if (ChoixOrdi== 3) {
            alert('Tu as gagné / Il a fait Ciseaux');
            document.getElementById('ChoixOrdi').src="assets/img/Rock-paper-scissors_(scissors).png";
            Victoire ();
        }
    });

document.getElementById('feuille').addEventListener("click", function () {

    ChoixUtilisateur = 2;

    var ChoixOrdi = (Math.random() * 3)+1;

    ChoixOrdi = Math.floor(ChoixOrdi);


        if (ChoixOrdi == 1) {
            alert('Egalité / Il a fait Feuille');
            document.getElementById('ChoixOrdi').src="assets/img/Rock-paper-scissors_(paper).png";
            Egalite ();
        }
        if (ChoixOrdi == 2) {
            alert('Tu as perdu / Il a fait Ciseaux');
            document.getElementById('ChoixOrdi').src="assets/img/Rock-paper-scissors_(scissors).png";
            Defaite ();
        }
        if (ChoixOrdi == 3) {
            alert('Tu as gagné / Il a fait Pierre');
            document.getElementById('ChoixOrdi').src="assets/img/Rock-paper-scissors_(rock).png";
            Victoire ();
        }
    });

document.getElementById('ciseaux').addEventListener("click", function () {

    ChoixUtilisateur = 3;

    var ChoixOrdi = (Math.random() * 3)+1;

    ChoixOrdi = Math.floor(ChoixOrdi);


        if (ChoixOrdi == 1) {
            alert('Egalité / Il a fait Ciseaux');
            document.getElementById('ChoixOrdi').src="assets/img/Rock-paper-scissors_(scissors).png";
            Egalite ();
        }
        if (ChoixOrdi == 2) {
            alert('Tu as perdu / Il a fait Pierre');
            document.getElementById('ChoixOrdi').src="assets/img/Rock-paper-scissors_(rock).png";
            Defaite ();
        }
        if (ChoixOrdi == 3) {
            alert('Tu as gagné / Il a fait Feuille');
            document.getElementById('ChoixOrdi').src="assets/img/Rock-paper-scissors_(paper).png";
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
