const prompt = require("prompt-sync")()

let nom = prompt("Entrer votre nom : ")
let titre = prompt("Entrer votre titre : ").trim()|| undefined

function saluerClient(nom, titre = "Client"){
    
    return "bonjour "+titre+" "+nom
}

console.log(saluerClient(nom,titre))
