/* ========== Partie 3 - Exercice 6 ========== */
/*

var tableau = (1, 2, 3, 4, 5, 6)
print 1
print 6
print 2 à 5



 */


function randomEntier(longeurTable) {
  randInt = Math.random() * (longeurTable - 1) + 1;
  return randInt = parseInt(randInt);
}




function afficherMaListe() {

	maListe = ["agneau", "Agrumes", "Ail", "allume gaz", "Aromes", "aubergines", 
	"avocats", "Bananes", "Barquettes de crudités", "Barres chocolatees", "beurre doux", 
	"beurre salé", "biscottes", "Biscuits aux fruits", "Biscuits chocolats.", 
	"Biscuits Petit Dejeuner", "blé", "bœuf", "Boisson lactee", "boites", "Bonbons", 
	"Brioches", "brocolis", "Burger", "Cafés Classiques", "Camembert", "carottes", 
	"carottes", "caviar", "céréales enfants", "champignons", "Chapelure", "Chewing gum", 
	"Chicorés", "Chips", "Chocolat au lait", "Chocolat Blanc", "Chocolat Dessert", 
	"Chocolat Noir", "Chocolat patissier", "Chocolats en poudre", "choux", "Compotes", 
	"Compotes en gourdes", "Compotes standards", "concombre", "confiture de fraise", 
	"cordons bleus", "cornichons", "courgettes", "Crackers", "crème  fraîche épaisse", 
	"crème  fraîche liquide", "Creme dessert", "Crepes", "croquettes", "croutons", 
	"Decafeines & Doux", "Dosettes", "Emmental", "épinards", "Expresso", "Farine", 
	"Filtres", "Foies gras", "Fromage a  tartiner", "Fromage pour enfants", 
	"fromages blancs", "Fruits au sirop", "Fruits exotiques", "Fruits rouges", 
	"Fruits secs", "galettes", "glaces", "Gouters Fourrés", "haricots verts", 
	"Herbes fraiches", "Houmous", "huile", "Infusions", "jambon blanc", "jambon cru", 
	"jambon de volaille", "Jus d'orange", "Jus de fruits", "Jus de fruits et legumes", 
	"ketchup", "knackis", "lapin", "lardons", "légumes", "légumes secs", "Levure", 
	"litière ", "Madeleines", "Maizena", "margarine", "mayonnaise", "miel", "moutarde", 
	"Mozzarella", "navets", "nutella", "œufs ", "Olives", "pain", "Pain au lait", 
	"Pain de mie", "Pain et baguette", "pain suédois", "papier alu", "pates", "pâtés ", 
	"Pates a tarte", "Pates fraiches", "Petits pois", "petits suisses", "piles", 
	"Pistaches", "Pizza", "Plats cuisines", "plats cuisinés", "Poilane", "poireaux", 
	"poisson", "poivrons", "Pommes", "Pommes de terre", "porc", "potiron", "Preparations", 
	"Produits exotiques", "Produits vegetaux", "purée", "Quatre Quarts", "Rape", 
	"rillette", "riz", "Riz au lait", "Roquefort", "Sables", "sacs congélation", 
	"Salades de fruits", "Salades vertes", "sardines", "sauce tomate", "sauces", 
	"saucisses ", "saucisson", "Saumon fume", "sel", "semoule", "soupes", "soupes", 
	"Steacks hachés", "Sucre en morceaux", "Sucre en poudre", "Surimi", "Thé nature", 
	"Thés parfumés", "thon", "Tomates", "Tuilles", "vaisselle jetable", "vinaigre ",
	"Volaille", "yaourts à boire", "yaourts aux fruits", "yaourts enfants", 
	"yaourts natures", "yaourts santé"];

	
	longeurTable = maListe.length
	randInt = randomEntier(longeurTable)

	console.log(maListe[0]);
	console.log(maListe[longeurTable - 1]);	
	console.log(maListe[randInt]);

	/* Pour parcourir le tableau
	for (i=0;i<=longeurTable;i++) {
		console.log(laListe[i]);
	
	}
	*/

	
} // End function

afficherMaListe();



// END