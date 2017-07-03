/* ========== Partie 3 - Exercice 4 ========== */
/*
factorielle
1 > 0*1
2 > 1*2
3 > 12*3
4 > 123*4
5 > 1234*5
...
10 > 123456789*10
...


 */
function maFactorielle() {

	monNombre = parseInt(prompt("Donne moi un nombre et je te donnerais sa factorielle !"));
	var chaine = "";
	i = monNombre - 1;
	for (i ; i > 0 ; i--) {
		chaine = i + chaine;
		
	}
	parseInt(chaine);
	operation = chaine * monNombre;
	operationCarac = String(chaine + " x " + monNombre);

	alert("Le résultat de l'opération : " + operationCarac + " est " + operation);

}

maFactorielle();

// END