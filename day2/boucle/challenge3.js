const prompt = require("prompt-sync")()
let N = prompt("Entrer un nombre: ")
somme=0
for (let i=1 ; i<=N ; i++){
    somme=somme + i 
}
console.log(somme)