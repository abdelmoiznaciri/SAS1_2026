const prompt = require ("prompt-sync")()
let NBR=1
let i =0
let somme =0
while (NBR!==0){
    NBR = Number(prompt("Saisie un nbr :"))
    i++
    somme=somme+NBR
    if (NBR === 0){
        console.log("nombre de valeurs : ", i-1)
        console.log("la somme est :", somme)
    }
}
