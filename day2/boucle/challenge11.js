const prompt = require("prompt-sync")()
let nombre = prompt("Entrer un nbr : ")
let F = 1
for (let i = nombre; i >= 1; i--){
F = F*i
}
console.log("le factoriel est", F)