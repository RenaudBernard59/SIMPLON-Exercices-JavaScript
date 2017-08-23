/* ========== Partie 6 - Exercice 1 ========== */


// Constructeur de l'objet newPerson
function  newPerson() = {
	// Initialisation des Propriétés
	prenom: "",
	nom: "",
	paysResidence: "",
	age: number,
	moyensPaiement: [],

	// Initialisation des Méthodes
	saidPrenom: function() = {
		window.alert(this.prenom);
	},
	saidNom: function() = {
		window.alert(this.nom);
	},
	anneeNaissance: function() {
		anneeActuel = 2017;
		anneeNaissance = anneeActuel - this.age;
		window.alert(anneeNaissance);
	}	
};

//=====================================================================
//=====================================================================

var roger = new newPerson(Roger, LeTavernier, Monderalcore, 36, [Liquide, Chèque, Carte Bleue, Paypal, Bitoins, Troc])







// END
