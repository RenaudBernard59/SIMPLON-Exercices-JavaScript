/* ========== Partie 3 - Exercice 3 ========== */
/*

estPaire
if num % 2 = 0 c'est OK



 */



function estPaire() {
	monNombre = parseInt(prompt("Donne moi un nombre !"));

	if (monNombre % 2 === 0) {
		alert("Ce nombre est paire !");
	} else {
		alert("Ce nombre est impaire !");
	}
}

estPaire();


// END