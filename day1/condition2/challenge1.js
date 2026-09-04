const prompt = require ("prompt-sync")()

let n = Number(prompt("entrer votre montant : "))
let livraison = 0
let total = 0

if(n<100){
    livraison = 30
    total = n + livraison
}else if(100 <= n <= 299){
    livraison = 20
    total = n + livraison
}else if(300 <= n <= 499){
    livraison = 10
    total = n + livraison
}else{
    total = n + livraison
}

console.log("Montant commande : " + n)
console.log("Frais livraison :" + livraison)
console.log("Total à payer :" + total)

