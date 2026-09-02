const prompt = require("prompt-sync")();
let code = prompt("Entrez le code : ")
switch (code) {
    case "a":
        console.log("electronique")
        console.log("exemple : telephone")
        break;
    case "b":
        console.log("vetement")
        console.log("exemple : T-shirt")
        break;
    case "c":
        console.log("alimentation")
        console.log("exemple : pain")
        break;
    case "d":
        console.log("maison")
        console.log("exemple : chaise")
        break;
    case "e":
        console.log("sport")
        console.log("exemple : ballon")
        break;
default:
    console.log("code invalide")
    break;
}