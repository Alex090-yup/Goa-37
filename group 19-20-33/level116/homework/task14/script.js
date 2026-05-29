const array = [{brand: "Mercedes", year:2024}, {brand: "Lexus", year: 2025}, {brand: "Toyota", year: 2018}]
let func = array.map(item => {
    return item.brand
})
console.log(func)