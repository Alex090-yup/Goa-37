function createCar(brand, model, year){
    return{
        brand,
        model,
        year
    }
}
const car1 = createCar("Mercedes", "C-Class", 2018)
const car2 = createCar("BMW", "X6", 2018)
console.log(car1)
console.log(car2)