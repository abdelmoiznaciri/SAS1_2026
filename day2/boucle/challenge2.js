const prompt = require("prompt-sync")()
let N = prompt("Entrer un nombre : ")
for (let i =1 ; i<=N ; i++){
    if (i%2==0)
        console.log(i)
}