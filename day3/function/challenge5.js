const prompt = require("prompt-sync")()

let N = prompt("Entrer un nombre sous la forme suivante 1 2 3 4 5 : ")
let somme = 0
let NSpace = N.split(" ")

function additionnerTout(...N) {
    for (i=0 ; i < N.length; i++){
        somme = Number(N[i]) + somme
    }
return somme
}

console.log(additionnerTout(...NSpace))
