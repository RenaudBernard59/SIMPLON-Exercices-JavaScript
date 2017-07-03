/* ========== Partie 3 - Exercice 8 ========== */


/*
tableaudeNonbre = (1,3, 542, 25, 8, 2)

func maxTable > 542
 if table[0] > table[a]
 	a >> 1 > i++
if table[1]> table[a]
	0 > i++
if table[2]> table[a]
	0 > i++
...
*/




function maxTable() {

	tableauDeNombre = [25, 456, 21.3, 0, 659, 12.3, -5];
	i = 0
	j = 1
	l = tableauDeNombre.lenght
	while (i < l) {
		if (i > j) {
			console.log(tableauDeNombre[i] + " est le plus grand");
		} else if (i > l)  {
			while (j < l) {
				if (j > i)
				console.log(tableauDeNombre[j] + " est le plus grand");
			}
			j++
		} else {
			console.log("Des nombres sont égaux");
		}
	i++

	}

	console.log(tableauDeNombre);
}



maxTable();


// END