let prompt = require("prompt-sync")()
let code = prompt("Entrez le code : ")
let chiffre4 = code % 10
let chiffre3 = ((code % 100) - chiffre4) / 10
let chiffre2 = ((code % 1000) - chiffre3 * 10 - chiffre4) / 100
let chiffre1 = ((code % 10000) - chiffre2 * 100 - chiffre3 * 10 - chiffre4) / 1000
console.log("chiffre1 : " + chiffre1)
console.log("chiffre2 : " + chiffre2)
console.log("chiffre3 : " + chiffre3)
console.log("chiffre4 : " + chiffre4)