const prompt = require("prompt-sync")()
let sm=0
let nbr = prompt("Entrer un nombre entier : ")
for (let i = 1; i<= nbr; i++){
    let rslt = nbr%i
    if(rslt===0)
        sm++
        console.log(i)
}
console.log("Nombre de diviseurs est : ", sm)
