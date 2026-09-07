const prompt = require("prompt-sync")()

function inverserChaine(chaine){
    let inverse = "";
    let i = chaine.length - 1
    do{
        inverse+=chaine[i]
        i--
    }while(i >= 0)
    return inverse
}

let strng = prompt("entrer un mot : ")
console.log(inverserChaine(strng))
