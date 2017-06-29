/* ========== Partie 2 - Exercice 3 ========== */
var nb, nbDevinette;

// Définir les fonctions
function demanderNombre() {
  nb = Number(prompt("Entrez un entier à deviner : "));
  return nb;
}

/*
function demanderNombreDevinette() {
  nbDevinette = Number(prompt("Entrez un entier pour deviner le nombre: "));
  return nbDevinette;
}
*/

function verifyEntier(nb) {
  // Vérifier si Entier
  var entier
  function isInt(nb) {
    entier = (n % 1 === 0);
    return entier;
  }

}
  
function jeuDevinette() {
   nb = demanderNombre();
   cUnEntier = verifyEntier(nb);
  /*On demande le nombre initial */
  if (cUnEntier === true) {
    alert("C'est un entier");
  } else {
    alert("C'est pas un entier");
  }

  /*On essaye de le debiner*/

}
  
  
jeuDevinette()
  

  
  
// END
// git commit -am "Part2 Exo3 FINISH"
