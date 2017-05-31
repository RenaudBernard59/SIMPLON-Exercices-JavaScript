/* ========== Partie 2 - Exercice 1 ========== */
nombre1 = Number(prompt("Rentre ici un 1er nombre :"));
nombre2 = Number(prompt("Rentre ici un 2nd nombre :"));
nombre3 = Number(prompt("Rentre ici un 3ème nombre :"));
nombre4 = Number(prompt("Rentre ici un 4ème nombre :"));

function testPlusGrand(nb1, nb2, nb3, nb4)
{
  if (nb1 > nb2 && nb1 > nb3 && nb1 > nb4) {
    alert("Le plus grand est : " + nb1);
  } else if  (nb2 > nb1 && nb2 > nb3 && nb2 > nb4)  {
    alert("Le plus grand et : " + nb2);
  } else if  (nb3 > nb1 && nb3 > nb2 && nb3 > nb4)  {
    alert("Le plus grand est : " + nb3);
  } else {
    alert("Le plus grand est : " + nb4);
  }
}

testPlusGrand(nombre1, nombre2, nombre3, nombre4)


// END