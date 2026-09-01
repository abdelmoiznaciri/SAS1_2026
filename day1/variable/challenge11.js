let prompt = require("prompt-sync")()
let longeur = prompt("Entrez la longeur de votre piece : ")
let largeur = prompt("Entrez la largeur de votre piece : ")
let surface = longeur * largeur
let perimetre = 2 * (longeur + largeur)
console.log("surface : " + surface + " m2")
console.log("perimetre : " + perimetre + " m")
