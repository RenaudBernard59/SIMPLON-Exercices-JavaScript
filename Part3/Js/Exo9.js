/* ========== Partie 3 - Exercice 9 ========== */
/*
tableau (1, 2, 4, ... ... ...)

prompt tableau[0]
	if entrer "fin"
		end
	sinon
		prompt tableau[1]
		reboot


*/

function toDoList() {
	mesTaches = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetuer", "adipiscing", 
	"elit", "Aenean", "commodo", "ligula", "eget", "dolor", "Aenean", "massa", "Cum", 
	"sociis", "natoque", "penatibus", "et", "magnis", "dis", "parturient", "montes", 
	"nascetur", "ridiculus", "mus", "Donec", "quam", "felis", "ultricies", "nec", 
	"pellentesque", "eu", "pretium", "quis", "sem", "Nulla", "consequat", "massa", 
	"quis", "enim", "Donec", "pede", "justo", "fringilla", "vel", "aliquet", "nec", 
	"vulputate", "eget", "arcu", "In", "enim", "justo", "rhoncus", "ut", "imperdiet", 
	"a", "venenatis", "vitae", "justo", "Nullam", "dictum", "felis", "eu", "pede", 
	"mollis", "pretium"];
	var reponse;
	i = 0;

	

	while (i < mesTaches.length) {

		reponse = prompt("Chose à faire " + mesTaches[i] + " // 'fin' pour terminer.");

		if (reponse === "fin") {
			alert("Fini");
			break;

		} 
	}
	
}

toDoList();




// END