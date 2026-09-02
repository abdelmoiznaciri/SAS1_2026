const prompt = require("prompt-sync")()
let X = prompt("Entrer un nombre x : ")
let N = prompt("Entrer un nombre n : ")
let rslt = 0
let cmpt = 0
for (let i = 1 ; rslt <= N ; i++){
    cmpt++
    rslt = i*X
    if (rslt => N) break
    console.log(rslt)
}
console.log("e nombre total de multiples trouvés est : ", cmpt)