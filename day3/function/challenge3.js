const prompt = require("prompt-sync")()

let prenom = prompt("Entrer votre prenom : ").toLowerCase()
let nom = prompt("Entrer votre nom : ").toLowerCase()

function genererEmail(prenom,nom){
    return result = prenom+"."+nom+"@entreprise.com";
}

console.log(genererEmail(prenom,nom))

