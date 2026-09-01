let prompt = require("prompt-sync")()
let GB = prompt("Quel est votre stockage en GB ? ")
let MB = GB * 1024
console.log("stockage en GB: " + GB)
console.log("stockage en MB: " + MB)