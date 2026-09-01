const prompt = require("prompt-sync")();
let day = prompt("Entrez un nombre : ")
switch (day) {
    case "1":
        console.log("Lundi")
        break;
    case "2":
        console.log("Mardi")
        break;
    case "3":
        console.log("Mercredi")
        break;
    case "4":
        console.log("Jeudi")
        break;
    case "5":
        console.log("Vendredi")
        break;
    case "6":
        console.log("Samedi")
        break;
    case "7":
        console.log("Dimanche")
        break;
default:
    console.log("Option invalide")
    break;
}
