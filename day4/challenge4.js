const prompt = require("prompt-sync")()

function compterVoyelles(chaine){
    let compteur = 0
    for(let i=0 ; i < chaine.length ; i++){
        if( 
        chaine[i] == 'a' ||
        chaine[i] == 'e' ||
        chaine[i] == 'i' ||
        chaine[i] == 'o' ||
        chaine[i] == 'u' ||
        chaine[i] == 'y'
        ) compteur = compteur + 1
    }
    return compteur
}

let word = prompt("write a word to check : ")
console.log(compterVoyelles(word))
