/* ========== Partie 6 - Exercice 1 ========== */
var roger = {
  prenom: 'Roger',
  nom: 'LeTaverier',
  paysResidence: 'Monderalcore',
  age: 36,
  moyensPaiement: ["Liquide", "Carte Bleue", "Chèque", "Paypal" ],
  saidPrenom: function() {
  // Initialisation des Méthodes
    window.alert(this.prenom);
  }, //END Function saidPrenom
  saidNom: function() {
    window.alert(this.nom);
  }, //END Function saidNom
  anneeNaissance: function() {
    anneeActuel = 2017;
    anneeNaissance = anneeActuel - this.age;
    window.alert(anneeNaissance);
  } //END Function anneeNaissance
}; //END Function roger

//=====================================================================

var itsAllowed = {
	paysAutorises: ['FRANCE', 'BELGIQUE', 'ALLEMAGNE', 'ROYAUME-UNI', 'ESPAGNE', 'PORTUGAL', 'ITALIE', 'IRLANDE', 'SUISSE'],
	paiementAutorises: ['CARTE BLEUE', 'PAYPAL', 'BITCOINS', 'RIB'],
	ageMinimum = 18,
  // Initialisation des Méthodes
	verifAge: function(ageUtilisateur) {
		if (this.ageMinimum) < (ageUtilisateur) {
			return var allowedAge = true;
		} else {
			return var allowedAge = false;
		} // END Conditionnal	
	}, // END func verifAge
	verifPays: function(paysUtilisateur) {
			

		if this.paysAutorises.indexOf(paysUtilisateur) = true {
		}
	}, // END func verifPays
	verifPaiement: function(moyenPaiement) {
		a
	} // END func verifPaiement
} //END itsAllowed

//=====================================================================
// Apel de fonctions

roger.saidNom();
roger.saidPrenom();
roger.anneeNaissance();

// END











