let func = function(string){
    let result = {}
    string = string.toLowerCase()
    for(let i of string){
        if(result[i]){
            result[i] += 1
        } else {
            result[i] = 1
        }
    }
    return result
}

console.log(func("Hello"))