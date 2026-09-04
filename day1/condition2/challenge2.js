const prompt = require("prompt-sync")()

let color = prompt("Entrer une de ces couleurs (rouge,orange,vert) : ")

if(color==="rouge"){
    console.log("Arrêtez-vous")
}else if(color==="orange"){
    console.log("Ralentissez")
}else if(color==="vert"){
    console.log("Vous pouvez passer")
}else{
    console.log("Couleur invalide")
}
