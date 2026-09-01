let prompt = require("prompt-sync")()
let x1 = prompt("Entrez la valeur de x1 : ")
let y1 = prompt("Entrez la valeur de y1 : ")
let z1 = prompt("Entrez la valeur de z1 : ")
let x2 = prompt("Entrez la valeur de x2 : ")
let y2 = prompt("Entrez la valeur de y2 : ")
let z2 = prompt("Entrez la valeur de z2 : ")
let distance = ((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2) ** 0.5
console.log("La distance est : " + distance)