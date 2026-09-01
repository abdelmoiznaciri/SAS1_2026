let prompt = require("prompt-sync")()
let time = prompt ("Donnez la durée de film :")
if (time < 60) {
    console.log("court métrage")
}
else if (time >= 60 && time <= 120) {
    console.log("film standard")
}
else {
    console.log("long film")
}