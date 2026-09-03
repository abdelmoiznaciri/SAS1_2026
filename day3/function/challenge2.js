const prompt = require("prompt-sync")()

let ageHumain = Number(prompt("Entrer l'age :"))

function calculerAgeChien(ageHumain){
    return ageHumain * 7
}

console.log(calculerAgeChien(ageHumain))
