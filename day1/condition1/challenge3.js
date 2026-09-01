const prompt = require("prompt-sync")();
let note = prompt("Entrez votre note : ")
if (note >= 10) {
    console.log("admis")
}
else {
    console.log("non admis")
}