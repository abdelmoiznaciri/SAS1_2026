let compteur = 0
function compterCaracteres(chaine){
    for(let caractere of chaine){
        compteur++
    }
return compteur;
}

console.log(compterCaracteres("code"))