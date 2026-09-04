const prompt = require("prompt-sync")()

let N = prompt("Entrer un nombre : ")
let somme = 0

for(let i = 1 ; i <= N/2 ; i++){

    if(N % i === 0){
    somme += i
    }
}

if(somme == N){
    console.log(N +" est un nombre pair")
}else{
    console.log(N +" n'est pas un nombre pair")
}



