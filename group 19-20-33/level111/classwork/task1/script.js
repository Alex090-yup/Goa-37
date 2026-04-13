let array = [
    { name: "apple", price: 2 },
    { name: "banana", price: 5 },
    { name: "orange", price: 3 }
]

let result = array.reduce((acc, curr) => {
    return Math.max(curr["price"], acc)
}, 0)

console.log(result)