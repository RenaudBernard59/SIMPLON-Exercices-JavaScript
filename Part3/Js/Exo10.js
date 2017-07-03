/* ========== Partie 3 - Exercice 10 ========== */
/*
Pierre Feuille Ciseau

Pierre 	> Ciseau || Ciseau 	< Pierre
Pierre 	< Feuille || Feuille > Pierre
Feuille < Ciseau || Ciseau 	> Feuille





 */

// Définitions Fonctions

function randomEntier() {
  randInt = Math.random() * (2 - 0) + 0;
  return randInt = parseInt(randInt);
}

function reponseDefinitions(lesJoueurs['reponsePlayer1'],lesJoueurs['reponsePlayer2']) {
	actions = ["Pierre", "Papier", "Ciseau"];


	randomEntier(); 

	lesJoueurs.reponsePlayer1 = parseInt(prompt("Choisissez [0] : Pierre // [1] : Papier // [2] : Ciseau"));
	lesJoueurs.reponsePlayer1 = actions[lesJoueurs.reponsePlayer1];
	lesJoueurs.reponsePlayer2 = actions[randomEntier()];

	//Debogue
		console.log("FUNCreponseDefinitions Pl1 " + lesJoueurs.reponsePlayer1 + " Pl2 " + lesJoueurs.reponsePlayer2);

	return lesJoueurs

}


function testActions(lesJoueurs) {

	var scPl1, scPl2

	if (lesJoueurs.reponsePlayer1 === lesJoueurs.reponsePlayer2) {
		alert("Pl1 : " + lesJoueurs.reponsePlayer1 + " - Pl2 : " + lesJoueurs.reponsePlayer2
		 	+ " --- Egalité");
	} else if ((lesJoueurs.reponsePlayer1 = "Pierre") && (lesJoueurs.reponsePlayer2 = "Papier")) {
		alert("Pl1 : " + lesJoueurs.reponsePlayer1 + " - Pl2 : " + lesJoueurs.reponsePlayer2 
			+ " --- Player2 Win");
		//Debogue
			console.log("FUNCtestAction Pl1 " + lesJoueurs.scorePlayer1+ " Pl2 " + lesJoueurs.scorePlayer2);
		return lesJoueurs.scorePlayer2++;
	} else if ((lesJoueurs.reponsePlayer1 = "Pierre") && (lesJoueurs.reponsePlayer2 = "Ciseau")) {
		alert("Pl1 : " + lesJoueurs.reponsePlayer1 + " - Pl2 : " + lesJoueurs.reponsePlayer2 
			+ " --- Player1 Win");
		//Debogue
			console.log("FUNCtestAction Pl1 " + lesJoueurs.scorePlayer1+ " Pl2 " + lesJoueurs.scorePlayer2);
		return lesJoueurs.scorePlayer1++;
	} else if ((lesJoueurs.reponsePlayer1 = "Papier") && (lesJoueurs.reponsePlayer2 = "Pierre")) {
		alert("Pl1 : " + lesJoueurs.reponsePlayer1 + " - Pl2 : " + lesJoueurs.reponsePlayer2 
			+ " --- Player1 Win");
		//Debogue
			console.log("FUNCtestAction Pl1 " + lesJoueurs.scorePlayer1+ " Pl2 " + lesJoueurs.scorePlayer2);
		return lesJoueurs.scorePlayer1++;
	} else if ((lesJoueurs.reponsePlayer1 = "Papier") && (lesJoueurs.reponsePlayer2 = "Ciseau")) {
		alert("Pl1 : " + lesJoueurs.reponsePlayer1 + " - Pl2 : " + lesJoueurs.reponsePlayer2 
			+ " --- Player2 Win");
		//Debogue
			console.log("FUNCtestAction Pl1 " + lesJoueurs.scorePlayer1+ " Pl2 " + lesJoueurs.scorePlayer2);
		return lesJoueurs.scorePlayer2++;
	} else if ((lesJoueurs.reponsePlayer1 = "Ciseau") && (lesJoueurs.reponsePlayer2 = "Pierre")) {
		alert("Pl1 : " + lesJoueurs.reponsePlayer1 + " - Pl2 : " + lesJoueurs.reponsePlayer2 
			+ " --- Player2 Win");
		//Debogue
			console.log("FUNCtestAction Pl1 " + lesJoueurs.scorePlayer1+ " Pl2 " + lesJoueurs.scorePlayer2);
		return lesJoueurs.scorePlayer2++;
	} else if ((lesJoueurs.reponsePlayer1 = "Ciseau") && (lesJoueurs.reponsePlayer2 = "Papier")) {
		alert("Pl1 : " + lesJoueurs.reponsePlayer1 + " - Pl2 : " + lesJoueurs.reponsePlayer2 
			+ " --- Player1 Win");
		//Debogue
			console.log("FUNCtestAction Pl1 " + lesJoueurs.scorePlayer1+ " Pl2 " + lesJoueurs.scorePlayer2);
		return lesJoueurs.scorePlayer1++;
	} else {
		alert("Error");
	}
}

function theGame() {
	
	lesJoueurs = {
		reponsePlayer1 : "",
		reponsePlayer2 : "",
		scorePlayer1 : 0,
		scorePlayer2 : 0
	};


	while (lesJoueurs.scorePlayer1 <= 3 || lesJoueurs.scorePlayer2 <= 3) {
		if (lesJoueurs.scorePlayer1 === 3) {
			alert("Player1 Win the Game !");
		} else if (lesJoueurs.scorePlayer2 === 3){
			alert("Player2 Win the Game !");
		} else {
			reponseDefinitions(lesJoueurs['reponsePlayer1'],lesJoueurs['reponsePlayer2']);
			lesJoueurs = testActions(lesJoueurs);
			// Debogue
				console.log("FUNCtheGameWHILEELSE Pl1 " + lesJoueurs.reponsePlayer1 + " Pl2 " + lesJoueurs.reponsePlayer2)
			alert("Pl1 : " + lesJoueurs.scorePlayer1 + " - Pl2 : " + lesJoueurs.scorePlayer2);
		}
	}


}

// Appel fonction

theGame()


// EN