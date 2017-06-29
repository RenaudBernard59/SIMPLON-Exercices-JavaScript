/* ========== Partie 3 - Exercice 1 ========== */
//Echequer = 8 * 8 < 1-1 = blanc
noir = "■"
blanc = "□"
chaine = ""
var i

makeChaine = function(noir, blanc, chaine, i) {
	if (i % 2 === 0){
		// Si i est paire
		chaine + chaine + noir;
		return chaine
	} else {
		chaine + chaine + blanc;
		return chaine;
	};
}


for(i = 1; i < 65; i++) {
	if (i % 8 === 0) {
		makeChaine;
		console.log(chaine);
		chaine = "";
	} else {
		makeChaine;
	} 
}



// END