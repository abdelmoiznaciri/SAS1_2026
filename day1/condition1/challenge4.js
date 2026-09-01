const prompt = require("prompt-sync")();
let montant = +prompt("Entrez le montant : ")
let fraisLivraison = 40
let total = montant + fraisLivraison
if (montant >= 500) {
    console.log("livraison gratuite")
    console.log("Total à payer : " + montant + " DH")
}
else {
    console.log("frais de livraison : " + fraisLivraison + "DH")
    console.log("Total à payer : " + total + " DH")
}