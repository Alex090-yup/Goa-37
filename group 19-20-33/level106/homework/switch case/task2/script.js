let input = prompt("Enter your grade: ")
let excellent = "A"
let veryGood = "B"
let good = "C"
let bad = "D"
let fail = "F"

switch(input){
    case "A":
        console.log("Excellent")
        break;
    case "B":
        console.log("Very good")
        break;
    case "C":
        console.log("Bad")
        break;
    case "D":
        console.log("You fail")
        break;
    default:
        console.log("Doesn't exist")
        break;
}