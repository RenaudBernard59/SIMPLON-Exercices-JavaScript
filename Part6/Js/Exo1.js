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



var moyensPaiement = ['LIQUIDE', 'CARTE BLEUE', 'CHEQUE', 'PAYPAL'];
var paiementAutorises = ['CARTE BLEUE', 'PAYPAL', 'BITCOINS', 'RIB'];
var tb1 = moyensPaiement;
var tb2 = paiementAutorises;
var tb1l = tb1.length;
var resultat = [];

// Fonction pour rechercher dans le tableau
for (var i = 0; i < (tb1l); i++) {
  var resulTest;
  // On parcours le tableau1
  resulTest = tb2.indexOf(tb1[i]);
  if (resulTest >= 0) {
    // Concordance
    resultat.push(tb1[i]);
  }
 } //END conditionnel
} //END boucle

console.log('Resultat : ' + resultat);












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











