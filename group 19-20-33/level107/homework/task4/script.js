const func = function(number){
    let a = 0
    for(let i = 0; i<number.length; i++){
        let b = number[number.length - 1 - i]
        if(b === "1"){
            a += 2**i
        }
    }
    return a
}
console.log(func("00111"))

const func1 = (number) => {
    let a = 0
    for(let i = 0; i<number.length; i++){
        let b = number[number.length - 1 - i]
        if(b === "1"){
            a += 2**i
        }
    }
    return a
}
console.log(func("00111"))