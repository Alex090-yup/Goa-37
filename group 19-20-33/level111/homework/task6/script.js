let func = (el = "hello") => {
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let result = {}

    for (let i of el) {
        if(letters.includes(i)){
            if (result[i]) {
                result[i]++
            } else {
                result[i] = 1
            }
        }
    }

    return result
}

console.log(func())