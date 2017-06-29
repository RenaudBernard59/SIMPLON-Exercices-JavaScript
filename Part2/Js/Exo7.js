/* ========== Partie 2 - Exercice 7 ========== */


function calcAireCerle(rayon) {
	// Pi ère Carré
	aireCercle = Math.pow((pi * rayon), 2);
	return aireCercle;
}

function calcPerimetreCercle(rayon) {
	// 2 Pi ère
	perimetreCercle = 2 * pi * rayon;
	return perimetreCercle;
}

function askMeSomething() {
	pi = 3.14159265359;
	rayon = parseInt(prompt("Entrez le rayon du cercle"));

	calcAireCerle(rayon);
	calcPerimetreCercle(rayon);

	window.alert("Ton cercle de rayon " + rayon + ", a une aire de " 
		+ aireCercle + " et un pérmiètre de "
		+ perimetreCercle + "."
		)

}

askMeSomething()

// END