let prompt = require("prompt-sync")()
let litres = prompt ("Combien de litres d'essence avez-vous ? ")
let km = prompt ("Combien de kilomètres avez-vous parcourus ? ")
let consommation = (litres / km) * 100
console.log("Distance :" +km + " km")
console.log("Carburant :" +litres + " litres")
console.log("Consommation :" +consommation + " L/100km")