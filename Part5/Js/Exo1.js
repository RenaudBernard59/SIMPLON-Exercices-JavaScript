/* ========== Partie 5 - Exercice 1 ========== */

function epargne() {
  initial = Number(prompt("Valeur initiale du compte"));
  annees = Number(prompt("Nombre d'années d'épargne"));
  taux = Number(prompt("Taux annuel de l'épargne en %"));
  
  valeurCompte = initial
  while (annees > 0) {
    gainAnnuel = valeurCompte * 100 / taux;
    valeurCompte = valeurCompte + gainAnnuel;
    annees--
  }
  window.alert("Sur le compte il y a " + valeurCompte + " €");
}

epargne();





// END