const prompt = require("prompt-sync")()
let base = prompt("Entrer la base :")
let exposant = prompt ("Entrer l'exposant :")
let i = 0
let resultat = 1
while (i < exposant){
    i++
    resultat = resultat * base
}
console.log(resultat)
