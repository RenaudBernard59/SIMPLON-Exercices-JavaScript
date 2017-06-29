/* ========== Partie 2 - Exercice 6 ========== */

/* THEORIE
Calcul Volume
V = L * l * h 
Volume = Longueur * Largeur * hauteur
m³ = m * m * m
Calcul Débit
Q = v / t
Débit = petitVolume / temps
m³.min^-1 = m³ / min
Calcul Temps remplissage
Q = v / t > t = v / Q
Temps = petitVolume / Débit
min = m³ / m³.min^-1 

	33 m3 / 1 minute
	1 m3 / ?
	? = 1 * 1 / 33
	? = 1/33
	? = 1/?
 ? = temps en min pour 1 L
Temps remplissage
 TempsRemplissage = TempsEnMinPour1L * VolumePiscine

}

*/

//Initialisation des variables

var volumePiscine = { 
	longueur : 0,
	largeur : 0,
	hauteur : 0,
	volTotal : 0
};

 var debit ;

//Initialisation des fonctions

function demandeValeurs() {
	volumePiscine.longueur = parseInt(prompt("Inscrivez la LONGUEUR de la piscine"));
	volumePiscine.largeur = parseInt(prompt("Inscrivez la LARGEUR de la piscine"));
	volumePiscine.hauteur = parseInt(prompt("Inscrivez la HAUTEUR/PROFONDEUR de la piscine"));
	debit = parseInt(prompt("Inscrivez le DEBIT de remplissage de la piscine"));
	return debit, volumePiscine;
}

function calculdeVolume(volumePiscine) {
	volumePiscine.volTotal = parseInt(volumePiscine.longueur * volumePiscine.largeur * volumePiscine.hauteur);
	return volumePiscine;
}

function calculdeTemps(debit, volumePiscine) {
	tempsRemplissagePiscine  = parseInt(volumePiscine.volTotal / debit);
	return tempsRemplissagePiscine, debit;
}

function TempsRemplissage(volumePiscine, tempsRemplissagePiscine, debit) {
	window.alert("Il faut " + tempsRemplissagePiscine + " min pour remplir la piscine de : " + 
		volumePiscine.longueur + " m de longeur, " + 
		volumePiscine.largeur + " m de largeur, " + 
		volumePiscine.hauteur + " m de hauteur, et un débit de " + 
		debit + " m³/min."
		);
}


function poseMoilaQuestion(volumePiscine, debit) {
	demandeValeurs();
	calculdeVolume(volumePiscine);
	calculdeTemps(debit, volumePiscine);
	TempsRemplissage(volumePiscine, tempsRemplissagePiscine, debit);
}

// Appel fonction
poseMoilaQuestion(volumePiscine, debit);

// END