/* ========== Partie 6 - Exercice 2 ========== */
//Initialisation du constructeur
 function  NouveauGuerrier(nom, attaque, defense, pv, attaqueAutre, defenseAutre, pvAutre){
	this.nom: "",
	this.attaque: 0,
	this.defense,
	this.pv: 0,
	//Méthodes
	this.random: function () {
	var random = Math.round(Math.random*100/100);
	return random;
	}, //END FUNC random
	this.aLaBataille function() {
	var rand1 = this.random();
	var rand2 = this.random();
	pvAutre = this.pvAutre - (rand1 * this.attaque) - (rand2 * this.defenseAutre);
	return pvAutre
 } //END FUNC Arme

}

//Inetanciation des guerriers

var conan = new NouveauGuerrier("Conan", 60, 60, 120);
var dovakin = new NouveauGierrier("Dovakin", 80, 30, 140);


// Appel des fonctions




// END
