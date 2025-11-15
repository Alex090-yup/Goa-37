let num1 = Number(prompt("Enter your first number: "))
let num2 = Number(prompt("Enter your second number: "))
total1 = 0
total2 = 0

for(let i = 0; i<num1; i++){
    total1+=i
}

for(let i = 0; i<num2; i++){
    total2+=i
}
console.log(total1+total2)