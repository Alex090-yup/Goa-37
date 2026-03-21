let func = function(text) {
    let odd = 0
    let even = 0
    let numbers = "0123456789"

    for (let char of text) {
        numbers.includes(char) ? 
            Number(char) % 2 === 0 ? even += 1 : odd += 1 : null
    }
    return { odd, even }
}
console.log(func("tyf454"))