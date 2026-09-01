let prompt = require("prompt-sync")()
let MAD = prompt("Quel est votre budget en MAD ? ")
let EUR = MAD / 11
console.log("budget en mad: " + MAD)
console.log("budget en eur: " + EUR)