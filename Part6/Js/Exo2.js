/* ========== Partie 6 - Exercice 2 ========== */
/*==================================================================================
//===============================================================
//---Initialisation du constructeur
//_________________________________________________ */
function NouveauGuerrier(nom, attaque, defense, pv, attaqueAutre, defenseAutre, pvAutre) {
  /*=======================================
//---------------Variables---------------
//=====================================*/
  this.nom = nom;
  this.attaque = attaque;
  this.defense = defense;
  this.pv = pv;
  /*=====================================
//---------------Méthode---------------
//===================================*/
  this.random = function () {
    /*######################################## 
	//FUNC random: crée un nombre aléatoire dans l'intervalle [0;1[.
	//Renvoie:
	//- random = FLOAT avec 2 décimales
	########################################*/
    var random = Math.round(Math.random * 100 / 100);
    return random;
  },
  /*---END FUNC random
//___________________________________*/
  this.aLaBataille = function () {
    /*######################################## 
	//FUNC aLaBataille: crée un combat entre 2 guerrier : Le 1er attaque, les propriétés du 2nd réagissent.
	//Variables:
	// - rand1, rand2 = FLOAT random issu de la fonction random de l'objet this;
	// - pvAutre = Points de Vie (NUMBER) de l'Autre guerrier (Victime);
	// - defenseAutre = Points de Défence (NUMBER) de l'Autre guerrier (Victime);
	// - attaque = Points d'attaque (NUMBER)du 1er guerrier (Attaquant).
	//Renvoie:
	//- pvAutre = NUMBER de points de vie restant après l'attaque.
	########################################*/
    var rand1 = this.random();
    var rand2 = this.random();
    pvAutre = this.pvAutre - (rand1 * this.attaque) - (rand2 * this.defenseAutre);
    return pvAutre;
  };
  /*---END FUNC aLaBataille
//___________________________________*./

};
/*---END Constr Guerrier----------------
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
  function NouveauMage(nom, attaque, defense, pv, mana, attaqueAutre, defenseAutre, pvAutre) {
    /*=======================================
//---------------Variables---------------
//=====================================*/
    this.nom = nom;
    this.attaque = attaque;
    this.defense = defense;
    this.pv = pv;
    this.mana = mana;
    /*=====================================
//---------------Méthode---------------
//===================================*/
    this.random = function () {
      /*######################################## 
	//FUNC random: crée un nombre aléatoire dans l'intervalle [0;1[.
	//Renvoie:
	//- random = FLOAT avec 2 décimales
	########################################*/
      var random = Math.round(Math.random * 100 / 100);
      return random;
    };
    /*---END FUNC random
//___________________________________*/
    this.aLaBataille = function () {
      /*######################################## 
	//FUNC aLaBataille: crée un combat entre 2 guerrier : Le 1er attaque, les propriétés du 2nd réagissent.
	//Variables:
	// - rand1, rand2 = FLOAT random issu de la fonction random de l'objet this;
	// - pvAutre = Points de Vie (NUMBER) de l'Autre guerrier (Victime);
	// - defenseAutre = Points de Défence (NUMBER) de l'Autre guerrier (Victime);
	// - attaque = Points d'attaque (NUMBER)du 1er guerrier (Attaquant).
	//Renvoie:
	//- pvAutre = NUMBER de points de vie restant après l'attaque.
	########################################*/
      var rand1 = this.random();
      var rand2 = this.random();
      pvAutre = this.pvAutre - (rand1 * this.attaque) - (rand2 * this.defenseAutre);
      return pvAutre;
    };
    /*---END FUNC aLaBataille
//___________________________________*/
    this.sparadrap = function () {
      /*######################################## 
	//FUNC sparadrap: Permet au Mage de ce healer i.e. dépenser 10 points de magie
	// pour obtenir 10 points de magie.
	// Si pas assez de magie pas possible 
	//Variables:
	// - mana = NUMBER de mana restant au Mage ;
	// - pv = NUMBER de points de vie du Mage.
	//Renvoie:
	//- result = ARRAY ou STRING;
	//- [0] = mana restant après application de la fonction ;
	//- [1] = pv après application de la fonction;
	//- STR = Indication que pas assez de mana.
	########################################*/
      var result;
      if (this.mana >= 10) {
        mana = this.mana - 10;
        pv = this.pv + 10;
        return result = [
          mana,
          pv
        ];
      } else {
        result = 'Pas assez de mana';
      }; //END Conditionnel
    };
    /*---END FUNC sparadrap
//___________________________________*/
  };
  /*---END Constr Mage-----------------
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
  /*==================================================================================
//===============================================================
//---Instanciation des guerriers
//_________________________________________________ */
  var conan = new NouveauGuerrier('Conan', 60, 60, 120, dovakin.defense, dovakin.pv);
  var dovakin = new NouveauGuerrier('Dovakin', 80, 30, 140, conan.defense, conan.pv);
  /*==================================================================================
//===============================================================
//---Appel des fonctions
//_________________________________________________ */
  function bagarre(conan, dovakin) {
    pl1 = conan.nom;
    pl2 = dovakin.nom;
    var pv1 = conan.pv;
    var pv2 = conan.pv;
    while ((pv1 > 0) && (pv2 > 0)) {
      console.log(conan.aLaBataille);
      console.log(dovakin.aLaBataille);
    }; //END BOUCLE
    if (pv1 != 0) {
      console.log('Conan gagne');
    } else {
      console.log('Dovakin gagne');
    }; //END Conditionnal
  };
  /*---END FUNC sparadrap
//___________________________________*/
  bagarre(conan, dovakin);
  // END
