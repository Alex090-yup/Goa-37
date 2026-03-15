let func = function(string){
    let number = 0
    let letters = 0
    let other = 0
    string = string.toLowerCase()
    for(let i of string){
        let numbers = "0123456789"
        let strs = "abcdefghijklmnopqrstuvwxyz"
        if(numbers.includes(i)){
            number += 1
        }
        else if(strs.includes(i)){
            letters += 1
        }
        else{
            other += 1
        }
    }
    let result = 1
    if(number > 0){
        result *= number
    }
    if(letters > 0){
         result *= letters
    }
    if(other > 0){
        result *= other
    }
    return result
}

console.log(func("Hello123@"))