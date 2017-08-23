/* ========== Partie 6 - Exercice 1 ========== */
// Constructeur de l'objet newPerson

function newPerson() {
  // Initialisation des Propriétés
  prenom: '',
  nom: '',
  paysResidence: '',
  age: 0,
  moyensPaiement: [""],
  // Initialisation des Méthodes
  saidPrenom: function() = {
    window.alert(this.prenom);
  }, //END Function saidPrenom
  saidNom: function() = {
    window.alert(this.nom);
  }, //END Function saidNom
  anneeNaissance: function() {
    anneeActuel = 2017;
    anneeNaissance = anneeActuel - this.age;
    window.alert(anneeNaissance);
  } //END Function anneeNaissance
}; //END Function newPerson

//=====================================================================
// Création de personnages
var roger = new newPerson("Roger", "LeTavernier", "Monderalcore", 36, [
 "Liquide",
  "Chèque",
  "CarteBleue",
  "Paypal",
  "Bitoins",
  "Troc"]);
//=====================================================================
// Apel de fonctions
roger.saidPrenom;
// END











