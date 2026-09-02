const prompt = require("prompt-sync")()
let N = prompt("Entrer un nombre: ")
for (let i = 1 ; i<=10 ; i++){
    N*i
    console.log(N + "x" + i + "=" + (N*i) )
}
