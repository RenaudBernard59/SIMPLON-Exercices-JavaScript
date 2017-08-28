/* ========== Partie 6 - Exercice 1 ========== */
var roger = {
  prenom: 'Roger',
  nom: 'LeTaverier',
  paysResidence: 'Monderalcore',
  age: 36,
  moyensPaiement: [
    'Liquide',
    'Carte Bleue',
    'Chèque',
    'Paypal'
  ], //END Déclaration variables
  //=====================================================================
  saidPrenom: function() {
    // Initialisation des Méthodes
    window.alert(this.prenom);
  }, //END Function saidPrenom
  saidNom: function() {
    window.alert(this.nom);
  }, //END Function saidNom
  //=====================================================================
  anneeNaissance: function() {
    anneeActuel = 2017;
    anneeNaissance = anneeActuel - this.age;
    window.alert(anneeNaissance);
  }, //END Function anneeNaissance
  //=====================================================================
  // Initialisation des Méthodes
  verifAge: function() {
	var allowedAge
	if (this.age > 18) {
      return allowedAge = true;
    } else {
      return allowedAge = false;
    }; // END Conditionnal	
  }, // END func verifAge
  //=====================================================================
  verifPays: function() {
    //Initialisation des variables locales	
    var paysAutorises = [
      'FRANCE',
      'BELGIQUE',
      'ALLEMAGNE',
      'ROYAUME-UNI',
      'ESPAGNE',
      'PORTUGAL',
      'ITALIE',
      'IRLANDE',
      'SUISSE'
    ];
    var tb1 = this.paysUtilisateur;
    var tb2 = paysAutorises;
    var tb1l = tb1.length;
    var resultat = [
    ];
    //Boucle et conditionnel
    // Fonction pour rechercher dans le tableau
    for (var i = 0; i < (tb1l); i++) {
      var resulTest;
      // On parcours le tableau1
      resulTest = tb2.indexOf(tb1[i]);
      if (resulTest >= 0) {
        // Concordance
        resultat.push(tb1[i]);
      } //END conditionnel
    } //END boucle
    return resultat;
  }
}, // END func verifPays
//=====================================================================
verifPaiement: function() {
  //Initialisation des variables locales	
  var paiementAutorises = [
    'CARTE BLEUE',
    'PAYPAL',
    'BITCOINS',
    'RIB'
  ];
  var tb1 = this.moyensPaiement;
  var tb2 = paiementAutorises;
  var tb1l = tb1.length;
  var resultat = [
  ];
  //Boucle et conditionnel
  // Fonction pour rechercher dans le tableau
  for (var i = 0; i < (tb1l); i++) {
    var resulTest;
    // On parcours le tableau1
    resulTest = tb2.indexOf(tb1[i]);
    if (resulTest >= 0) {
      // Concordance
      resultat.push(tb1[i]);
    }; //END conditionnel
  }; //END boucle
  return resultat;
}, // END func verifPaiement
//=====================================================================
itsAllowed: function() {
  var allowPaiement,  allowPays;
  //Verfifier si []Paiement vide
  if (this.verifPaiement.length == 0) {
    // Tableau vide NON-AUTORISER
    allowPaiement = true;
  } else {
    allowPaiement = false;
  };
  //END condition allowPaiement
  //Verfifier si []Pays vide

  if (verifPays.length == 0) {
    // Tableau vide NON-AUTORISER
    allowPays = true;
  } else {
    allowPays = false;
  }
  //END condition allowPaiement

  alert('Le dénommer' + this.prenom + ' ' + this.nom + ' qui a ' + this.age + ' ans est ' + allowedAge + ' sur ce site. \n Ses moyens de paiements' + this.verifPaiement + ' sont ' + allowPaiement + '\n Son pays ' + this.verifPays + ' est ' + allowPays + '.'
}
//END itsAllowed

}; //END Function roger
//=====================================================================
// Apel de fonctions
roger.saidNom();
roger.saidPrenom();
roger.anneeNaissance();
roger.itsAllowed();
// END
