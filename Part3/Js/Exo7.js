/* ========== Partie 3 - Exercice 7 ========== */
/*
tableau personne1 (nom, prénom, age, date de naissance)


objet personne = {
	nom, 
	prénom, 
	age, 
	date de naissance
}

tableau multiple (personne1, personne2, personne3)

onjet liste personne = {
	personne1 = objetPersonne
	personne2 = objetPersonne
	personne3 = objetPersonne
	personne4 = objetPersonne
}
*/

function unHomme() {
	lHomme = [];
	lHomme.push("BERNARD");
	lHomme.push("Renaud");
	lHomme.push(25);
	lHomme.push("31/01/1992");

	console.log(lHomme);

	lAutre1 = ["HAD", "Dad", 33, "21/12/2012"];
	lAutre2 = ["BIIB", "Fasaioda", 21, "01/01/2000"];
	lAutre3 = ["SAVA", "Bien", 66, "12/12/2012"];

	lesGens = [lHomme, lAutre1, lAutre2, lAutre3];

	console.log(lesGens);
}


unHomme()



// END