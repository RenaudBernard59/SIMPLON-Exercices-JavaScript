/* ========== Partie 2 - Exercice 2 ========== */

/* ========== ========== Initialiser les variables ========== ========== */
age = null;
ageValidation = false;
etatAge = null;
pairAge = null;
carreAge = null;

/* ========== ========== On pose la question ========== ========== */

function demanderAge()
{
  age = prompt("Veuillez entrer votre âge : ")
  age = Number(age);
  return age
} // END demanderAge

/* ========== ========== Vérification de la valeur entrée ========== ========== */

function validerAgeNumber(age, ageValidation)
{
  if (Number.isNaN(age) == false) {
     ageValidation = false;
     return ageValidation;
  } if (age <= 0) {
     ageValidation = false;
     return ageValidation;
  } else {
     ageValidation = true;
     return ageValidation;
  }
} // END validerAgeNumber

function ageFunc1(age)
{
     if (age >= 21) {
        etatAge = "Accesse Allowed !";
        return etatAge;
      } else {
        etatAge = "Accesse not Allowed !";
        return etatAge;
      }
   
} // END function ageFunc1
  
function ageFunc2(age)
{
  if ((age % 2) == 0) {
    pairAge = "Ton age est pair !";
    return pairAge ;
  } else {
    pairAge = "Ton age est impair !";
    return pairAge ;
  }
} // END function 2
 
function ageFunc3(age)
{
  
  mda = null; // Dois valoir TRUE ou FALSE
  // Calculer Racine Carrée Age est un entier
   racineAge = Math.sqrt(age)  
  // Tester si 
  function isInt(racineAge) {
     mda = (racineAge % 1 === 0);
     return mda;
  }
  
  isInt(age) // Emploi de la fonction
      
  if (mda = true){
    carreAge = "Ton age est un carré !";
    return carreAge;
  } else {
    carreAge = "Ton age n'est pas un carré !";
    return carreAge;
  }
} // END function ageFunc3
  
function messageRetour(age, etatAge, paireAge, carreAge)
{
  window.alert("tu as " + age + " années. Donc : " 
               + etatAge + " Je peut aussi te dire que : "
               + paireAge + " et que " + carreAge);
}

function bigBoocle(ageValidation) {
  while (ageValidation = false) {
    demanderAge();
  } 
 // Tant que la vaeur de l'âge est fausse on boucle
} 
  
  
// Appel des fonctions
// Demander un 1ère fois et verrifier le résultat
demanderAge();
validerAgeNumber(age);

// Répondre en fonction de la réponse

if (ageValidation = true) {
  ageFunc1(age);
  ageFunc2(age);
  ageFunc3(age);
  messageRetour(age, etatAge, pairAge, carreAge);

} else {
  bigBoocle(ageValidation);
}



// END
// git commit -am "Part2 Exo2 FINISH"
