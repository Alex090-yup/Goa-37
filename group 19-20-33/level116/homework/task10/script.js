let func = array => {
    let maxCount = 0
    let num = array[0]
    for (let i = 0; i < array.length; i++){
        let count = 0
        for (let t = 0; t < array.length; t++){
            if(array[i] === array[t]){
                count++
            }
        }

        if(count > maxCount){
            maxCount = count
            num = array[i]
        }
    }
    return num
}
console.log(func([3, 5, 5, 6, 7, 10, 9, 9, 9]))