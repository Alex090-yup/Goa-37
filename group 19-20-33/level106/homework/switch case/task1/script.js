let num = 3
let num2 = 4
op = prompt("Choose op: ")
let op1= "+"
let op2 = "-"
let op3 = "*"
let op4 = "/"

switch(op){
    case "+":
        console.log(num+num2)
        break;
    case "-":
        console.log(num-num2)
        break;
    case "*":
        console.log(num*num2)
        break;
    default:
        console.log(num/num2)
        break;
}