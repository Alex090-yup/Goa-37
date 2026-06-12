const array = ["Alex", "David", "Felix", "Nina", "Henry", "Nona", "Alex", "Felix"]

let func = array.reduce((result, item) => {
    if(result[item]){
        result[item] = result[item] + 1
    }
    else{
        result[item] = 1
    }
    return result
}, {})

console.log(func)