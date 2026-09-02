const prompt = require("prompt-sync")()
let N = prompt("Entrer un nombre :")
let score = 0
let i = 0
while (i<N){
    i++
    score=score+100
    console.log("Score est :" ,score)
}
console.log(score)
