# SIMPLON : Exercices JavaScript

## Partie 1 : Exercices JavaScript : introduction - débutants

### Exercice 1 : Hello World

Afficher "Hello World" dans la console.

Reproduire le même résultat, mais en déclarant une variable (du nom de votre choix) ayant pour valeur "Hello World".

*****

### Exercice 2 : Calculs divers

Dans la console, afficher le résultats des opérations suivantes:

* 3*3
* 12/0
* 4+9+78
* 12-7
* 5e4

*****

### Exercice 3 : Communiquer avec l'ordinateur

L'heure est venue de commencer à communiquer avec l'ordinateur ! Ecrivez un programme qui demande son nom à l'utilisateur puis lui répond un message de bienvenue avec son nom.

Astuce : vous pouvez afficher le message de différentes façons

*****

### Exercice 4 : Nom et prénom

Déclarer les variables 'nom' et 'prénom' et leur assigner votre nom et prénom.

Afficher dans la console par exemple : "Bonjour John Doe"

Attention aux espaces

*****

### Exercice 5 : Des caractères au nombre

Déclarer la variable myNumber = "123"

Afficher la variable a dans la console en modifiant son type String en type Number


*****

### Exercice 6 : Majuscules et miniscules

Ecrire un programme permettant de mettre en majuscule le contenu d'une String. Même chose pour le mettre en miniscule.

=====

## Partie 2 : PART 2 : Exercices JavaScript intermédiaire

### Exercice 1 : Le nombre le plus grand

Déclarer 4 variables ayant chacune pour valeur un chiffre différent. 
Ecrire un programme renvoyant dans la console la valeur la plus élevée.



*****

### Exercice 2 : Condition d'âge

Ecrire un programme JavaScript qui demande son âge à l'utilisateur. Si :

* L'age est négatif afficher un message qui demande d'entrer un âge réel
* L'age est supérieur ou égal à 21 ans afficher un messahe autorisant l'accès
* L'age est paire afficher un message indiquant à l'utilisateur que son âge est pair
* L'age est un carré afficher un message indiquant à l'utilisateur que son âge est un nombre carré



*****

### Exercice 3 : Le nombre caché

Stockez un nombre entier de votre choix dans une variable. Ecrivez ensuite un programme qui demande à l'utilisateur de deviner ce nombre.

Si l'utilisateur trouve le bon nombre vous lui annoncez qu'il a gagné. Sinon vous lui dites si son nombre est plus grand ou plus petit que le nombre caché. Tant que l'utilisateur n'a pas trouvé le bon nombre vous lui reposez la question.



*****

### Exercice 4 : Des nombres en boucle

Ecrire un programme qui affiche à l'écran les nombre de 1 à 1 en revenant à chaque fois à la ligne.

Exemple :

	1 
	2 
	3 
	...



*****

### Exercice 5 : Des nombres en boucle bis

Créer une boucle allant de 1 à 1, et n'afficher dans la console que les chiffres pairs.



*****

### Exercice 6 : Remplir la piscine

Ecrire une fonction en Javascript qui indique le temps de remplissage d'une piscine en fonction de sa longueur, sa largeur, sa profondeur, et du débit d'eau. Les longueurs sont en mètre (m), le débit en mètre cube par minute (m3/min) et le résultat attendu, le temps, en minute (min).



*****

### Exercice 7 : Calculs de cercle

Ecrire 2 fonctions, l'une retournant l'aire d'un cerlce, l'autre son périmètre. 
Le Rayon devra être entrer manuellement à l'aide d'un "prompt()".

Les résultats des deux fonctions seront affichés dans la console.



*****

### Exercice 8 : Une pyramide

Ecrire un programme affichant dans la console le résultat suivant:

	*
	**
	***
	****
	*****



*****

### Exercice 9 : FIZZ BUZZ

Ecrire un programe qui affiche les nombres de 1 à 1. Quand le nombre est un multiple de 3 afficher "FIZZ", quand le nombre est un multiple de 5 afficher "BUZZ" et quand le nombre est un multiple de 3 et 15 afficher "FIZZBUZZ"

=====

## Partie 3 : Exercices JavaScript intermédiaire partie 2


### Exercice 1 : Un échiquier

Votre objectif dans cet exercice est de réprésenter un plateau de jeu d'échec dans la console. Trop compliqué vous dites-vous ?

