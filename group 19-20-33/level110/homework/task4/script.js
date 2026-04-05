let array = [6, 7, 8, 9, 10, 40]

let new_array = array.map(number => {
    let doubled = String(Math.pow(number, 2))
    if(doubled.length===2){
        return Number(doubled)
    }
})

console.log(new_array)