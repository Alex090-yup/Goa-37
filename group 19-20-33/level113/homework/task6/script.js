function createCar(brand, year){
    return {
        brand:brand,
        year:year
    }
}

const car1 = createCar("BMW", 2007)
const car2 = createCar("Audi", 2010)
const car3 = createCar("Mercedes", 2020)
const car4 = createCar("Lexus", 2022)

console.log(car1)
console.log(car2)
console.log(car3)
console.log(car4)