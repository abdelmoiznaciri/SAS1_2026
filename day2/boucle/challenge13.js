const prompt = require("prompt-sync")()
let n = prompt("Entrer un nombre : ")
let ndiv = 1 
for(let i = 1; i <= n/2; i++){
    let rslt= n%i
    if (rslt === 0)
        ndiv++
}
if (ndiv===2){
    console.log(n+" est un nombre premier")
} else {
    console.log(n+" n'est pas un nombre premier")
}