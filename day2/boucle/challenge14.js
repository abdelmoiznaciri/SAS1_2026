const prompt = require("prompt-sync")()

let N = Number(prompt("entrer un nbr: "))

let pair=0
let impair=0
 

for(let i = 1; i <= N; i++){
    rslt = i % 2
    if(rslt===0){
        pair += i
    }else{
        impair += i
    }
}

console.log("Somme des pairs : "+pair)
console.log("Somme des impairs : " +impair)
