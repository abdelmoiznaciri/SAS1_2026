const prompt = require("prompt-sync")();
let option = prompt("Entrez un nombre : ")
switch (option) {
    case "1":
        console.log("afficher le profile")
        break;
    case "2":
        console.log("afficher les parametres")
        break;
    case "3":
        console.log("afficher les notifications")
        break;
    case "4":
        console.log("Se deconnecter")
        break;
    default:
        console.log("Option invalide")
        break;
}
