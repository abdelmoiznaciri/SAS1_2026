let prompt = require("prompt-sync")()
let prixPizza = 60
let prixBurger = 45
let prixTacos = 40
let prixSalade = 30
let total = 0
let plat = prompt("Entrez le num du plat : ")
switch (plat) {
    case "1":
        console.log("Plat : Pizza")
        console.log("Prix : " + prixPizza + " DH")
        total += prixPizza
        prix = prixPizza
        break
    case "2":
        console.log("Plat : Burger")
        console.log("Prix : " + prixBurger + " DH")
        total += prixBurger
        prix = prixBurger
        break
    case "3":
        console.log("Plat : Tacos")
        console.log("Prix : " + prixTacos + " DH")
        total += prixTacos
        prix = prixTacos
        break
    case "4":
        console.log("Plat : Salade")
        console.log("Prix : " + prixSalade + " DH")
        total += prixSalade
        prix = prixSalade
        break
default:
    console.log("Plat invalide")
    break
}
let quantite = Number(prompt("Entrez la quantité : "))
     total *= quantite
        if (total >= 200) {
            total *= 0.9
        }
            else {
                total = total
            }

console.log("Plat : ", plat)
console.log("Prix unitaires : ", prix)
console.log("Quantite : ", quantite)
console.log("Sous-total : ", total)
console.log("Total a payer : ", total)