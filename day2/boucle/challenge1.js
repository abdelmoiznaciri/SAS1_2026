const prompt = require("prompt-sync")()
let num = prompt("Entrer un nombre : ")
for(let i=1; i <= num ; i++) {
    console.log("nombre de participants est : ", i )
}