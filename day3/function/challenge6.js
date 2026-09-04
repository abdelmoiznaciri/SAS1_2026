const prompt = require("prompt-sync")()

let motDePasse = prompt("Entrer votre mot de passe : ")
let answer;

function verifierMotDePasse(a) {
    if (a.length >= 8 && a.includes("@")){
        answer=true
    }else{
        answer=false
    }

return answer
}

console.log(verifierMotDePasse(motDePasse))
