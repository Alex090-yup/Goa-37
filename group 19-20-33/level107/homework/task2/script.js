// arrow function
let DPZ = (number1, number2) => {
    let mult = 1
    for(let i = number1; i<number2; i++){
        mult*=i
    }
    return mult
}
console.log(DPZ(5,7))
// function exspression
let DPZ2 = function(number1, number2){
    let mult = 1
    for(let i = number1; i<number2; i++){
        mult*=i
    }
    return mult
}
console.log(DPZ(5,8))