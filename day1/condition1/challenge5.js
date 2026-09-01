const prompt = require("prompt-sync")();
let note = prompt("Entrez votre note : ")
if (note >= 0 && note <= 20) {
    console.log("note valide")
}
    if (note < 10) {
        console.log("echec")
    }
    else if (note >= 10 && note < 11.99) {
        console.log("passable")
    }
    else if (note >= 12 && note < 13.99) {
        console.log("assez bien")
    }
    else if (note >= 14 && note < 15.99) {
        console.log("bien")
    }
    else if (note >= 16 && note < 17.99) {
        console.log("tres bien")
    }
    else if (note >= 18 && note <= 20) {
        console.log("excellent")
    }
else {
    console.log("note invalide")
}