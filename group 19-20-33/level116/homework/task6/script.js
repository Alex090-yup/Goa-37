let func = function(array){
    total = 0
    for(let item of array){
        total+=item
    }
    let result=total/array.length
    return result
}
console.log(func([5, 7, 8, 90, 4]))