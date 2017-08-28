

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
