/* ========== Partie 3 - Exercice 5 ========== */
/*
var = string
function decouper 
s
t
r
i
n
g

if "-" > "_"


 */

function chaineConverter() {
	maChaine = prompt("Donne moi une chaine de caractère quelquonque avec des '-' et des '_' !");
	var tableTemporaire = [];
	var chaineRetournee = "";
	l = maChaine.length;
	for (i = 0; i <= l; i++) {
	// On découpe la chaine
		tableTemporaire[i] = maChaine.charAt(i);
			if (tableTemporaire[i] === "-") {
				tableTemporaire[i] = "_";
			};

	};

	// On recompose la chaine
	for (a = 0; a <= l; a++) {
		chaineRetournee = chaineRetournee + tableTemporaire[a]
	};
	alert(chaineRetournee);

}









chaineConverter();
// END