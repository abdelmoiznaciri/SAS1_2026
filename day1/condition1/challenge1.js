const prompt = require("prompt-sync")();
let age = prompt("Quel est votre age ? ")
if (age >= 18) {
    console.log("acces autorisé")
}
else {
    console.log("acces refusé")
}
