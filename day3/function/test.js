const prompt = require("prompt-sync")()

let grade = prompt("enter ur grade : "); 
let result;

switch (grade) {
    case 'A':
    case 'B':
    case 'C':
        result = "Grade is good"; 
        break;
    case 'D':
        result = "Grade is Poor";
        break;
    default:
        result = "No grades achieved";  
}

console.log(result);