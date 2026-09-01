let prompt = require("prompt-sync")()
let r = prompt("Entrez le rayon du réservoir : ")
let h = prompt("Entrez la hauteur du réservoir : ")
const pi = 3.14159
let volume = pi * r ** 2 * h
console.log("volume " + volume + " m3")
