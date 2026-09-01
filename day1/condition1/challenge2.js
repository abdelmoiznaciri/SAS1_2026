const prompt = require("prompt-sync")();
let number = prompt("Entrez un nombre : ");
if (number > 0) {
    console.log("Le nombre est positif");
}
else if (number < 0) {
    console.log("Le nombre est négatif");
}
else {
    console.log("Le nombre est nul");
}