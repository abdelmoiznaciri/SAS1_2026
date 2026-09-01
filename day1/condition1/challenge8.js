const prompt = require("prompt-sync")();
let num1 = +prompt("Entrez le premier nombre : ")
let operateur = prompt("Entrez l'opérateur (+, -, *, /) : ")
let num2 = +prompt("Entrez le deuxième nombre : ")
switch (operateur) {
    case "+":
        console.log(num1 + num2)
        break; 
    case "-":
        console.log(num1 - num2)
        break;
    case "*":
        console.log(num1 * num2)
        break; 
    case "/":
        if (num2 === 0) {
            console.log("Erreur : division par zéro")
        }
        else {
            console.log(num1 / num2)
        }
        break;
default:
    console.log("Opérateur invalide")
    break;
}