Pas du tout ! Un plateau d'échec ce ne sont que des cases blanche et noires. Pour représenter les cases noires, vous utiliserez les #. Au final, vous devriez obtenir quelques chose qui ressemble à ça :

    "
     # # # # # # # #
    # # # # # # # # 
     # # # # # # # #
    # # # # # # # # 
     # # # # # # # #
    # # # # # # # # 
     # # # # # # # #
    # # # # # # # # 
    "


*****

### Exercice 2 : Matrix dans la console

Vous avez probablement déjà vu le film Matrix, vous vous souvenez de ces suites de 0 et de 1 que l'on voyait régulièrement dans le film ? Aujourd'hui vous allez reproduire quelque chose de similaire dans la console.

Votre objectif est de produire un programme qui puisse reproduire le schéma suivant (traits inclus) :

	1  
	0  
	0  
	0  
	"-------"
	0  
	1  
	0  
	0  
	"-------"
	0  
	0  
	1  
	0  
	"-------"
	0  
	0  
	0  
	1  
	"-------"
Remarquez comment le 1 change de position à chaque fois !


*****

### Exercice 3 : Nombre paire ?

Vous travaillez sur un site ecommerce et dans votre processus d'achat vous avez besoin de savoir si le montant du panier utilisateur est un nombre paire ou non.

Vous allez donc créer une **fonction** qui peut recevoir un nombre et vérifier que celui est paire. Si c'est le cas elle affiche dans la console true, autrement elle affiche false.

Si le nombre rentré est un nombre à virgule, celui-ci est arrondie à l'entier le plus proche !


*****

### Exercice 4 : Vous avez dit factorielle ?

La factorielle d'un nombre entier est le produit de l'ensemble des nombres entiers inférieurs ou égaux à ce nombre.

Ainsi la factorielle de 4 vaut 1*2*3*4.

Vous allez créer une fonction qui prend un nombre entier et affiche dans la console sa factorielle. Si le nombre passé dans la fonction n'est pas un entier elle affiche un message d'erreur.


*****

### Exercice 5 : Les tirets ça compte !

Vous réalisez un programme de facturation pour le service des ventes de votre entreprise. Cependant le responsable des ventes est très pointilleux, il ne veut voir apparaître aucun tiret dans les factures, uniquement des underscores.

Vous allez donc produire une fonction qui prend une string et transforme tout les "-" en "_". Si autre chose qu'une string est passé à la fonction, celle-ci renvoie un message d'erreur.


*****

### Exercice 6 : Entrainez-vous avec les tableaux

Creéz un tableau qui contient tout les éléments de votre liste de course.

Affichez ensuite dans la console un message disant que vous devez acheter l'élément en première position du tableau. Faites la même chose avec l'élément en dernière position du tableau et avec un élément au milieu (celui que vous voulez).


*****

### Exercice 7 : Le tableau d'un homme

Vous allez créer un programme avec un tableau qui contient les informations principales d'un être humain, c'est à dire son nom, son prénom, son âge et sa date de naissance.

Remplissez ce tableau avec les valeurs que vous souhaitez !

Dans ce programme un fonction qui peut recevoir un tableau en argument, parcourera le tableau que vous venez de remplir et affichera chaque élément dans la console.

**Pour aller plus loin :**

Notre tableau précédent ne pouvait stocker les informations que d'une seule personne. Refaites le même exercice mais faites en sorte que notre tableau initial puisse contenir les informations de plusieurs personnes.

Ces informations seront elles-mêmes stockées dans d'autres tableaux (un par personne).

Vous pensiez ne jamais utiliser les tableaux multi-dimensionnels ? ;-)


*****

### Exercice 8 : Le max d'un tableau

Ecrivez une fonction qui parcourt un tableau de nombres et affiche dans la console la plus grande valeur de ce tableau.

**Pour aller plus loin:**

Faites en sorte que votre tableau puisse contenir également des chaînes de caractères. La fonction affichera alors la plus longue.

Attention, il faudra d'abord vérifier que votre tableau ne contient que des chiffres ou que des strings, autrement la focntion affichera false.


*****

### Exercice 9 : Une to do list

Ecrivez un programme qui demande à l'utilisateur les tâches qu'il doit réaliser avec un prompt, tant qu'il n'a pas rentré "fin" comme réponse.

Les tâches rentrées via le prompt seront stockées dans un tableau et une fois que l'utilisateur aura répondu "fin" vous afficherez les tâches à réaliser dans la console.


*****

### Exercice 10 : Un jeu en JavaScript

Vous allez réaliser un jeu de pierre, feuille, ciseaux en JavaScript.

Vous demanderez à l'utilisateur quelle réponse il choisit, puis vous déterminerez **au hasard** le choix de l'ordinateur, vous comparerez le choix de l'utilisateur et le choix de l'ordinateur et afficherez qui a gagné.

