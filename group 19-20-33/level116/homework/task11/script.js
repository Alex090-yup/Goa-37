const func =  array => {
    let min = array[0]
    for(let i = 0; i<array.length; i++){
        if(array[i]<min){
            min = array[i]
        }
    }
    return min
}

console.log(func([2, 3, 1, 5, 6]))