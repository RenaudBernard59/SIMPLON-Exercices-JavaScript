/* ========== Partie 6 - Exercice 1 ========== */
var roger = {
  prenom: 'Roger',
  nom: 'LeTaverier',
  paysResidence: 'Monderalcore',
  age: 36,
  moyensPaiement: ["Liquide", "Carte Bleue", "Chèque", "Paypal" ],
  // Initialisation des Méthodes
  saidPrenom: function() {
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
//=====================================================================
// Apel de fonctions

roger.saidNom();
roger.saidPrenom();
roger.anneeNaissance();

// END











