let prompt = require("prompt-sync")()
let U = prompt("Entrez la tension en volts : ")
let I = prompt("Entrez l'intensité en ampères : ")
let t = prompt("Entrez le temps en heures : ")
let energie = U * I * t
console.log("L'énergie consommée est : " + energie + " Wh")