**Pour aller plus loin:**

Faites rejouer la partie tant qu'aucun des joueurs n'a obtenu 3 points.

=====

## Partie 4 : Exercices JavaScript : introduction - avancés


### Exercice 1 : True ou False ?

Déclarer 2 variables de type String. L'une d'entre elles doit être vide.

Ecrire un programme vérifiant si la String est vide ou non, et renvoyer la valeur (true ou false) dans la console.

Pour cet exercice, vous devrez commencer à vous renseigner par vous-même sur les conditions en JavaScript.


*****

### Exercice 2 : Calculer mon âge

Réalisez un programme qui demande au visteur l'année actuelle, son année de naissance, calcule l'âge du visiteur puis l'affiche dans un message à l'écran.

Pour allez plus loin, demandez l'âge de la personne à côté de vous et afficher dans un message le cumul de vos deux âges.


*****

### Exercice 3 : Problème de chaussures

Marc fait un peu de shopping. Il achète des chaussures à 70€, un jean à 59€ et un t-shirt à 20€.

Heureusement pour son portefeuille, il bénéficie d'une réduction de 20%.

Déclarez chacun des articles achetés dans une variable différente. (prix1, prix2, etc.). Déclarez une dernière variable 'total' qui aura pour valeur la somme des achats, et l'afficher dans la console.

Attention: ne pas oublier la réduction.


*****

### Exercice 4 : une calculatrice JavaScript

Vous allez créer une mini calculatrice qui permet d'additionner des nombres. Quand le visiteur arrive sur la page vous lui demandez les nombres à additionner, puis vous affichez le résultat à l'écran.


*****

### Exercice 5 : travailler avec les propriétés

Demander son prénom au visiteur.

Demander son nom au visteur.

Afficher dans un message la lettre par laquelle son prénom commence et la lettre par laquelle il termine. Ces lettres seront forcément affichées majuscules.

Faire de même pour son nom.

Afficher dans un message la combinaison des lettres, par exemple pour Marc Gemini : "MCGI".

Demander son âge au visiteur et lui afficher le résultat de celui-ci divisé par 33. S'assurer que si ce nombre comporte une virgule alors il sera arrondi à l'entier supérieur ou inférieur.

=====

## Partie 5 : Bonus

### Exercice 1





*****

### Exercice 2





=====

## Partie 6 : JavaScript avancé : exercices POO

### Exercice 1

Attention venir voir un formateur quand vous avez fini un des exercices

#### 1.Consignes
Dans cet exercice, pour débuter, nous allons travailler la déclaration littérale des objets. Vous aller déclarer un objet user avec :

*Les propriétés suivantes :*

* Prénom
* Nom
* Pays de résidence
* Age
* Moyens de paiement enregistrés (un tableau contenant des strings de type "visa", "mastercard" etc...)

**Les méthodes suivantes : **

* Une méthode qui alerte le prénom de l'utilisateur
* Une méthode qui alerte le nom de l'utilisateur
* Une méthode qui alerte l'année de naissance de l'utilisateur en faisant le calcul à partir de son âge

Appeler toutes ces méthodes dans votre script pour afficher les informations suivantes : nom, prénom, date de naissance.

#### 2.Pour aller plus loin

Vous avez créé un objet avec des propriétés et vous les avez affichées à l'écran ce qui est déjà un grand pas ! Cependant soyons honnête, dans la plupart des programmes vous devrez faire bien plus que ça.

Pour continuer à vous entraîner nous allons maintenant créer un objet qui va nous permettre de vérifier les informations de notre utilisateur. Pas de panique si vous y allez étape par étape tout ira bien.

Dans un premier temps, déclarez un objet litéral qui contient les propirétés suivantes :

* La liste tout en majuscules des pays autorisés pour notre utilisateur
* La liste tout en majuscules des moyens de paiment autorisés sur le site
* L'âge minimum pour entrer sur le site

Vous avez maintenant un objet avec les valeurs de référence auxquelles vous allez pouvoir comparer l'utilisateur. Vous allez donc ajouter les méthodes suivantes à cet objet :

* Une méthode qui vérifie si notre utilisateur à l'âge minimum requis et affiche un message en conséquence
* Une méthode qui vérifie que le pays de l'utilisateur est bien dans la liste des pays autorisés et affiche un message en conséquence
* Une méthode qui vérifie quels moyens de paiement de l'utilisateur sont autorisés sur le site et affiche un message avec les moyens de paiement utilisables

