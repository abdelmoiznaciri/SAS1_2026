let prompt = require ("prompt-sync")()
let noteCC = prompt("Entrez la note de CC : ")
let noteProjet = prompt("Entrez la note de Projet : ")
let noteExamen = prompt("Entrez la note d'Examen : ")
let noteFinale = (noteCC * 2 + noteProjet * 3 + noteExamen * 5) / 10
console.log("note finale : " + noteFinale)