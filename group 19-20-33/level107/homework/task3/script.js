// arrow function
let RootofNum = (number) =>{
    let root = Math.sqrt(number)
    return Number.isInteger(root)
    ?  true
    :  Math.pow(number,2)
}
console.log(RootofNum(25))

// function exspression
let RootofNum2 = function(number){
    let root = Math.sqrt(number)
    return Number.isInteger(root)
    ?  true
    :  Math.pow(number,2)
}
console.log(RootofNum(14))