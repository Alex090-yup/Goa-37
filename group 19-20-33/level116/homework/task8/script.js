let func = function(array){
    let result = []
    for(let item of array){
        if(result.includes(item) === false){
            result.push(item)
        }
    }
    return result
}
console.log(func([5, 6, 7, 7, 8, 4, 3, 3]))