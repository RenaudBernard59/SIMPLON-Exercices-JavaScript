/* ========== Partie 3 - Exercice 2 ========== */
/*
num = 1 > 4

1000
0100
0010
0001

table = (1, 0, 0, 0)
table[0] > table[1]
du coup table[1] deviens table[0]


0
0
0
0
"--------"
*/
/* Version SIMPLE mais la console n'affiche pas bien "repeat"
var maTable = [1, 0, 0, 0];
var chaine = ('"--------"');

function imprimerCode() {
	for (i = 0; i < 4; i++) {
		console.log(maTable[i]);
	}
	console.log(chaine);
}

function incrementerTable() {
	for (a = 0; a < 4; a++) {
		imprimerCode();
		maTable.pop();
		maTable.unshift(0);
	}
}

incrementerTable();
*/

/* Version QUI MARCHE */
var maTable = [1, 0, 0, 0];
var chaine = ('"--------"');

function imprimerCode() {
	console.log(maTable[0]);
	console.log(maTable[1]);
	console.log(maTable[2]);
	console.log(maTable[3]);
	console.log(chaine);
}


function incrementerTable() {
	for (a = 0; a < 4; a++) {
		imprimerCode();
		maTable.pop();
		maTable.unshift(0);
	}
}

incrementerTable();




// END