Maintenant appelez ces trois méthodes dans votre script et vérifiez qu'elles affichent les bons messages.

C'est super, normalement tout marche correctement ! Cependant vous pouvez encore améliorer un peu votre code ! Il est pénible de devoir lancer chaque méthode séparemment. Créez donc une méthode qui effectue toutes les vérifications des informations de l'utilisateur en une fois et vous aurez fini !


*****

### Exercice 2

#### 1.Consignes

Dans ce nouvel exercice sur la programmation orientée objet en JavaScript nous allons travailler la notion de constructeur. A la fin de l'exercice, vous aurez réalisé le script d'un mini jeu de combat, rien que ça !

##### Partie 1

Créez un constructeur qui permet de créer un guerrier. Ce constructeur initialisera un objet avec les caractéristiques suivantes : 
- Un nom (string) - Une valeur d'attack (number) - Une valeur de défense (number) - Une valeur de santé (number) - Une méthode combat qui permet de réduire la vie de la cible selon la valeur de l'attaque du combattant.

A vous de jouer, testez ce constructeur en créant deux guerriers différents qui s'attaqueront chacun leur tour. Vérifiez ensuite que votre script fonctionne en affichant leur vie respective. Si celle-ci a baissé c'est que tout fonctionne !

##### Partie 2

Nous allons améliorer un peu notre jeu et permettre à l'utilisateur de créer un autre type de personnage : le magicien.

Vous allez donc créer un constructeur pour notre magicien qui contientdra les mêmes proriétés et méthodes que notre guerrier. Le magicien disposera en plus :

* D'une propriété mana (number)
* D'une méthode de soin qui consomme 10 de mana mais rajoute 10 de vie au magicien (attention si le mana est inférieur à 10, elle ne doit pas pouvoir être lancée

Améliorez également un peu vos méthodes de soin et de combat:

* Faites en sorte que la méthode de combat, quand elle est lancée, affiche le nom du personnage qui attaque et de celui qui est attaqué, puis à la fin affiche la vie restante du personnage qui a été attaqué
* La méthode de soin, si le personnage a assez de mana doit afficher que le personnage essaie de se soigner, puis afficher son nouveau niveau de vie. Si le personnage n'a pas assez de mana, elle affiche simplement un message d'erreur.
Pour tester ce nouveau script, créez un magicien, dites à vos deux guerriers de l'attaquer chacun leur tour. Dites ensuite au magicien de se soigner, puis d'attaquer un des deux guerrier.

Normalement si tout fonctionneme correctement, vous devirez voir les bonnes valeur de vie s'afficher.

Voilà vous venez de créer un petit jeu en JavaScript, soyons honnête ce n'est le jeu du siècle mais il fait intervenir des concepts fondamentaux de programmation. Nous verrons par la suite comment l'améliorer car pour l'instant, vous avez dû répéter beaucoup de code !


*****

### Exercices 3

#### 1.Consignes

Dans cet exercice, nous allons créer un espace d'administration en JavaScript, le principe est simple, vous aller créer une page HTML avec un formulaire de fiche produit. Ce formulaire contiendra 3 inputs (titre, phrase d'accroche et description du produit).

Quand vous cliquez sur le bouton envoyer, votre programme JavaScript récupère les valeurs rentrées dans le formulaire, crée une fiche produits sous la forme d'une carte et l'ajoute sur la page. Une fois la carte ajoutée, les inputs du formulaire sont vidés.

Pour vous aider dans la réalisation de cette petite application, sachez que vous aurez besoin de :

* un objet pour créer vos produits
* un objet pour gérer votre formulaire (récupérer les données des inputs, créer un produits et l'insérer dans le DOM)

Un conseil, prenez le temps de bien penser l'organisation de votre programme et les relations entre les différents objets. N'hésitez pas à faire un plan sur papier avant ;-)


*****

### Exercice 4

#### 1.Consignes

Réaliser une application qui permet de trier une liste de client avec requête AJAX.

Sur la page HTML on trouve un tableau avec un input de type dropdown, la requête AJAX récupère une liste de client au format JSON sur le serveur. Quand l'utilisateur sélectionne une valeur dans le select, la liste de client est triée selon cette valeur.

*Attention n'oubliez de programmer en orienté objets !*

Par exemple un objet se chargera de gérer l'HTML, sa création et son affichage

Un objet se chargera de stocker la liste de clients récupérée sur le serveur, de la trier, de mettre chaque client dans une case du tableau etc.

=====# SIMPLON-Exercices-JavaScript
