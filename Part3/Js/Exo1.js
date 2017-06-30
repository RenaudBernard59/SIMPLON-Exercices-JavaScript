/* ========== Partie 3 - Exercice 1 ========== */
/*Echequer = 8 * 8 < 1-1 = blanc
Il faut :
	bnbnbnbn > chaine1
	nbnbnbnb > chaine2
	bnbnbnbn > chaine1
	nbnbnbnb > chaine2
	bnbnbnbn > chaine1
	nbnbnbnb > chaine2
	bnbnbnbn > chaine1
	nbnbnbnb > chaine2

b > impaire
n > paire

boucleA 1 > 8
	if impaire
		b
	if paire
		n

chaine1 > b
	> bn
	> bnb
	...

boucleB 0 > 7
	if paire
		n
	if impaire
		b
chaine2 > n
	> nb
	> nbn
	...

boucleC 1 > 8
	if impaire
		print chaine1
	if paire
		princ chaine2
noir = "■" 		// PAIRE
blanc = "□" 	// IMPAIRE
chaine1 = ""	// Ligne bnbnbnbn
chaine2 = ""	// Ligne nbnbnbnb

*/
noir = "■" 		// PAIRE
blanc = "□" 	// IMPAIRE
chaine1 = ""	// Ligne bnbnbnbn
chaine2 = ""	// Ligne nbnbnbnb


function chaineMakerStep1(a, b, noir, blanc) {
	var chaine
	for (i = a; i < b; i++) {
		if (i % 2 === 0) {
			// Est Paire
			chaine = chaine + noir;
			return chaine
		} else {
			// Est Impaire
			chaine = chaine + blanc;
			return chaine
		}
	}
}

function chaineMakerStep2(chaine1, chaine2, noir, blanc) {
	var chaine
	// Make chaine1 Ligne bnbnbnbn
	a = 0;
	b = 8;
	chaineMakerStep1(a, b, chaine, noir, blanc);
	chaine = chaine1;

	// Make chaine2 Ligne nbnbnbnb
	a = 1;
	b = 9;
	chaineMakerStep1(a, b, chaine, noir, blanc);
	chaine = chaine2;

	return chaine1, chaine2;

}

function assemblage(chaine1, chaine2) {
	for (i = 1 ; i < 9 ; i++) {
		if (i % 2 === 0) {
			// Est Paire
			console.log(chaine2);

		} else {
			// Est Impaire
			console.log(chaine1);
		}
	}
}



chaineMakerStep2(chaine1, chaine2, noir, blanc);
assemblage(chaine1, chaine2);


/*

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
*/


// END