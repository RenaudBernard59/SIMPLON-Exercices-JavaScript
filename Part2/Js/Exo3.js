/* ========== Partie 2 - Exercice 3 ========== */
var nb;
var nbDevinette;

// Définir les fonctions
function demanderNombre() {
  nb = Number(prompt("Entrez un entier : "));
  return nb;
}

function demanderNombreDevinette() {
  nbDevinette = Number(prompt("Entrez un entier : "));
  return nbDevinette;
}


function verifyEnter(nb) {
  // Vérifier si Entier
  var entier
  function isInt(nb) {
    entier = (n % 1 === 0);
    return entier
  }
  // Agir en fonction
  if (entier == true) {
    demanderNombreDevinette();
    jeuDevinette(nb);
  } else {
    demanderNombre();
  }

}
  
function jeuDevinette(nb, nbDevinette) {
  while (nb != nbDevinette) {
     if (nb > nbDevinette) {
       alert("Choisis un nombre plus grand");
       demanderNombreDevinette();     
     } else if (nb > nbDevinette) {
       alert("Choisis un nombre plus petit");
       demanderNombreDevinette();
     } else {
       alert("Bravo tu as gagner !!!");
     }
  }
}
  
  
  
  
  
// Lancer les fonctions
demanderNombre();
verifyEnter(nb);
  
  
// END
// git commit -am "Part2 Exo3 FINISH"
